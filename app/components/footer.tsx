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

export default function Footer() {
  return (
    <footer className="mb-16">

      <hr className="border-neutral-300 dark:border-neutral-700" />

      <div className="mt-4 flex flex-row justify-between items-center">

        <ul className="ml-0 text-sm flex flex-row space-x-4 italic">

         <li>
           <a className="transition-all" href="mailto:darViloria04@gmail.com">email</a>
         </li>

         <li>
           <a className="transition-all" href="https://github.com/wirydotrocks">github</a>
         </li>

         <li>
           <a className="transition-all" href="https://linkedin.com/in/darViloria04">linkedin</a>
         </li>

         </ul>


        <p className="font-xs italic">
          @ {new Date().getFullYear()} Darren Viloria 
        </p>

      </div>

    </footer>
  )
}
