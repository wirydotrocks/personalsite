'use client';
import React, { useState, useEffect } from 'react';
import Marquee from 'react-fast-marquee';

/*
 * Learned how to handle the LastFM API through this website.
 * Good way to learn how to deal with APIs in general.
 * Would like to add a different function(s) for top artists... etc
 * https://medium.com/@samkitson/fetching-and-displaying-scrobbled-data-with-react-and-the-last-fm-api-28d048386da8
 */

export const CurrentlyListening= ({ userName, apiKey}) => {
  const[lfmData, updateLfmData] = useState<any>({});
  useEffect(() => {
    fetch(`https://ws.audioscrobbler.com/2.0/?method=user.getRecentTracks&user=${userName}&api_key=${apiKey}&limit=1&nowplaying=true&format=json`)
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
    const track = lfmData?.recenttracks?.track;
  
    if (error) {
      return <p>{error}</p>;
    }
  
    if (!track) {
      return <p>Loading</p>;
    }

    const songName = track[0]?.name;
    const artistName = track[0]?.artist?.['#text'];
  
    return( 

    <div  
      className="flex items-center rounded-md border-2 border-l-0 border-r-0 var(--fade-end)"
      style={{background: 'linear-gradient(to right, transparent, var(--fade-end))'
      }}>
      <Marquee>
        <h3
        className="text-2xl text-center italic font-bold whitespace-nowrap pb-4 pt-4"
        >
          <a href={track[0]?.url} target="_blank" rel="noreferrer">

            Now Listening... "{songName}" by {artistName} &nbsp;&nbsp;&nbsp;&nbsp;

          </a>

        </h3>
      </Marquee>
    </div>

    );
  
  };

  return buildLastFmData();

};

