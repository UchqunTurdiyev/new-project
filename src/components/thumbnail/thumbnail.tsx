import React from "react";
import { ThumbnailProps } from "./thumbnail.props";
import Image from "next/image";
import { image_base } from "./../constants";
import ReactStars from "react-stars";
import { useInfoStore } from 'src/store';

export const Thumbnail = ({ movie, isBig = false }: ThumbnailProps) => {
  const { setModal, setCurrentMovie} = useInfoStore()

  const handleCurrentModal = () => {
    setModal(true), setCurrentMovie(movie)
  }

  return (
    <div
    onClick={handleCurrentModal}
      className={`relative ${
        isBig ? "h-[450px] md:h-[550px] min-w-[300px] md:min-w-[400px]" : "h-[330px] md:h-[440px] min-w-[200px] md:min-w-[292px]"
      } cursor-pointer ease-out  transition duration-200 md:hover:scale-110`}
    >
      <Image
        src={`${image_base}${movie.backdrop_path || movie?.poster_path}`}
        alt={movie?.title}
        fill
        className="object-cover rounded-sm lg:rounded"
      />
      <div className="absolute left-0 top-0 z-100 w-full h-full bg-gradient-to-b from-transparent to-[#292828a5]">
        <div className="absolute  bottom-5 left-4 right-2">
          <div className="flex items-center space-x-2">
            <ReactStars
              edit={false}
              count={10}
              color2={"#ffd700"}
              value={movie.vote_average}
            />
            <p>({movie.vote_count})</p>
          </div>
          <h1 className="font-bold text-2xl md:text-4xl lg:text-2xl">
            {movie?.title || movie?.name}
          </h1>
        </div>
      </div>
    </div>
  );
};
