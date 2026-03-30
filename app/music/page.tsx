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

          <ul className="list-disc">
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

      </div>

     </section>
  )
}
