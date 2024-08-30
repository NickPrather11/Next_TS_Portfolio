import React from 'react'
import Link from 'next/link'

const aboutPage = () => {
  return (
    <main className="flex flex-col p-8 w-full h-screen lg:p-12">
        <div className="grid">

          <div id="bio" className="p-5 w-5/12">
            <p className="text-sm font-medium text-gray-200 text-wrap">Web Application Developer adept at designing, building, and maintaining applications from conception to production. Effectively utilizing strong communication, problem-solving, creativity, and analytical skills. Taking a progressive and adaptable approach to develop solutions and exceed expectations while following Agile methodologies. Seeking experience as a full time Application Engineer.</p>
          </div>

          <div id="link_to_repo" className="flex flex-row">
            <p>Check out the GitHub repo for this site: </p>
            <Link href="https://next-ts-portfolio-seven.vercel.app/">https://next-ts-portfolio-seven.vercel.app/</Link>
          </div>

          <div id="tech_display"></div>

        </div>        
    </main>    
  )
}

export default aboutPage