"use client";
import { VscLoading } from "react-icons/vsc";
import { useEffect } from "react";
import { redirect, useRouter } from "next/navigation";

const Callback = ({
  searchParams: { code },
}: {
  searchParams: { code: string };
}) => {
  const router = useRouter();

  useEffect(() => {
    if (code) {
      fetch("/api/radio/get_token/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code: code }),
      })
        .then((resp) => resp.json())
        .then((data) => {
          localStorage.setItem("authData", JSON.stringify(data));
          router.push("/apps/radio/player");
        });
    }
  }, [code]);

  return (
    <div className="flex h-full items-center justify-center">
      <VscLoading className="w-32 h-32 animate-spin" />
    </div>
  );
};

export default Callback;
