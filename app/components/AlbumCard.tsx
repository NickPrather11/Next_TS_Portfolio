import React from 'react'
import moment from 'moment'

type CardProps = {
  albumName: string, 
  bandcampURL: string, 
  albumImg: string, 
  artistName: string,
  releaseDate: Date
}

const AlbumCard = ({albumName, bandcampURL, albumImg, artistName, releaseDate}: CardProps) => {
  const releaseDateString = moment(releaseDate).format('l');
  return (
    <a key={albumName} href={bandcampURL} target="_blank" className="projCardParent flex justify-center h-80 w-64 mx-9 my-7 py-5 rounded-lg shadow-2xl dark:bg-gray-700 hover:bg-gray-800">
      <div className="albumCover absolute flex flex-col justify-start items-center h-auto w-36 lg:h-auto lg:w-40 xl:h-auto xl:w-44 transition-all duration-300">
        <img className="rounded-lg " 
          src={albumImg} alt=""/>
        <div className="flex flex-col items-center h-full">
          <div className="pt-3 text-center text-sm font-medium text-wrap">{albumName}</div>
          <div className="pt-1 text-center text-sm text-gray-400 text-wrap">by {artistName}</div>
          <div className="pt-1 text-center text-xs text-gray-400 text-wrap">(released {releaseDateString})</div>
        </div>
      </div>
    </a>
  )
}

export default AlbumCard