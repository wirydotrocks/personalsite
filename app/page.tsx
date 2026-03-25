// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>

      <h1 className="mb-.8 text-2xl font-semibold tracking-tighter">
        Darren Viloria 
      </h1>

     <h3 className="mb-6 text-lg text-neutral-400">
        CS Major @ CCNY
      </h3>



      
      <div className="mb-16 flex flex-col gap-1">
        <p>I am currently a Computer Science student that loves learning about Frontend.</p>
        <p>I love visually appealing designs that gets in your face and grabs a users attention in a flashy manner.</p>
        <p>In my free time, I typically indulge in music and playing Guitar, and also practice art during the quiet hours of the night.</p>
        <p>I often post and talk about my journey and experience about my various hobbies.</p>
      </div>


      <div className="mb-4 flex flex-col gap-1">
        <h2 className="mb-2 text-2xl font-medium">
          Current Focus
        </h2>
        <ul>
          <li>Master Frontend Fundamentals</li>
          <li>Anatomy & Figure Drawing</li>
          <li>Refining Lead Guitar Techniques</li>
        </ul>
      </div>




      {/*
          Hid the blog posts as I didn't really care to put them on the home page for now.

      <div className="my-8">
        <BlogPosts />
      </div>
      */}

    </section>
  )
}
