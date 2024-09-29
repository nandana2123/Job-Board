import React, { useState } from 'react'
import Navbar from './components/shared/navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home'
import Signup from './components/auth/Signup'
import Login from './components/auth/Login'

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  // {
  //   path: '/',
  //   element: <Home />
  // }, 
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  //  {
  //   path: '/',
  //   element: <Home />
  // }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  )
}

export default App
