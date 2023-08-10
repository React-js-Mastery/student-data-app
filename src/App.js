import React from 'react'

import { Routes, Route } from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Student from './components/Student'
import ContactUs from './components/ContactUs'
import AddNewStudent from './components/AddNewStudent'
import EditStudent from './components/EditStudent';
import Nav from './components/Nav'

const App = () => {
  return (
    <div>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/student' element={<Student/>}/>
        <Route path='/contact' element={<ContactUs/>}/>
        <Route path='/addnewstudent' element={<AddNewStudent/>}/>
        <Route path='/editstudent' element={<EditStudent/>}/>
      </Routes>
    </div>
  )
}

export default App