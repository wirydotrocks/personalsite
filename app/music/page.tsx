// import { BlogPosts } from 'app/components/posts'

import { CurrentlyListening } from 'app/components/CurrentlyListening.tsx';

export default function Page() {
  return (
    <section>

      <h1 className="mb-.8 text-3xl font-bold tracking-tighter">
        Music
      </h1>
      <div className="flex flex-wrap">

        






        <div className="w-full md:w-1/2 p-4">
        Column 1
          <CurrentlyListening 
            userName={'wirydotrocks'}
            apiKey={process.env.NEXT_PUBLIC_LASTFM_API_KEY}
          />
        </div>


        <div className="w-full md:w-1/2 p-4">
        Column 2
        </div>

      </div>

     </section>
  )
}
