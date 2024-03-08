
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Detail = () => {

  const post = useLoaderData();
  console.log(post);
  const {budget,original_title,runtime,overview,release_date,genres} = post
  // console.log(post);

  return (
    <div className='mt-[3rem] text-center MainDetails'>
      <img src={`https://image.tmdb.org/t/p/original/${post.backdrop_path}`}/>

       <div className='flex justify-around mt-[2rem] p-[1rem] Details'>
       <img src={`https://image.tmdb.org/t/p/original/${post.poster_path}`} className='w-[200px] '/>
       <div className='w-[50%]'>
       <p className='font-bold text-white'>Title: {original_title}</p>
       <p className='text-white'>RunTime: {runtime} Mins</p>
       <p className='font-bold text-white'>Budget: ${budget}</p>
       <p className='review'>Review: {overview}</p>
       <p className='font-bold'>RelaseDate: {release_date}</p>
       <p className='mb-4'>Movie Type:{genres.map((genre)=>{
          return(
            <span className='inline-block mx-1 font-bold hover:bg-green-500 titles' key={genre.id}>{ genre.name}</span>
          )
       })}</p>
       <NavLink to={post.homepage} className="outline  Link">Watch</NavLink>
       </div>
       </div>
    </div>
  )
}

export default Detail
export const loader = async ({requesr,params}) =>{
  const reponse = await fetch (`https://api.themoviedb.org/3/movie/${params.id}?api_key=d88231877ce993b502a67a43316055af`);
  // console.log(reponse);
  if(!reponse.ok){
   // 
  }else{
    const details = await reponse.json();
    // console.log(details);
    return details
  }
}




