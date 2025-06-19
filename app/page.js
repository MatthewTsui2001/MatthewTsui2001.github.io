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
          <h1>Hi, I am Matthew Tsui</h1>
          <p >I enjoy coding, hiking and gaming.</p>
          <br/>
          <p>I am currently a student at Simon Fraser University studying computer science. I am very passionate about coding. I enjoy being stuck on a problem and then finally being able to solve it.</p>
          <br/>
          <p>During breaks from school, I enjoy spending time outdoors and going on hikes. I've enjoyed many popular hikes, such as Joffre Lake and Stawamus Chief. I plan to do many more hikes in the future.</p>
          <br/>
          <p>In my free time, I like to relax by playing games with my friends. We enjoy playing games like Back 4 Blood and Sons of the Forest.</p>
        </main>
    </div>
  );
}
