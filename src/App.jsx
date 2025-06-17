import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects'
import Blog from './pages/Blog'

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element= {<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='projects' element={<Projects />} />
        <Route path='blog' element={<Blog />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router} />
      
    </>

  )
}

export default App