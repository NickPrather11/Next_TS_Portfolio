import React from 'react'

type TechProps = {
    _id: number,
    techName: string, 
    techLogo: string
  }

const TechCard = ({_id, techName, techLogo}: TechProps) => {
  return (
    <div key={_id} className="projCardParent flex hover:bg-gray-800 rounded-3xl">
      <li className="flex flex-col px-9 py-7 items-center">
        <img className="h-36 w-36 lg:h-40 lg:w-40 xl:h-44 xl:w-44 rounded-lg shadow-xl transition-all duration-300" 
          src={techLogo} alt=""/>
        <div className="m-3">
          <p className="w-32 text-sm font-medium text-gray-200 text-center text-wrap">{techName}</p>
        </div>
      </li>
    </div>
  )
}

export default TechCard