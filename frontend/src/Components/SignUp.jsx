import {useState}from 'react'
import { SiPanasonic } from 'react-icons/si';

const SignUp = () => {
    const [login,setLogin]=useState(false);
    const toggle=()=>{
        setLogin((prev=>!prev))
    }
  return (
    <div > 
      {login?(<>
        <div className="h-screen w-screen flex justify-center align-center text-black">
    <div className="w-[400px]  h-[450px]  bg-gray-300 mt-24 flex flex-col justify-center items-center  border-2 border-white rounded-lg">
      <header className="text-3xl px-1 py-1">
        <h1>Signup</h1>
      </header>
      <main className="signup-body">
        <form action="#">
          <p className='text-lg flex flex-col'>
            <label for="name">Full Name</label>
            <input type="text" placeholder="Type Name Here" id="name" className='outline-none p-1  w-64 rounded-md' />
          </p>
          <p className='text-lg mt-5  flex flex-col'>
            <label for="email">Email</label>
            <input type="email" placeholder="xyz@gmail.com" id="email" className='outline-none p-1  w-64 rounded-md' />
           
          </p>
          <p className='text-lg mt-5  flex flex-col'>
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="at least 8 characters"
              id="password"
              className='outline-none p-1  w-64 rounded-md'
            />
           
          </p>
          <p  className='mt-4 text-center p-1 '>
            <input type="submit" value="Create Account" id="submitBtn" className='bg-[#3498db] text-lg font-bold p-2 text-white w-64 p-1 rounded-lg' />
          </p>
        </form>
      </main>
      <footer className="signup-footer mt-5 p-2">
        <p>Already have an account? <button className='text-blue-500 ' onClick={toggle} >Login</button></p>
      </footer>
    </div>
  </div>
      </> ): (<>
        <div className="h-screen w-screen flex justify-center align-center text-black">
    <div className="w-[400px]  h-[450px]  bg-gray-300 mt-24 flex flex-col justify-center items-center  border-2 border-white rounded-lg">
      <header className="text-3xl px-1 py-1">
        <h1>Signup</h1>
      </header>
      <main className="signup-body">
        <form action="#">
         
          <p className='text-lg mt-5  flex flex-col'>
            <label for="email">Email</label>
            <input type="email" placeholder="xyz@gmail.com" id="email" className='outline-none p-1  w-64 rounded-md'/>
           
          </p>
          <p className='text-lg mt-5  flex flex-col'>
            <label for="password">Password</label>
            <input
              type="password"
              placeholder="at least 8 characters"
              id="password"
              className='outline-none p-1  w-64 rounded-md'
            />
           
          </p>
          <p className='mt-4 text-center p-1 '>
            <input type="submit" value="Login" className='bg-[#3498db] text-lg font-bold  text-white w-64 p-1 rounded-lg' id="submitBtn"/>
          </p>
        </form>
      </main>
      <footer className="signup-footer mt-5">
        <p>Create new account <button   className='text-blue-500'  onClick={toggle} >New Account</button></p>
      </footer>
    </div>
  </div>
      </>)}
  </div>
  )
}

export default SignUp