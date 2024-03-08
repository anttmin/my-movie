import { PlayIcon } from '@heroicons/react/24/solid'
import React from 'react'

const HeaderSplide = ({relateMovie}) => {
  return (
    <div>
        <div className="Background" >
           
             <img   src={`https://image.tmdb.org/t/p/original/${relateMovie.backdrop_path}`} />
              <div className="Main-layour">
                <div className='text'>
                <h2 className="text-white text-2xl">
                 {relateMovie.title}
                </h2>
                <p className="text-white passage">
                  {relateMovie.overview}
                </p>
                <button className="text-black bg-white p-2 btn">
                  Watch Now 
                  <PlayIcon className='playIcon'/>
                </button>
                </div>
              </div>
           
          </div>
    </div>
  )
}


 
export default HeaderSplide