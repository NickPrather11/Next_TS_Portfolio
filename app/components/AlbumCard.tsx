import React from "react";
import moment from "moment";
import Link from "next/link";
import Center from "./Center";

type CardProps = {
  albumName: string;
  bandcampURL: string;
  albumImg: string;
  artistName: string;
  releaseDate: Date;
};

const AlbumCard = ({
  albumName,
  bandcampURL,
  albumImg,
  artistName,
  releaseDate,
}: CardProps) => {
  const releaseDateString = moment(releaseDate).format("l");
  return (
    <Link
      key={albumName}
      href={bandcampURL}
      target="_blank"
      rel="noopener noreferrer"
      className="projCardParent flex justify-center h-[19rem] w-64 hover:bg-gray-800"
    >
      <Center className="albumCover absolute flex-col w-36 transition-all duration-300">
        <img className="albumCover rounded-lg" src={albumImg} alt="" />
        <Center className="flex-col">
          <div className="pt-3 text-center text-sm text-wrap">{albumName}</div>
          <div className="pt-1 text-center text-sm text-gray-400 text-wrap">
            by {artistName}
          </div>
          <div className="pt-1 text-center text-xs text-gray-400 text-wrap">
            (released {releaseDateString})
          </div>
        </Center>
      </Center>
    </Link>
  );
};

export default AlbumCard;
