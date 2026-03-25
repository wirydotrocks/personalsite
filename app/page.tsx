import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>

      <h1 className="mb-.8 text-2xl font-semibold tracking-tighter">
        Darren Viloria 
      </h1>

     <h3 className="mb-6 text-lg text-neutral-400">
        CS Major @ CCNY
      </h3>



      
      <div className="mb-4 flex flex-col gap-2">
        <p>I am currently a Computer Science student that loves learning about Frontend.</p>
        <p>I love visually appealing designs that gets in your face and grabs a users attention in a flashy manner.</p>
        <p>In my free time, I typically indulge in music and playing Guitar, and also practice art during the quiet hours of the night.</p>
        <p>I often post and talk about my journey and experience about my various hobbies.</p>
      </div>





      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
