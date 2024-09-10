import { Suspense } from 'react'
import AlbumsDiv from '../components/AlbumsDiv'

const projectsPage = async () => {
  
   return (
    <main className="flex flex-col justify-content-start h-screen p-2">
      <div className="grid place-items-center dark:text-gray-300">
        
        <div className="mb-12">
          <b className="text-3xl dark:text-gray-100">PROJECTS</b>
        </div>    

        <div className="flex flex-col static w-4/5 p-5 rounded-2xl shadow-xl">
          <div className="flex flex-col items-center gap-4">
            <b className="text-xl">Recordings</b>
            <p className="italic text-sm">I have recorded a lot of music in my life. Here is what is currently available.</p>
          </div>   
        
          <Suspense fallback={<p>Loading...</p>} > 
            <AlbumsDiv />
          </Suspense> 
          
        </div>

      </div>
    </main>
   );
}

export default projectsPage

