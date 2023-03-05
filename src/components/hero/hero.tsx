import React, { useEffect, useState } from "react";
import { HerpProps } from "./hero.props";
import { IMove } from "./../../interfaces/app.interfaces";
import Image from "next/image";
import { image_base } from "./../constants";
import {BsPlay} from "react-icons/bs"
import ReactStars from "react-stars";

export const Hero = ({ trending }: HerpProps): JSX.Element => {
  const [movie, setMovie] = useState<IMove>({} as IMove);

  // Home rasmida kinolarni aylanib turishi uchun
  useEffect(() => {
    const randomMovie = trending[Math.floor(Math.random() * trending.length)];
    setMovie(randomMovie);
  }, [trending]);

  console.log(movie);
  

  return (
    <div className="flex flex-col space-y-2 pt-36 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-center">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[100px] rounded-bl-xl text-lg rounded-tr-xl text-center px-1 py-[2px] bg-white/60 text-white">{movie.media_type}</div>
        <div className="flex items-center space-x-2">
            <ReactStars edit={false} count={10} value={movie.vote_average} />
            <p>({movie.vote_count})</p>
        </div>
      <h1 className="font-bold text-2xl md:text-4xl lg:text-7xl">{movie?.title || movie?.name}</h1>
      <p className="max-w-xs mg:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl lg:leading-10">{movie.overview?.slice(0, 150)}...</p>
      <div className="">
      <button className="flex items-center justify-center bg-white/60 text-black font-bold rounded-full w-52 h-14 "><BsPlay className="w-5 h-5 md:h-8 md:w-8" /> Watch now</button>
      </div>
    </div>
  );
};
