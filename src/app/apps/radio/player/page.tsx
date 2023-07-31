"use client";
import { ReactNode, useEffect, useState } from "react";
import FullscreenModal from "@/components/radio/FullscreenModal";
import SpotifyPlayer from "@/components/radio/SpotifyPlayer";
import CurrentTrackContext, {
  CurrentTrack,
} from "@/components/radio/CurrentTrackTontext";
import SpotifyAuthContext from "@/components/radio/SpotifyPlayer/SpotifyAuthContext";
import { AuthData } from "@/components/radio/SpotifyPlayer/types";
import SpotifyPlayerSDK from "@/components/radio/SpotifyPlayer/SpotifyPlayerSDK";
import Player from "@/components/radio/Player";

const PlayerPage = () => {
  // const [play, togglePlay, progress, setAudioSrc] = useAudio("");
  const [fullscreenMode, setFullscreenMode] = useState<boolean>(false);
  // // context:
  // const [authData, setAuthData] = useState<AuthData | null>(null);
  // const [loading, setLoading] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);
  // const { get, post, put, _delete } = useSpotifyClient();

  // const [currentTrack, setCurrentTrack] = useState({});

  // useEffect(() => {
  //   setAuthData(JSON.parse(localStorage.getItem("authData") || "null"));
  // }, []);
  //     isAuthenticated: !!authData,
  //     authData: authData,
  //     setAuthData,
  //     loading,
  //     setLoading,
  //     error,
  //     setError,
  //   }}
  // >
  // <></>
  return (
    <>
      {/* <CurrentTrackContext.Provider value={{ currentTrack, setCurrentTrack }}> */}
      <FullscreenModal open={fullscreenMode} setOpen={setFullscreenMode} />
      {/* <Player setFullScreen={setFullscreenMode} /> */}
      <SpotifyPlayer setFullScreen={setFullscreenMode} />
      {/* </CurrentTrackContext.Provider> */}
    </>
  );
};

export default PlayerPage;
