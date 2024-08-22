'use client';
import Link from 'next/link'
import React, { createContext, useState } from 'react'
import { BsChevronDoubleRight, BsChevronDoubleLeft, BsFillHouseFill, BsInfoCircle, BsCassette, BsEnvelope, BsPersonCircle } from "react-icons/bs";

type ExpandedContextType = "expanded" | "contracted";

const SidebarContext = createContext<ExpandedContextType>("expanded");

const Navbar = () => {
  const [expanded, setExpanded] = useState<ExpandedContextType>("expanded");
  const [activeLink, setActiveLink] = useState(0);
  return (
    <header className="-ml-4 -mt-4 h-screen bg-gray-100 dark:bg-gray-800">
      <SidebarContext.Provider value={{expanded}}> 
        <div className={`flex flex-col h-screen duration-300 ${expanded ? "w-40" : "w-16"}`}>
        
          <div className="flex justify-end">          
            <button onClick={() => setExpanded(curr => !curr)} className="mb-8">               
              {expanded ? <BsChevronDoubleLeft className="text-4xl p-2"/> : <BsChevronDoubleRight className="text-4xl p-2"/>}
            </button>
          </div>
               
          <div>
            <ul className="flex flex-col ml-2 gap-y-2">
              <li>
                <Link onClick={() => setActiveLink(1)} 
                      className={`flex flex-row justify-center items-center p-4 text-gray-500 dark:text-white hover:text-gray-500/75 
                        ${activeLink === 1 ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-800"}`
                      }
                      href="../"
                >
                  <BsFillHouseFill className="text-3xl overflow-visible"/> 
                  <h2 className={`duration-100 ${expanded ? "text-xl mx-4" : "invisible overflow-hidden"}`}>Home</h2>
                </Link>
              </li>
              <li>
                <Link onClick={() => setActiveLink(2)}
                      className={`flex flex-row justify-center items-center p-4 text-gray-500 dark:text-white hover:text-gray-500/75 
                        ${activeLink === 2 ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-800"}`
                      }
                      href="../projectsPage"
                >
                  <BsCassette className="text-3xl overflow-visible" /> 
                  <h2 className={`duration-100 ${expanded ? "text-xl mx-4" : "invisible overflow-hidden"}`}>Projects</h2>
                </Link>
              </li>
              <li>
                <Link onClick={() => setActiveLink(3)}
                      className={`flex flex-row justify-center items-center p-4 text-gray-500 dark:text-white hover:text-gray-500/75 
                        ${activeLink === 3 ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-800"}`
                      } 
                      href="../aboutPage"
                > 
                  <BsInfoCircle className="text-3xl overflow-visible" /> 
                  <h2 className={`duration-100 ${expanded ? "text-xl mx-4" : "invisible overflow-hidden"}`}>About</h2>
                </Link>
              </li>
              <li>
                <Link onClick={() => setActiveLink(4)}
                      className={`flex flex-row justify-center items-center p-4 text-gray-500 dark:text-white hover:text-gray-500/75 
                        ${activeLink === 4 ? "bg-gray-200 dark:bg-gray-700" : "bg-gray-200 dark:bg-gray-800"}`
                      } 
                      href="../contactPage"
                >
                  <BsEnvelope className="text-3xl overflow-visible" /> 
                  <h2 className={`duration-100 ${expanded ? "text-xl mx-4" : "invisible overflow-hidden"}`}>Contact</h2> 
                </Link>
              </li>          
            </ul>          
          </div>  

          <div className="flex flex-col flex-1 justify-between">
            <div></div>
            <div>
              <Link onClick={() => setActiveLink(5)}
                    className="flex flex-row justify-center items-center p-4 text-gray-400 hover:text-gray-500/75" href="../loginPage"
              >
                <BsPersonCircle className="text-xl overflow-visible" />
                <h2 className={`duration-100 ${expanded ? "text-md mx-4" : "invisible overflow-hidden"}`}>Login</h2> 
              </Link>
            </div>            
          </div>

        </div>
      </SidebarContext.Provider>
    </header>
  )
}

export default Navbar