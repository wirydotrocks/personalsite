'use client';
import React, { useState, useEffect } from 'react';

/*
 * Copied over from CurrentlyListening and then 
 * Edited so that it grabs TopArtists
 *
 * Also used a .map() to loop over every item and make a new <li>
 */

export const TopArtists = ({ userName, apiKey }: {userName: string; apiKey: string }) => {
  const[lfmData, updateLfmData] = useState<any>({});
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getTopArtists&user=${userName}&api_key=${apiKey}&limit=10&period=overall&format=json`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error('error');
      })
      .then(data => updateLfmData(data))
      .catch(() =>
        updateLfmData({ error: 'Whoops! Something went wrong with Last.fm' })
      );
  }, []);
  
  const buildLastFmData = () => {
    const  { error } = lfmData;
    const artists = lfmData?.topartists?.artist;
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!artists) {
      return <p>Loading</p>;
    }

    return( 

        <ol
          className="list-decimal font-bold whitespace-nowrap pb-8"
        >
          {artists.map((artist:any, i: number) => (
            <li key={artist.name}>
              <a 
              href={artist.url} 
              target="_blank"
              className="cursor-pointer hover:underline"
              >

                {artist.name}

              </a>
            </li>
          ))}


        </ol>

    );
  
  };

  return buildLastFmData();

};

