/*
function ArrowIcon() {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  )
}
*/

'use client'
import { useState } from 'react'


export default function Footer() {


  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText('darViloria04@gmail.com')
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }


  
  return (
    <footer className="mb-16">

      <hr/>

      <div className="mt-4 flex flex-col md:flex-row md:justify-between md:items-center gap-2">

        <ul className="ml-0 text-sm flex flex-row space-x-4 italic">

         <li>
           <a className="transition-all cursor-pointer" onClick={handleCopy}>
            {copied ? 'copied!' : 'email'}
           </a>
         </li>

         <li>
           <a className="transition-all" href="https://github.com/wirydotrocks" target="_blank">github</a>
         </li>

         <li>
           <a className="transition-all" href="https://linkedin.com/in/darViloria04" target="_blank">linkedin</a>
         </li>

         </ul>


        <p className="font-xs italic">
          @ {new Date().getFullYear()} Darren Viloria 
        </p>

      </div>

    </footer>
  )
}
