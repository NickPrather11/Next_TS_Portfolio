import AlbumCard from '../components/AlbumCard'

interface IAlbum {
    albumName: string,
    albumImg: string,
    artistName: string,
    bandcampURL: string,
    releaseDate: Date
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
  albums.sort((a,b) => (b.releaseDate > a.releaseDate) ? 1 : ((a.releaseDate > b.releaseDate) ? -1 : 0));
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
        
          <ul className="flex flex-wrap justify-center my-10 mx-80 sm:my-2 sm:mx-4">          
            {albums.map((album: IAlbum) => (
              <li key={album.albumName}>
                <AlbumCard 
                  albumImg={album.albumImg} 
                  bandcampURL={album.bandcampURL} 
                  albumName={album.albumName} 
                  artistName={album.artistName}
                  releaseDate={album.releaseDate} 
                />
              </li>            
            ))}          
          </ul>
        </div>

      </div>
    </main>
   );
}

export default projectsPage

