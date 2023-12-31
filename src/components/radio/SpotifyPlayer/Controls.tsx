import { useContext } from "react";
import { BsSkipStart, BsSkipEnd, BsPlay, BsPause } from "react-icons/bs";
import SpotifyAuthContext, {
  useSpotifyAuthContext,
} from "./SpotifyAuthContext";
import { useRefreshTokenFetch } from "./useFetch";
import { PlaybackState } from "./types";
import { useSpotifyClient } from "./utils/client";

const Controls = ({ playerData }: { playerData: PlaybackState }) => {
  const { is_playing } = playerData;
  // playerData === undefined ? { is_playing: false } : playerData;
  const { isAuthenticated } = useSpotifyAuthContext() || {};
  const { get, post, put, _delete } = useSpotifyClient();
  const skipTrack = (forward = true) => {
    if (!isAuthenticated) return;
    const dir = forward ? "next" : "previous";
    post?.("https://api.spotify.com/v1/me/player/" + dir);
  };

  const playTrack = (pause = false) => {
    if (!isAuthenticated) return;
    const dir = pause ? "pause" : "play";
    put?.("https://api.spotify.com/v1/me/player/" + dir);
  };

  return (
    <>
      <BsSkipStart
        onClick={() => skipTrack(false)}
        className="w-9 h-9 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer duration-150"
      />
      {is_playing ? (
        <BsPause
          onClick={() => playTrack(true)}
          className="w-9 h-9 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer duration-150"
        />
      ) : (
        <BsPlay
          onClick={() => playTrack()}
          className="w-9 h-9 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer duration-150"
        />
      )}
      <BsSkipEnd
        onClick={() => skipTrack()}
        className="w-9 h-9 text-blue-500 hover:text-white hover:bg-blue-500 rounded cursor-pointer duration-150"
      />
    </>
  );
};

export default Controls;
