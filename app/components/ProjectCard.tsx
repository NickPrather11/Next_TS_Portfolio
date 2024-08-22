import React from 'react'

type CardProps = {
  albumName: string, 
  bandcampURL: string, 
  albumImg: string, 
  artistName: string
}

const ProjectCard = ({albumName, bandcampURL, albumImg, artistName}: CardProps) => {
  return (
    <a key={albumName} href={bandcampURL} target="_blank" className="projCardParent flex hover:bg-gray-800 rounded-3xl">
      <li className="flex flex-col px-9 py-7 items-center">
        <img className="albumCover h-36 w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 rounded-lg shadow-xl transition-all duration-300" 
          src={albumImg} alt=""/>
        <div className="m-3">
          <p className="w-32 text-sm font-medium text-gray-200 text-center text-wrap">{artistName}</p>
          <p className="w-32 text-sm text-gray-500 text-center text-wrap">{albumName}</p>
        </div>
      </li>
    </a>
  )
}

export default ProjectCard