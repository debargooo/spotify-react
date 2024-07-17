import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Searches from '../Searches/Searches';

const DisplaySearch = () => {
  const [tracks, setTracks] = useState(null);
  const [albums, setAlbums] = useState(null);
  const [artists, setArtists] = useState(null);
  const [playlists, setPlaylists] = useState(null); 
  const [searchQuery, setSearchQuery] = useState('');

  const getTracks = async (query) => {
    const data = await fetch(`https://v1.nocodeapi.com/debargooo/spotify/bwowCdyByfliYpIm/search?q=${query}&type=track`);
    const convertedData = await data.json();
    setTracks(convertedData.tracks.items);
  };

  const getAlbums = async (query) => {
    const data = await fetch(`https://v1.nocodeapi.com/debargooo/spotify/bwowCdyByfliYpIm/search?q=${query}&type=album`);
    const convertedData = await data.json();
    setAlbums(convertedData.albums.items);
  };

  const getArtists = async (query) => {
    const data = await fetch(`https://v1.nocodeapi.com/debargooo/spotify/bwowCdyByfliYpIm/search?q=${query}&type=artist`);
    const convertedData = await data.json();
    setArtists(convertedData.artists.items);
  };

  const getPlaylists = async (query) => {
    const data = await fetch(`https://v1.nocodeapi.com/debargooo/spotify/bwowCdyByfliYpIm/search?q=${query}&type=playlist`);
    const convertedData = await data.json();
    setPlaylists(convertedData.playlists.items);
  };

  useEffect(() => {
    if (searchQuery) {
      getTracks(searchQuery);
      getAlbums(searchQuery);
      getArtists(searchQuery);
      getPlaylists(searchQuery);
    }
  }, [searchQuery]);

  return (
    <div>
      <Navbar setSearchQuery={setSearchQuery} />
      <div className='mb-4'>
        {tracks && (
          <>
            <h1 className='my-5 font-bold text-2xl'>Popular Tracks</h1>
            <div className='flex overflow-auto'>
              {tracks.map((element) => (
                <Searches
                  key={element.id}
                  name={element.name}
                  desc={element.description}
                  image={element.album.images[0].url}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className='mb-4'>
        {artists && (
          <>
            <h1 className='my-5 font-bold text-2xl'>Popular Artists</h1>
            <div className='flex overflow-auto'>
              {artists.map((element) => (
                <Searches
                  key={element.id}
                  name={element.name}
                  desc={element.description}
                  image={element.images[0].url}
                 
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className='mb-4'>
        {playlists && (
          <>
            <h1 className='my-5 font-bold text-2xl'>Popular Playlists</h1>
            <div className='flex overflow-auto'>
              {playlists.map((element) => (
                <Searches
                  key={element.id}
                  name={element.name}
                  desc={element.description}
                  image={element.images[0].url}
                />
              ))}
            </div>
          </>
        )}
      </div>
      <div className='mb-4'>
        {albums && (
          <>
            <h1 className='my-5 font-bold text-2xl'>Popular Albums</h1>
            <div className='flex overflow-auto'>
              {albums.map((element) => (
                <Searches
                  key={element.id}
                  name={element.name}
                  desc={element.description}
                  image={element.images[0].url}
                />
              ))}
            </div>
          </>
        )}
      </div>
    
    </div>
  );
};

export default DisplaySearch;
