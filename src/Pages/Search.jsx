import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";

const Search = () => {
  // const[searchMovie,setsearchMovie] = useState([]);

  const posts = useLoaderData({});
  console.log(posts);
  const {title,overview,release_date} = posts


 
  return (
    <div>
      
       {
        posts.map((post)=>{
          return(
         <div className="mt-[7%]">
           <div className=" Search" key={post.id} >
             <img src={`https://image.tmdb.org/t/p/original/${post.poster_path}`} className='w-[200px] Img'/>
            <div className="SecondPass">
            <h2 className="font-bold">Title: {post.title}</h2>
            <p className="Overview">OverView: {post.overview}</p>
            <p className="font-bold">Relase_Date: {post.release_date}</p>
            </div>
          </div>
         </div>
          )
        })
       }
 
      
    </div>
  );
};

export default Search;

export const loader = async ({ requeat, params }) => {
  const reponse = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=72a814220967e9899c058deb9f37ed4a&language=en-US&query=${params.title}&page=1&include_adult=false`
  );
  // console.log(reponse);
  if (!reponse.ok) {
    //
  } else {
    const details = await reponse.json();
    // setsearchMovie(details.results);
    return details.results;
  }
};

