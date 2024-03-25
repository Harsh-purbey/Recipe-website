import React from 'react'
import Home from './components/Home'
import './App.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom'
import RecipeId from './components/RecipeId'
import Category from './components/Category'
import SearchElement from './components/SearchElement'
const App = () => {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<RecipeId/>} path='/:idMeal'/>
        <Route element={<Category/>} path='/category/:name'/>
        <Route element={<SearchElement/>} path='/search/:searchTerm'/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
