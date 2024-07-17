import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const spotifyApiHeaders = {
  'x-rapidapi-key': 'e7926fad4cmsh5a807f85936203ap172de1jsnf7314eaa913a',
  'x-rapidapi-host': 'spotify23.p.rapidapi.com',
};

const baseUrl = 'https://spotify23.p.rapidapi.com';

const createRequest = (url) => ({ url, headers: spotifyApiHeaders });

export const spotifyApi = createApi({
  reducerPath: 'spotifyApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getAlbumById: builder.query({
      query: () => createRequest('/albums/?ids=3IBcauSj5M2A6lTeffJzdv,0Rkv5iqjF2uenfL0OVB8hg,3RZxrS2dDZlbsYtMRM89v8,3BGU0BqGwBkYDHpfCWFm7I,0a183xiCHiC1GQd8ou7WXO,5AivaZj0CiQJoDWqVH2pbh'),
    }),
    getAlbumMetadataById: builder.query({
      query: () => createRequest('/album_metadata/?id=3IBcauSj5M2A6lTeffJzdv'),
    }),
    getArtistsById: builder.query({
      query: () => createRequest('/artists/?ids=4YRxDV8wJFPHPTeXepOstw,2GoeZ0qOTt6kjsWW4eA6LS,1mYsTxnqsietFxj1OgoGbG,2w9zwq3AktTeYYMuhMjju8,2oSONSC9zQ4UonDKnLqksx,4zCH9qm4R2DADamUHMCa6O'),
    }),
    getArtistsTracksById: builder.query({
      query: () => createRequest('/artist_overview/?id=4YRxDV8wJFPHPTeXepOstw'),
    }),
    getTracksById: builder.query({
      query: () => createRequest('/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv,6dOtVTDdiauQNBQEDOtlAB,5N3hjp1WNayUPZrA8kJmJP,629DixmZGHc7ILtEntuiWE,3qhlB30KknSejmIvZZLjOD,46kspZSY3aKmwQe7O77fCC'),
    }),
    getSearchById: builder.query({
      query: () => createRequest('/search/?q=daku&type=albums&offset=0&limit=10&numberOfTopResults=5'),
    }),
  }),
});

export const {
  useGetAlbumByIdQuery,
  useGetAlbumMetadataByIdQuery,
  useGetArtistsByIdQuery,
  useGetArtistsTracksByIdQuery,
  useGetTracksByIdQuery,
  useGetSearchByIdQuery,
} = spotifyApi;
