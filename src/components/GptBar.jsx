import React from 'react'

const GptBar = () => {
  return (
    <div className='flex justify-center  items-center pt-[14%]'>
      <form action="" className='bg-black w-1/2'>
        <input className='placeholder-black p-3 m-4 w-8/12 outline-none rounded-xl ' type="text" placeholder="Search for a movie" />
        <button className='bg-red-800 text-white px-4 py-2.5 w-3/12 rounded-xl'>Search</button>
      </form>
    </div>
  )
}

export default GptBar
