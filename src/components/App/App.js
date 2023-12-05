import React from 'react'
import { Route, Routes, Navigate, useNavigate } from 'react-router-dom'
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'



function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(true)

  return (
    <div className="App">
      <div className= "page">
        <Routes>
          <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />
          <Route path='/movies' element={<Movies />}/>
          <Route path='/saved-movies' element={<SavedMovies />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/signin' element={<Login />} />
          <Route path='/signup' element={<Register />} />
          <Route path='/*' element={<PageNotFound />} />
        </Routes>
      
      </div>
    </div>
  );
}

export default App;
