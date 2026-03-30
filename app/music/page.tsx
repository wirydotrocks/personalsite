// import { BlogPosts } from 'app/components/posts'

import { CurrentlyListening } from 'app/components/CurrentlyListening';
import { TopArtists } from 'app/components/TopArtists';
import { TopAlbums } from 'app/components/TopAlbums';




export default function Page() {
  return (
    <section>

        <div> 
        
          <CurrentlyListening 
            userName={'wirydotrocks'}
            apiKey={process.env.NEXT_PUBLIC_LASTFM_API_KEY}
          />

        </div>
        


      <div className="flex flex-wrap pt-8">

        <div className="text-2xl w-full md:w-1/2">

          <h1 className="underline pb-4 font-bold">
            Top Artists
          </h1>
 
       <TopArtists
          userName={'wirydotrocks'}
          apiKey={process.env.NEXT_PUBLIC_LASTFM_API_KEY ?? ''}
       />

          <h1 className="underline pb-4 font-bold">
            Music Gear 
          </h1>

          <ul className="list-disc pb-4">
            <li>Yamaha Pacifica 611VFM</li>
            <li>Fender Mustang LT25</li>
            <li>Focusrite Scarlet Solo</li>
          </ul>
 

      </div>

       <div className="text-2xl w-full md:w-1/2 pb-4">
          <h1 className="underline pb-4 font-bold">
            Top Albums
          </h1>
 

       <TopAlbums
          userName={'wirydotrocks'}
          apiKey={process.env.NEXT_PUBLIC_LASTFM_API_KEY ?? ''}
       />



        </div>

        <div>

          <h1 className="text-2xl font-bold pt-16 underline"> 
          Powered by LastFM 
          </h1>

          <p>These are my Top 10 Artists, and my 3x3 grid on my favorite albums.</p>
          <p>This is updated through the LastFM API, and adjusts accordingly!</p>
          <p>
           Feel free to click around or maybe even 
           <a href="https://last.fm/user/wirydotrocks" target="_blank" className="font-bold"> follow me on LastFM!</a>
          </p>

        </div>


      </div>

     </section>
  )
}
