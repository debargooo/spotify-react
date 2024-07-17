import React from 'react'
import Navbar from '../Navbar/Navbar'
import Album from '../Album/Album'
import { songsData } from '../../assets/assets'
import Song from '../Song/Song'
import { useGetAlbumByIdQuery } from '../../redux/services/spotifyApi';
import { useGetArtistsByIdQuery } from '../../redux/services/spotifyApi';
import Artists from '../Artists/Artists'
import { useGetTracksByIdQuery } from '../../redux/services/spotifyApi'
import { ClipLoader } from "react-spinners";


const DisplayHome = () => {
  const { data: albumsData, error: albumsError, isLoading: albumsLoading } = useGetAlbumByIdQuery();
  const {data:artistsData, error: artistsError, isLoading:artistsLoading} = useGetArtistsByIdQuery();
  const { data:trackData, error:trackError, isLoading:tracksLoading } = useGetTracksByIdQuery();


  if (albumsLoading && artistsLoading && tracksLoading ) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#1DB954" size={150} />
      </div>
    );
  }
  if (albumsError) return <p>Error fetching albums data: {albumsError.message}</p>;
  return (
    <>
    <Navbar/>
    <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Popular Artists</h1>
    <div className='flex overflow-auto'>
    {artistsData?.artists.map((artists)=>(<Artists key={artists.id} name={artists.name} id={artists.id} image={artists.images[2]?.url} types={artists.type}/>))}
    </div>
    </div>
    <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Popular Albums</h1>
    <div className='flex overflow-auto'>
    {albumsData?.albums.map((album)=>(<Album key={album.id} name={album.name} desc={album.description} id={album.id} image={album.images[1]?.url}/>))}
    </div>
    </div>
    <div className='mb-4'>
    <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
    <div className='flex overflow-auto'>
    {trackData?.tracks.map((tracks)=>(<Song key={tracks.id} name={tracks.name} desc={tracks.description} id={tracks.id}  image={tracks.album?.images[1]?.url}/>))}
    </div>
    </div>
    </>
  )
}

export default DisplayHome