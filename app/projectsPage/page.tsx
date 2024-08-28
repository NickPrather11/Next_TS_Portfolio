import connectToDB from "../lib/dbConnect"
import ProjectCard from '../components/ProjectCard'

interface Project {
    albumName: string;
    albumImg: string;
    artistName: string;
    bandcampURL: string;
}

const getProjectData = async (): Promise<Array<Project>> => {
      const client = await connectToDB();
      const db = client.db(process.env.NEXT_PUBLIC_PROJECTS_DB);
      let data: any = await db.collection(process.env.NEXT_PUBLIC_MUSIC_COLLECTION!).find({}).toArray();
      console.log("data.length = " + data.length);
      return data;
};

const projectsPage = async () => {
  const res: Array<Project> = await getProjectData();
   return (
    <div className="flex flex-col items-center w-10/12">    
      <ul className="flex flex-wrap justify-center my-10 mx-80 sm:my-2 sm:mx-4">          
        {res.map((project: Project) => (
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
   );
}

export default projectsPage

