import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = (props) => {
  return (
    <div className='px-2 mx-[5%] absolute text-white my-[30%] ' >
      <h1 className='text-4xl font-semibold text-slate-200 mb-[1%]'>{props.title}</h1>
      <p className='w-7/12 mb-[1%] '>{props.overview}</p>
      <div className=' flex gap-4'>
        <button className='bg-white hover:bg-gray-400 shadow-md rounded-md flex text-black px-6 my-2 py-2'>
            <span className='my-1 px-2'><FaPlay /></span>  Play 
        </button>
        <button className=' flex bg-gray-500 hover:bg-gray-600 rounded-md shadow-md text-white px-3 my-2 py-2'>
            <span className='my-1 px-2'><IoIosInformationCircleOutline /></span>  More Info 
        </button>

      </div>
    </div>
  )
}

export default VideoTitle
