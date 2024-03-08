import {  MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { useState,useRef } from 'react'
import {  NavLink } from 'react-router-dom'


const Navbar = () => {

  const ref = useRef(null);


  const [searchKey, setSearchKey] = useState("");


  const search = (e) => {
    e.preventDefault();
 
  };

  const handleClick = () => {
    ref.current.value = '';
  };

 

  return (
    <div className='Navbar'>
        <NavLink to={"/"}><h1 className='Logo text-3xl text-white'>URMV</h1></NavLink>
        <NavLink to={"/popular"}><p className='font-bold text-white hover:text-green-500'>Popular</p></NavLink>
        <NavLink to={'/upcoming'}><p className='popular font-bold text-white hover:text-green-500'>Up Comming</p></NavLink>
        <form className="flex items-center justify-center" onSubmit={search}>
        <input
          type="text"
          className="text-[16px] bg-transparent border-b-2 border-b-slate-300 focus:outline-none w-2/3 text-white"
          onChange={(e) => setSearchKey(e.target.value)}
          ref={ref}/>
       
        <NavLink to={`/search/${searchKey}`}>
        <button type="submit" onClick={handleClick} >
          <MagnifyingGlassIcon className="w-5 h-8 text-white" />
        </button>
        </NavLink>

      </form>
    </div>
  )
}

export default Navbar







