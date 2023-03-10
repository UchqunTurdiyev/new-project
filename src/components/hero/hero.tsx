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


  return (
    <div className="flex flex-col space-y-2 pt-28 pb-10 md:space-y-4 lg:h-[65vh] lg:pb-12 lg:justify-center">
      <div className="absolute -z-10 top-0 left-0 h-[95vh] w-full">
        <Image
          src={`${image_base}${movie?.backdrop_path || movie?.poster_path}`}
          alt={movie?.title}
          fill
          className="object-cover"
        />
      </div>
      <div className="w-[100px] rounded-bl-xl text-lg rounded-tr-xl text-center px-1 py-[2px] bg-black/50 text-white">{movie.media_type}</div>
        <div className="flex items-center space-x-2">
            <ReactStars edit={false} count={10} color2={'#ffd700'} value={movie.vote_average} />
            <p>({movie.vote_count})</p>
        </div>
      <h1 className="font-bold text-2xl md:text-4xl lg:text-6xl">{movie?.title || movie?.name}</h1>
      <p className="max-w-xs max-lg:max-w-xl max-sm:w-5/6 mg:max-w-lg lg:max-w-2xl text-xs md:text-lg lg:text-2xl lg:leading-10">{movie.overview?.slice(0, 140)}...</p>
      <div className="">
      <button className="flex bg-[#00000080] items-center justify-center border-2 text-white font-bold rounded-full max-md:text-sm w-36 h-12 lg:w-52 lg:h-14 "><BsPlay className="w-5 h-5 md:h-8 md:w-8" /> Watch now</button>
      </div>
    </div>
  );
};
