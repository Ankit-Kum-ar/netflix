import React from 'react'
import { FaPlay } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

const VideoTitle = (props) => {
  return (
    <div className='md:px-2 mx-[5%] absolute text-white md:my-[30%] my-[25%] ' >
      <h1 className='md:text-4xl text-xs font-semibold text-slate-200 mb-[1%]'>{props.title}</h1>
      <p className='md:w-7/12 w-5/12 md:text-base text-[6px] md:mb-[1%] '>{props.overview}</p>
      <div className=' flex md:gap-4 gap-2'>
        <button className='bg-white hover:bg-gray-400 shadow-md md:rounded-md rounded flex text-black md:px-6 px-1 md:my-2 my-4 md:py-2 md:text-base text-[6px] justify-center items-center'>
            <span className='me:my-1 md:px-2 pr-[2px]'><FaPlay /></span>  Play 
        </button>
        <button className=' flex bg-gray-500 hover:bg-gray-600 md:rounded-md rounded shadow-md text-white md:px-3 md:my-2 md:py-2 my-4 px-1 md:text-base text-[6px] items-center justify-center'>
            <span className='my-1 md:px-2 pr-[2px]'><IoIosInformationCircleOutline /></span>  More Info 
        </button>

      </div>
    </div>
  )
}

export default VideoTitle
