// import { BlogPosts } from 'app/components/posts'

import { CurrentlyListening } from 'app/components/CurrentlyListening';

export default function Page() {
  return (
    <section>

        <div> 
        
          <CurrentlyListening 
            userName={'wirydotrocks'}
            apiKey={process.env.NEXT_PUBLIC_LASTFM_API_KEY}
          />

        </div>
        


      <h1 className="mb-.8 text-3xl font-bold tracking-tighter">
        Music
      </h1>



      <div className="flex flex-wrap pt-8">

        <div className="text-2xl w-full md:w-1/2">
        Column 1
       </div>


        <div className=" text-2xl w-full md:w-1/2">
        Column 2
        </div>

      </div>

     </section>
  )
}
