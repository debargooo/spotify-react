import React, { useContext } from 'react';
import './App.css';
import Display from './Components/Display/Display';
import Player from './Components/Player/Player';
import Sidebar from './Components/Sidebar/Sidebar';
import { PlayerContext } from './context/PlayerContext';
import { useGetAlbumByIdQuery, useGetAlbumMetadataByIdQuery, useGetArtistsTracksByIdQuery, useGetSearchByIdQuery, useGetTracksByIdQuery } from './redux/services/spotifyApi';
import { Playlist } from './Components/Playlist/Playlist';

function App() {

  const { audioRef, track } = useContext(PlayerContext);
  const { data, error, isLoading } = useGetAlbumByIdQuery();
  const { data: data1, error: error1, isLoading: isLoading1 } = useGetAlbumMetadataByIdQuery();
  const { data: data2, error: error2, isLoading: isLoading2 } = useGetArtistsTracksByIdQuery();
  const { data: data3, error: error3, isLoading: isLoading3 } = useGetSearchByIdQuery();
  const { data: data4, error: error4, isLoading: isLoading4 } = useGetTracksByIdQuery();

 

  return (
    <>
      <div className='h-screen bg-black'>
        <div className='h-[90%] flex'>
          <Sidebar />
          <Display />
        </div>
        <Player />
        <audio ref={audioRef} src={data4?.tracks.map((track, index)=>(track?.preview_url))} preload='auto'></audio>
      </div>
    </>
  );
}

export default App;
