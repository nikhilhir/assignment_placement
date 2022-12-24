import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './HomePage';
import UserDetails from './UserDetails';

const MainRouter = () => {
    const [data,setData]=useState([])
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage data={data} setData={setData} />} />
        <Route path='/details' element={<UserDetails data={data} setData={setData} />} />
      </Routes>
    </div>
  );
}

export default MainRouter