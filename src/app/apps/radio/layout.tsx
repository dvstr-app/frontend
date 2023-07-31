import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const RadioLayout = ({ children }: Props) => {
  return <div className="mt-12 w-full flex justify-center">{children}</div>;
};

export default RadioLayout;
