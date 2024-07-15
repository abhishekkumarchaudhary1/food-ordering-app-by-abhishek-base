import React from 'react';
import { useDispatch } from 'react-redux';
import { setSearch } from '../redux/slices/SearchSlice'

const Navbar = () => {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-10 '>
        <div>
            <h3 className='text-xl font-bold text-gray-600'>{new Date().toLocaleString()}</h3>
            <h1 className='text-2xl font-bold'>Food App By Abhishek</h1>
        </div>
        <div>
            <input 
                type="search" 
                name="search" 
                id="" 
                placeholder='Search Food here' 
                autoComplete='off'
                onChange={(e) => dispatch(setSearch(e.target.value)) }
                className='p-3 border border-gray-400 text-sm rounded-lg w-full lg:w-[25vw]'
            />
        </div>
    </nav>
  )
}

export default Navbar