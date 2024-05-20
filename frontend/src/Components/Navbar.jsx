import React from 'react'

const Navbar = () => {
  return (
    <div className="h-screen w-64 bg-gray-100 flex flex-col text-black justify-between text-center shadow-xl">
     <div>
      <h1 className="text-3xl text-black font-bold ">Time Tracker</h1>
         <div className="flex flex-col mt-10 p-3 text-black  ">
            <button className='border-2 border-gray-400 m-2 rounded-md py-2 px-4 text-lg font-bold hover:bg-purple-500'>Dashboard</button>
            <button className='border-2  border-gray-400 m-2 rounded-md py-2 text-lg font-bold hover:bg-purple-500'>Pomodro</button>
            <button className='border-2  border-gray-400 m-2 rounded-md py-2 text-lg font-bold hover:bg-purple-500'>Settings</button>
            <button className='border-2 border-gray-400 m-2 rounded-md py-2 text-lg font-bold hover:bg-purple-500'>Limit</button>
         </div>
     </div>
       <div className="flex flex-col mt-10 p-3 text-black ">
        <button className='border-2 m-2 rounded-md py-2 text-lg font-bold hover:bg-purple-500  border-gray-400'>support
        
        </button>
        <button className='border-2 m-2 rounded-md py-2 text-lg font-bold hover:bg-purple-500  border-gray-400'>Logout</button>

       </div>


    </div>
  )
}

export default Navbar