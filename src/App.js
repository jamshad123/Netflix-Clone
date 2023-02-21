import React, { createContext } from 'react'
import Navbar1 from './Navbar1'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import './App.css';
import { ComedyMovies1,  LatestMovies1,  PopularMovies1 } from './Url';
import PopularMovies from './PopularMovies';
import { useState } from 'react';
import Details from './details';
import Home from './Home';


const newcontext = createContext();


function App() {
  const [array, setarray] = useState([])

  return (
    <div>
       <h1 className="bg-danger text-white"><span>NETFLI<b>X</b></span></h1>
       
      <newcontext.Provider value={{array, setarray}}>
      <BrowserRouter>

        <Navbar1 />
        <Outlet/>

        <Routes>
         <Route path="/home" element={<Home/>}/>
          <Route path="/ComedyMovies" element={<PopularMovies Movies={ComedyMovies1}/>}/>
          <Route path="/PopularMovies" element={<PopularMovies Movies={PopularMovies1}/>} />
          <Route path="/LatestMovies" element={<PopularMovies Movies={LatestMovies1}/>}/>
          <Route path="/details/:id" element={<Details/>}/>
        </Routes>
      </BrowserRouter>
      </newcontext.Provider>
    </div>
  )}

export default App
export {newcontext}

// export const ElectronicProducts = 'https://dummyjson.com/products';