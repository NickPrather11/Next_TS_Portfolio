import React from 'react'
import ProjectCard from '../components/ProjectCard'

// Eventually replace this with MongoDB? Or use a scraper for my bandcamp page?
const projects = [
  {
    artistName: "Liminal Deities",
    albumName: "Subliminal Entity",
    albumImg: "https://f4.bcbits.com/img/a1856505258_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/subliminal-entity"
  },
  {
    artistName: "Liminal Deities",
    albumName: "Active Observation of Evolving Abstractions in Hypnagogia",
    albumImg: "https://f4.bcbits.com/img/a0803500458_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/active-observation-of-evolving-abstractions-in-hypnagogia"
  },
  {
    artistName: "Liminal Deities",
    albumName: "Inconsistent Corporeality",
    albumImg: "https://f4.bcbits.com/img/a3550746553_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/inconsistent-corporeality"
  },
  {
    artistName: "Hello Hugo",
    albumName: "If Section Secrets",
    albumImg: "https://f4.bcbits.com/img/a1128671548_10.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/if-section-secrets"
  },
  {
    artistName: "Hello Hugo",
    albumName: "Motorcycle Milkman",
    albumImg: "https://f4.bcbits.com/img/a1434800952_16.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/motorcycle-milkman"
  },
  {
    artistName: "Hello Hugo",
    albumName: "Lexington Avington Bravington",
    albumImg: "https://f4.bcbits.com/img/a0920882050_16.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/lexington-avington-bravington"
  },
  {
    artistName: "Hello Hugo",
    albumName: "Hello Hugo",
    albumImg: "https://f4.bcbits.com/img/a2669616087_16.jpg",
    bandcampURL: "https://hellohugo.bandcamp.com/album/hello-hugo"
  },
  {
    artistName: "GGsIE",
    albumName: "Geometric Turquoise Bird",
    albumImg: "https://f4.bcbits.com/img/a1294210841_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/geometric-turquoise-bird"
  },
  {
    artistName: "Fractured Days",
    albumName: "Fractured Days",
    albumImg: "https://f4.bcbits.com/img/a4113435769_10.jpg",
    bandcampURL: "https://nickprather.bandcamp.com/album/fractured-days"
  },
  {
    artistName: "The River Otters",
    albumName: "The River Otters",
    albumImg: "https://f4.bcbits.com/img/a4286072539_16.jpg",
    bandcampURL: "https://theriverotters.bandcamp.com/album/the-river-otters"
  }
]

const projectsPage = () => {
  return (
    <main className="flex flex-col p-8 w-full h-screen lg:p-12">
      <div className="flex flex-col items-center w-10/12">    
        <ul className="flex flex-wrap justify-center my-10 mx-80 sm:my-2 sm:mx-4">
          {projects.map((project) => (
            <div key={project.albumName}>
              <ProjectCard 
                albumImg={project.albumImg} 
                bandcampURL={project.bandcampURL} 
                albumName={project.albumName} 
                artistName={project.artistName} 
              />
            </div>            
          ))}
        </ul>
      </div>  
    </main>
  )
}

export default projectsPage