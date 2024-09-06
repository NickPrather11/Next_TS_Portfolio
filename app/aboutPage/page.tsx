import React from 'react'
import Link from 'next/link'
import dbSeed from '../db/seeds/dbLogoSeed'
import TechCard from '../components/TechCard'

interface ILogo {
  name: string,
  url: string,
  imgFile: string
}

/*
interface LogoArray {
  logos: ILogo[]
}


const getLogos = (): Promise<LogoArray> => {
  const arrLogos = dbSeed;

}
*/

const aboutPage = () => {
  const item: Array<ILogo> = dbSeed;
  return (
    <main className="flex flex-col justify-content-start h-screen p-2">
        <div className="grid place-items-center dark:text-gray-300">

          <div className="mb-12">
            <b className="text-3xl dark:text-gray-100">ABOUT</b>
          </div> 

          <div id="bio" className="w-4/5 p-5">
            <p className="text-lg text-start text-wrap">
              Nick Prather is a web developer, multi-instrumentalist musician, recording engineer, writer, and artist.
              With a Bachelor of Science in Music Technology from University of North Carolina at Asheville (2010), with a dual focus on Electronic Music Composition and Jazz. He has worked in virtually every facet of the music industry: performing, composing, recording, teaching, instrument building and repair, equipment sales and consulting, and event management.
              <br></br>
              <br></br>
              After completing a 6-month, in-person Full Stack Web Development Bootcamp in 2019, he has been applying his talents, creativity, and focus to the world of web and software application development. From February 2020 until April 2024, he worked for Field2Base, Inc., an enterprise app development company located in the RTP area of North Carolina. Starting out as a Technical Implementation Engineer in the Professional Services (P.S.) Department, he utilized the Javascript and SQL coding skills he learned in bootcamp and quickly adapted to the demands of a client-facing project management and implementation position, while mastering the proprietary technology offered by Field2Base. By 2022, he was promoted to Senior P.S. Engineer after taking on more internal projects, including the creation of a suite of tutorial videos and interdepartmental process development and documentation, in addition to continued client-focused duties. By May of 2023, he had become P.S. Team Lead, the de facto Department Manager. This new position allowed Nick to grow professionally and personally as a leader who managed people, projects, and processes, sharing his expertise with the next generation of Technical Implementation Engineers.
              <br></br>
              <br></br>
              Having made the difficult decision to leave his career at Field2Base in March 2024 due to health reasons, Nick has spent his time since focusing on personal health and professional growth. This includes continuing to learn and apply new web development technologies (as exemplified by this website), working on art and music projects, and occasionally consulting for a few audio equipment manufacturing startups. 
              <br></br>
              <br></br>
              For more information on Nick&apos;s career and projects, check out the links below.
            </p>
          </div>

          <ul className="flex flex-col text-md w-4/5 mt-4 p-5 pl-10 gap-4 list-disc">
            <li className="mr-2">LinkedIn:
              <Link href="https://www.linkedin.com/in/nick-prather-945109101/"
                    className="ml-2 underline text-blue-500 hover:text-blue-700 visited:text-purple-600"> 
                https://www.linkedin.com/in/nick-prather-945109101/
              </Link>
            </li>

            <li className="mr-2">GitHub: 
              <Link href="https://github.com/NickPrather11/"
                    className="ml-2 underline text-blue-500 hover:text-blue-700 visited:text-purple-600"> 
                https://github.com/NickPrather11/
              </Link>
            </li>

            <li className="mr-2">Site Repo: 
              <Link href="https://github.com/NickPrather11/Next_TS_Portfolio"
                    className="ml-2 underline text-blue-500 hover:text-blue-700 visited:text-purple-600"> 
                https://github.com/NickPrather11/Next_TS_Portfolio
              </Link>
            </li>
          </ul>

          <div id="tech_display" className="flex flex-col items-center">    
            <p className="italic text-sm text-gray-500 mb-8 mt-24">This site was built using the following technologies</p>
            <ul className="flex flex-wrap justify-around items-center gap-16">          
              {item.map((logo: ILogo) => (
                <div key={logo.name}>
                  <TechCard 
                    name={logo.name} 
                    url={logo.url}
                    imgFile={logo.imgFile} 
                  />
                </div>            
              ))}          
            </ul>
          </div>

        </div>        
    </main>    
  )
}

export default aboutPage
