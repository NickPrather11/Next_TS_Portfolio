import ProjectCard from '../components/ProjectCard'

interface IAlbum {
    albumName: string;
    albumImg: string;
    artistName: string;
    bandcampURL: string;
}

interface AlbumArray {
  albums: IAlbum[]
}

const getAlbums = async (): Promise<AlbumArray> => {
    const res = await fetch(process.env.PATH_URI + "/api/albums", {
      cache: "no-store",
    });

    if (!res.ok) {
      console.log("Failed to fetch albums");
    }

    return res.json();
}

const projectsPage = async () => {
  const { albums } = await getAlbums();
   return (
    <div className="flex flex-col items-center w-10/12">    
      <ul className="flex flex-wrap justify-center my-10 mx-80 sm:my-2 sm:mx-4">          
        {albums.map((project: IAlbum) => (
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

