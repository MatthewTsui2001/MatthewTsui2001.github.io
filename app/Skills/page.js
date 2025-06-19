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
        <main class="mx-auto my-4 w-full bg-gradient-to-t from-gray-500 to-white">
          <h1 class="text-center text-5xl sm:text-6xl md:text-7xl my-4">Resume</h1>
          <div class="flex flex-col">
            <iframe src="Target Resume.pdf" class="w-300 h-[600px] m-auto rounded-2xl"></iframe>
          </div>
        </main>
    </div>
  );
}
