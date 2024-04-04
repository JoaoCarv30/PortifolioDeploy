export function NavMob() {
  return (
    <nav className="bg-personal-color-dark-blue-black text-white font-extrabold text-xl z-10">
      <ul className="container flex flex-col items-center justify-evenly  h-screen">
        <a className="w-screen h-full flex items-center justify-center hover:bg-gray-900 hover:text-personal-color-rose text-center" href="#About">
          <li>About</li>
        </a>
        <a className="w-screen h-full flex items-center justify-center hover:bg-gray-900 hover:text-personal-color-rose text-center" href="#skills">
          <li>Skills</li>
        </a>
        <a className="w-screen h-full flex items-center justify-center hover:bg-gray-900 hover:text-personal-color-rose text-center" href="#Projects">
          <li>Projects</li>
        </a>
        <a className="w-screen h-full flex items-center justify-center hover:bg-gray-900 hover:text-personal-color-rose text-center" href="#Contact">
          <li>Contact</li>
        </a>
      </ul>
    </nav>
  );
}
