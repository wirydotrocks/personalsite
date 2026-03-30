// import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>

      <h1 className="mb-.8 text-3xl font-bold tracking-tighter">
        Darren Viloria 
      </h1>

     <h3 className="mb-6 text-xl">
        CS Major @ CCNY
      </h3>
      
      
      <div className="mb-16 flex flex-col gap-1">
        <p>I am currently a Computer Science student that loves learning about Frontend.</p>
        <p>I love visually appealing designs that gets in your face and grabs a users attention in a flashy manner.</p>
        <p>In my free time, I typically indulge in music and playing Guitar, and also practice art during the quiet hours of the night.</p>
        <p>I often post and talk about my journey and experience about my various hobbies.</p>
      </div>


      <div className="mb-14 flex flex-col gap-1">

        <h2 className="mb-2 text-2xl font-bold">
          Current Focus
        </h2>

        <ul className="list-disc m1-8">
          <li>Master Frontend Fundamentals</li>
          <li>Anatomy & Figure Drawing</li>
          <li>Refining Lead Guitar Techniques</li>
        </ul>

      </div>


      <div className="mb-14 flex flex-col gap-1">

        <h2 className="mb-2 text-2xl font-bold">
          The Value of Imperfection
        </h2>

          <p>We as human beings always want to put our best face forward and show everyone the best version of ourselves.</p>
          <p>However, this robotic perfectionism never shows the true face of someone that works very hard to get to where they want to.</p>

          <blockquote className="text-center text-2xl italic font-bold my-12">
          “I want to make the effort to change, even if only gradually.”
          </blockquote>

          <p>This idea of not being perfect helps those before us have an honest roadmap for what lies ahead for them.</p>
          <p>I want to encourage people to accept their imperfections and push them to take leap of faith to start their own journey.</p>

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
