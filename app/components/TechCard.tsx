import React from 'react'

type TechProps = {
    name: string, 
    url: string,
    imgFile: string
  }

const TechCard = ({name, url, imgFile}: TechProps) => {
  return (
    <div key={name} className="projCardParent flex rounded-lg bg-slate-200">
      <li className="grid col-end-1">
        <img className="w-32 h-auto p-4" 
          src={imgFile} alt={url}/>
      </li>
    </div>
  )
}

export default TechCard