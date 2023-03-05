import React from "react";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_base } from "./../constants";

export const Thumbnail = ({ movie }: ThumbnailProps) => {
  return (
    <div className="relative h-[330px] min-w-[200px] cursor-pointer ease-out md:h-[440px] md:min-w-[292px] transition duration-200 md:hover:scale-110">
      <Image
        src={`${image_base}${movie.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        fill
        className="object-cover rounded-sm lg:rounded"
      />
    </div>
  );
};
