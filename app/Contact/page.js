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
        <main>
            <h1>Contact Me</h1>
            <a href="mailto:matttsui2001@gmail.com" class="hover:opacity-40 hover:scale-3d"><img src="gmail.svg" alt="Gmail logo" class="w-25 h-25"/></a>
            <a href="https://www.linkedin.com/in/matthewtsui123/"> <img src="linkedin.svg" alt="The Linkedin Logo"></img></a>
        </main>
    </div>
  );
}
