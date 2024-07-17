import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { assets } from "../../assets/assets";
import { PlayerContext } from "../../context/PlayerContext";
import {
  useGetArtistsByIdQuery,
  useGetArtistsTracksByIdQuery,
} from "../../redux/services/spotifyApi";
import { ClipLoader } from "react-spinners";
import { useGetTracksByIdQuery } from "../../redux/services/spotifyApi";

const DisplayArtists = () => {
  const { id } = useParams();
  const {
    data: artistData,
    error: artistError,
    isLoading: artistLoading,
  } = useGetArtistsByIdQuery(id);
  const {
    data: tracksData,
    error: tracksError,
    isLoading: tracksLoading,
  } = useGetArtistsTracksByIdQuery(id);

  const artist = artistData?.artists?.find((artist) => artist.id === id);
  const tracks = tracksData?.data?.artist?.discography?.topTracks?.items || [];

  const { playWithId } = useContext(PlayerContext);

  if (artistLoading || tracksLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#1DB954" size={150} />
      </div>
    );
  }

  if (artistError || tracksError) return "Error loading artists data";
  if (!artist) return "Artist not found";

  return (
    <>
      <Navbar />
      <div className="mt-10 flex gap-8 flex-col md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={artist.images[0]?.url}
          alt={artist.name}
        />
        <div className="flex flex-col">
          <p>Playlist</p>
          <h2 className="text-5xl font-bold mb-4 md:text-7xl">{artist.name}</h2>
          <h4>{artist.label}</h4>
          <p className="mt-1">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="Spotify"
            />
            <b>Spotify</b>
            <li>1,323,154 likes</li>
            <li>
              <b>{artist.total_tracks} songs, about 2 hr 30 min</b>
            </li>
          </p>
        </div>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 mt-10 mb-4 pl-2 text-[#a7a7a7]">
        <p>
          <b className="mr-4">#</b>Title
        </p>
        <p>Album</p>
        <p className="hidden sm:block">Date Added</p>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Duration" />
      </div>
      <hr />
      {tracks.map((item, index) => (
        <div
          onClick={() => playWithId(item.track.id)}
          key={item.track.id}
          className="grid grid-cols-3 sm:grid-cols-4 gap-2 p-2 items-center text-[#a7a7a7] hover:bg-[#ffffff2b] cursor-pointer"
        >
          <p className="text-white">
            <b className="mr-4 text-[#a7a7a7]">{index + 1}</b>
            {item.track.name}
          </p>
          <p className="text-[15px]">{item.track.album?.name}</p>
          <p className="text-[15px] hidden sm:block">5 days ago</p>
          <p className="text-[15px] text-center">
            {(item.track.duration.totalMilliseconds / 60000).toFixed(2)} min
          </p>
        </div>
      ))}

    </>
  );
};

export default DisplayArtists;
