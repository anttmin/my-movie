import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import HeaderSplide from "../Components/HeaderSplide";
import { useEffect, useState } from "react";

const Header = () => {
  const [relateMovies, setrealtedMovies] = useState([]);

  useEffect(() => {
    moviedata();
  }, []);

  const moviedata = async () => {
    const reponse =
      await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=d88231877ce993b502a67a43316055af
    `);
    //  console.log(reponse);
    const data = await reponse.json();
    // console.log(data);
    setrealtedMovies(data.results);
    // console.log(data.results);
  };
  return (
    <div>
      <Splide>
        {/* for splide  */}
        {relateMovies.map((movie) => {
          return (
            <SplideSlide key={movie.id}>
              <HeaderSplide relateMovie={movie} />
            </SplideSlide>
          );
        })}
        {/* for splide  */}
      </Splide>
    </div>
  );
};

export default Header;
