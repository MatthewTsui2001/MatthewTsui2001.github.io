"use client"
export default function Home() {
  return (
    <div className="h-screen px-1.5 py-4 gap-4 bg-gradient">
        <header className="bg-white">
          <nav className="flex justify-between items-center w-[92%] mx-auto">
            <div>
              <img className="" src="favicon-32x32.png" alt="The favicon logo for the site the letters MT for my initials"/>
            </div>
            <ul className="flex items-center gap-[4vw]">
              <li className="hover:text-blue-200"><a href="index.html">About</a></li>
              <li className="hover:text-blue-200"><a href="skills.html">Skills</a></li>
              <li className="hover:text-blue-200"><a href="contact.html">Contact</a></li>
            </ul>
          </nav>
        </header>
          <div className="justify-between bg-gray-200 py-2 w-[92%] mx-auto">
            <h1 className="text-center">Hi, I am Matthew Tsui</h1>
            <div className="flex flex-wrap">
              <div className="justify-baseline">
                <p className="flex flex-wrap">I am currently a student at Simon Fraser University studying computer science. I enjoy hiking and gaming.  </p>
              </div>
              <img className="w-sm justify-end" src="British_Shorthair.jpg" alt="A gray British_Shorthair"/>
            </div>
            
          </div>
    </div>
  );
}
