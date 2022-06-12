import React from 'react'
import { Routes , Route } from 'react-router-dom';
import { Search } from './Search';
import { Results } from './Results';


export const Routese = () => {
  return (
    <div className='p-4'>
      <Routes>
        <Route path = '/' element={<Search />}></Route>
        <Route path = '/Search' element={<Results />}></Route> 
        <Route path = '/images' element={<Results />}></Route> 
        <Route path = '/news' element={<Results />}></Route> 
        <Route path = '/videos' element={<Results />}></Route>   
      </Routes>
    </div>
  )
}
