import React, { useContext,useState } from 'react'
import { useParams } from 'react-router-dom'
import { newcontext } from './App';
import { imageUrl } from './Url';
import './details.css';




function Details() {
  
  const {array, setarray}=useContext(newcontext)
  const {id} =useParams()
  console.log(id);
  console.log(array);

  const [filter] = array.filter((res => res.id == id));
  console.log(filter);
   
  return (
    <div className='there'>
      
     <img className='image' src={imageUrl+filter.backdrop_path} alt="" /> 
      <h1 className='title'>{filter.title || filter.name}</h1>
      <h2 className='point'>{filter.overview}</h2>
    </div>
  )
}

export default Details
