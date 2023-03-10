import React, { useRef, useState } from "react";
import { RowProps } from "./row.props";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Thumbnail } from "../thumbnail/thumbnail";

export const Row = ({ title, movies, isBig = false }: RowProps) => {
  const [moved, setMoved] = useState<boolean>(false);

  // useRef bizga element silkasini qilib beradi
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (direction: "left" | "right") => {
    setMoved(true);
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;

      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;

      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });

      if (direction === "left" && scrollTo === 0) {
        setMoved(false);
      }
      if (direction === "right" && scrollTo === 0) {
        setMoved(false);
      }
    }
  };

  return (
    <div className="mb-8 space-y-1 lg:space-y-2">
      <h2 className="w-56 cursor-pointer text-sm md:text-2xl font-semibold text-white/70 transition duration-200 hover:text-white">
        {title}
      </h2>
      {/* carousel */}

      <div className="group relative md:ml-2 ">
        <AiOutlineLeft
          onClick={() => handleClick("left")}
          className={`h-6 w-6 group-hover:opacity-100 opacity-0 transition duration-200 hover:scale-150 cursor-pointer absolute top-[42%] left-0 z-40 m-auto blur-0 ${
            !moved && "hidden"
          }`}
        />
        <AiOutlineRight
          onClick={() => handleClick("right")}
          className={`h-6 w-6 group-hover:opacity-100 opacity-0 transition duration-200 hover:scale-150 cursor-pointer absolute top-[42%] md:right-10 right-4 z-40 m-auto blur-0 `}
        />
        <div
          ref={carouselRef}
          className={`flex items-center overflow-hidden ${!isBig && "space-x-1 md:space-x-4"}  scrollbar-hide overflow-x-scroll `}
        >
          {movies.map((movie) => (
            <Thumbnail key={movie.id} movie={movie} isBig={isBig} />
          ))}
        </div>
      </div>
    </div>
  );
};
