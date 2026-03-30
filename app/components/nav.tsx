'use client'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const navItems = {
  '/': {
    name: '[/]',
  },
  '/music': {
    name: '[/music]',
  },
  '/blog': {
    name: '[/blog]',
  },
  '/gallery': {
    name: '[/gallery]',
  },
  '/resume': {
    name: '[/resume]',
  },
  'https://vercel.com/templates/next.js/portfolio-starter-kit': {
    name: '[/placeholder(s)]',
  },
}

export function Navbar() {

  const { theme, setTheme } = useTheme()
  console.log(theme)

  return (
    <aside className="-ml-[8px] mb-10 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative items-center justify-between"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10 overflow-x-auto">
            {Object.entries(navItems).map(([path, { name }]) => {
              return (
                <Link
                  key={path}
                  href={path}
                  className="transition-all flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
              )
            })}
          </div>

            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="py-1 px-2 transition-all"
            >
            [*]
            </button>



        </nav>
        
          <hr/>


      </div>
    </aside>
  )
}
