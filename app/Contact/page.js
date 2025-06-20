export default function Home() {
  return (
     <div className="h-screen px-1.5 gap-4 bg-gradient py-0">
        <header className="bg-black text-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <a href="../"><img className="" src="/favicon-32x32.png" alt="The favicon logo for the site the letters MT for my initials"/></a>
            </div>
            <ul className="flex items-center gap-[4vw]">
              <li className="hover:text-blue-200"><a href="../">About</a></li>
              <li className="hover:text-blue-200"><a href="Skills">Skills</a></li>
              <li className="hover:text-blue-200"><a href="Contact">Contact</a></li>
            </ul>
          </nav>
        </header>
       <main class="flex flex-col  my-5 mx-auto bg-gradient-to-t from-gray-500 to-white">
            <h1 class="text-center text-5xl sm:text-6xl md:text-7xl my-15">Contact Me:</h1>
            <div class="bg-gray-200 mx-auto my-15 border-2 border-green-500  px-4 py-2 grid grid-cols-3">
                <a href="mailto:matttsui2001@gmail.com" class="hover:opacity-40 hover:scale-3d"><img src="gmail.svg" alt="Gmail logo" class="w-25 h-25"/></a>
                <a href="https://www.linkedin.com/in/matthewtsui123/" class="hover:opacity-40 hover:scale-3d"><img src="linkedin.svg" alt="Linkedin logo" class="w-25 h-25"/></a>
                <a href="https://github.com/MatthewTsui2001" class="hover:opacity-40 hover:scale-3d"><img src="github.svg" alt="github logo" class="w-25 h-25"/></a>
            </div>
        </main>
    </div>
  );
}
