"use client";
import React, { useState } from "react";
import Center from "./Center";
import Card from "./Card";

export interface ICardLink {
  href: string;
  target: string;
  className: string;
  title: string;
  description: string;
  childImgPath: string | null;
}

const CardLink = ({
  href,
  target,
  className,
  title,
  description,
  childImgPath,
}: ICardLink) => {
  const [clicked, setClicked] = useState(false);

  const handleOnClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setClicked(true);
    setTimeout(() => {
      const newWindow = window.open(href, target, "noopener,noreferrer");
      if (newWindow) newWindow.opener = null;
      setClicked(false);
    }, 500);
  };

  return (
    <Card
      className={`flex justify-center w-3/4 lg:w-1/2
        hover:text-slate-400
        ${
          clicked
            ? "transition duration-500 [transform-style:preserve-3d] [transform:rotateY(360deg)]"
            : ""
        }
        ${className}`}
    >
      <button onClick={(e) => handleOnClick(e)}>
        <Center className="flex flex-col">
          {childImgPath !== null ? (
            <div className="flex flex-0">
              <img src={childImgPath} alt="" className="m-2 mb-4" />
            </div>
          ) : null}
          <h3 className="text-center text-nowrap">{title}</h3>
          <p className="text-center text-sm text-wrap">{description}</p>
        </Center>
      </button>
    </Card>
  );
};

export default CardLink;
