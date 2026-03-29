'use client';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

export const TopAlbums = ({ userName, apiKey }: {userName: string; apiKey: string }) => {
  const[lfmData, updateLfmData] = useState<any>({});
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getTopAlbums&user=${userName}&api_key=${apiKey}&limit=9&period=overall&format=json`)
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
    const albums = lfmData?.topalbums?.album;
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!albums) {
      return <p>Loading</p>;
    }

    return( 

           <div className="grid grid-cols-3 gap-1">
              {albums.map((album: any) => (
                <a key={album.name} href={album.url} target="_blank">
                      <img src={album.image[2]['#text']} alt={album.name} />
                </a>
              ))}
           </div>




    );
  
  };

  return buildLastFmData();

};

