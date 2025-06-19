export default function Home() {
  return (
     <div className="h-screen px-1.5 gap-4 bg-gradient py-0">
        <header className="bg-black text-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img className="" src="/favicon-32x32.png" alt="The favicon logo for the site the letters MT for my initials"/>
            </div>
            <ul className="flex items-center gap-[4vw]">
              <li className="hover:text-blue-200"><a href="index.html">About</a></li>
              <li className="hover:text-blue-200"><a href="skills">Skills</a></li>
              <li className="hover:text-blue-200"><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
    </div>
  );
}
