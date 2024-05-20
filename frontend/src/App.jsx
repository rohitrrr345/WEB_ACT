import React from 'react'
import Navigation from './Components/Navigation'
import Dashboard from './Components/Dashboard'
import {createBrowserRouter,RouterProvider} from "react-router-dom"
import Support from './Components/Support'
import Limit from './Components/Limit'
const router= createBrowserRouter([
  {
    path:"/",
    element:<Limit/>
  },
  {
    path:"/Support",
    element:<Support/>
  }
])
const App = () => {
  return (
   <>
    <div className="flex text-black bg-slate-300">
       
        <Navigation/>
                     
        <main className="grow">
          <Dashboard />
        </main>
      </div>
   </>
  )
}

export default App