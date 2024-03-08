import React, { useEffect, useState } from "react";
import Card from "../Pages/Card";

const Popular = () => {
  const [PopularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    MovieData();
  }, []);

  const MovieData = async () => {
    const reponse = await fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=d88231877ce993b502a67a43316055af"
    );
    const data = await reponse.json();
    setPopularMovies(data.results);
    // console.log(data.results)
  };

  return (
    <div className="bg-black">
      <div className="bg-black pt-[1rem] pb-2 pl-8 pr-8">
        <h2 className="popular text-white text-2xl">Popular Now</h2>
      </div>
      <div className="grid grid-cols-8 gap-3 p-2 pt-[1.5rem]">
        {PopularMovies.length &&
          PopularMovies.map((PopularMovie) => {
            return (
              <div className="Overlayer" key={PopularMovie.id}>
                <Card movie={PopularMovie} />
              </div>
            );
          })}
      </div>

      <h2>This is Popular Page</h2>
    </div>
  );
};

export default Popular;
