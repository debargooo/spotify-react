import React, { useEffect, useRef } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import DisplayHome from '../DisplayHome/DisplayHome';
import DisplayAlbum from '../DisplayAlbum/DisplayAlbum';
import { useGetAlbumMetadataByIdQuery } from '../../redux/services/spotifyApi';
import DisplayArtists from '../DisplayArtists/DisplayArtists';
import DisplaySearch from '../DisplaySearch/DisplaySearch';


const Display = () => {
    const displayRef = useRef();
    const location = useLocation();
    const isAlbum = location.pathname.includes("album");
    const { data: data1, error: error1, isLoading: isLoading1 } = useGetAlbumMetadataByIdQuery();

    useEffect(() => {
        if (data1 && data1.coverArt && data1.coverArt.extractedColors && data1.coverArt.extractedColors.colorRaw) {
            const { hex } = data1.coverArt.extractedColors.colorRaw;
            if (isAlbum) {
                displayRef.current.style.background = `linear-gradient(${hex})`;
            } else {
                displayRef.current.style.background = `${hex}`;
            }
        } else {
           
            displayRef.current.style.background = `#121212`;
        }
    }, [data1, isAlbum]);

    return (
        <div ref={displayRef} className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'>
            <Routes>
                <Route path='/' element={<DisplayHome />} />
                <Route path='/album/:id' element={<DisplayAlbum />} />
                <Route path='/artists/:id' element={<DisplayArtists />} />
                <Route path='/search' element={<DisplaySearch />} />
            </Routes>
        </div>
    );
};

export default Display;
