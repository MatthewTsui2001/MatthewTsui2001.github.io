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
          <h1 className="text-center text-2xl sm:text-3xl md:text-4xl my-4">Hi, I am Matthew Tsui</h1>
            <div className="flex flex-col ">
              <div className="justify-baseline grid grid-cols-2">
                <div className="my-auto mx-auto">
                  <p className="text-sm sm:text-lg md:text-xl max-w-[600px] mx-auto w-full">I enjoy coding, hiking and gaming.</p>
                  <br/>
                  <p className="text-sm sm:text-lg md:text-xl max-w-[600px] mx-auto w-full">I am currently a student at Simon Fraser University studying computer science. I am very passionate about coding. I enjoy being stuck on a problem and then finally being able to solve it.</p>
                  <br/>
                  <p className="text-sm sm:text-lg md:text-xl max-w-[600px] mx-auto w-full">During breaks from school, I enjoy spending time outdoors and going on hikes. I've enjoyed many popular hikes, such as Joffre Lake and Stawamus Chief. I plan to do many more hikes in the future.</p>
                  <br/>
                  <p className="text-sm sm:text-lg md:text-xl max-w-[600px] mx-auto w-full">In my free time, I like to relax by playing games with my friends. We enjoy playing games like Back 4 Blood and Sons of the Forest.</p>
                </div>
                <img className="w-sm justify-end mx-auto my-auto" src="Me_In_Snow.jpg" alt="A picture of me standing in whistler surrounded by snow."/>
              </div>
            </div>
        </main>
    </div>
  );
}
