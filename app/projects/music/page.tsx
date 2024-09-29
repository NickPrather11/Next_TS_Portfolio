import React from "react";
import AlbumCard from "@/app/components/AlbumCard";

interface IAlbum {
  albumName: string;
  albumImg: string;
  artistName: string;
  bandcampURL: string;
  releaseDate: Date;
}

interface AlbumArray {
  albums: IAlbum[];
}

const getAlbums = async (): Promise<AlbumArray> => {
  const res = await fetch(process.env.PATH_URI + "/api/albums", {
    cache: "no-store",
  });

  if (!res.ok) {
    console.log("Failed to fetch albums");
  }

  return res.json();
};

const projectsPage = async () => {
  const { albums } = await getAlbums();
  albums.sort((a, b) =>
    b.releaseDate > a.releaseDate ? 1 : a.releaseDate > b.releaseDate ? -1 : 0
  );
  return (
    <div className="card rounded-2xl">
      <div className="flex flex-col items-center gap-4">
        <h3>Music</h3>
        <p className="italic text-sm">
          I have recorded a lot of music in my life. Here is what is currently
          available.
        </p>
      </div>

      <ul className="flex flex-wrap justify-center mt-10">
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
  );
};

export default projectsPage;
