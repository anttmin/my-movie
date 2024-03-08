import React from 'react'
import {  PlayCircleIcon } from '@heroicons/react/24/solid'
import { NavLink, useLoaderData } from 'react-router-dom'

const Card = ({movie}) => {
  const Movie = movie;
  // console.log(Movie);
  return (
    <div className='relative'>
     <div>
     <NavLink to={`/detail/${Movie.id}`}><img src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`} className='w-[200px] h-[150px] object-cover  Img ' /></NavLink>
     <PlayCircleIcon className='text-white w-[50px] PlayIcon' />
     </div>
     
    </div>
  )
}


export default Card