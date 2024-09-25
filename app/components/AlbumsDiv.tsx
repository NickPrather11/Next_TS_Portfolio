import React from "react";
import AlbumCard from "./AlbumCard";

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

const AlbumsDiv = async () => {
  const { albums } = await getAlbums();
  albums.sort((a, b) =>
    b.releaseDate > a.releaseDate ? 1 : a.releaseDate > b.releaseDate ? -1 : 0
  );
  return (
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
  );
};

export default AlbumsDiv;
