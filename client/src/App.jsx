import React, { useEffect, useState } from 'react'
import TaskList from './components/taskList'
import Footer from './layout/footer'
import Navbar from './layout/navbar'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<TaskList />} />
        </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
