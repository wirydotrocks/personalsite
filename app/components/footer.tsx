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

export default function Footer() {
  return (
    <footer className="mb-16">

      <hr className="border-netural-300 dark:border-neutral-700" />

      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300 italic">

        <li>
          <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100" href="mailto:darViloria04@gmail.com">email</a>
        </li>

        <li>
          <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100" href="https://github.com/wirydotrocks">github</a>
        </li>

        <li>
          <a className="transition-all hover:text-neutral-800 dark:hover:text-neutral-100" href="https://linkedin.com/in/darViloria04">linkedin</a>
        </li>

      </ul>

      <p className="mt-8 font-xs text-neutral-600 dark:text-neutral-300 italic">
        @ {new Date().getFullYear()} Darren Viloria 
      </p>

    </footer>
  )
}
