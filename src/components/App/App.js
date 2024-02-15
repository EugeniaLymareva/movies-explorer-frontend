import React from 'react'
import { Route, Routes, useNavigate, useLocation } from 'react-router-dom'
import { CurrentUserContext } from '../../contexts/CurrentUserContext.js'
import './App.css';
import Main from '../Main/Main'
import Movies from '../Movies/Movies'
import SavedMovies from '../SavedMovies/SavedMovies'
import Profile from '../Profile/Profile'
import Login from '../Login/Login'
import Register from '../Register/Register'
import PageNotFound from '../PageNotFound/PageNotFound'
import ProtectedRoute from '../ProtectedRoute/ProtectedRoute.js'
import apiMain from '../../utils/MainApi.js'
import { parseCookie } from '../../utils/parseCookie.js'

const PROTECTED_PATHS = {
  movies: '/movies',
  savedMovies: '/saved-movies',
  profile: '/profile',
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false)
  const [currentUser, setCurrentUser] = React.useState({})
  const [userData, setUserData] = React.useState(null)
  const [isUpdateUser, setIsUpdateUser] = React.useState(false)
  const [savedMovies, setSavedMovies] = React.useState([])
  const [savedMoviesLoaded, setSavedMoviesLoaded] = React.useState(false)
  const [filteredMovies, setFilteredMovies] = React.useState([])
  const [isInfoTooltipPopupOpen, setIsInfoTooltipPopupOpen] = React.useState(false)
  const [errorMessage, setErrorMessage] = React.useState('')
  const navigate = useNavigate()
  const { pathname } = useLocation()

  React.useEffect(() => {
    if (isLoggedIn) {
      Promise.all([apiMain.getUserInfo(), apiMain.getSavedMovies()])
      .then(([userData, moviesData]) => {
        // console.log('savedMovies', moviesData)
        setCurrentUser(userData)
        setSavedMovies(moviesData)
        setSavedMoviesLoaded(true)
      })
      .catch((err) => {
        setErrorMessage('Ошибка загрузки данных!')
        console.log(err)
      })
    }
  }, [isLoggedIn])

  function handleLogin(userData) {
    const lastPath = localStorage.getItem('lastPath')
    
    setUserData(userData)
    setIsLoggedIn(true)

    if (Object.values(PROTECTED_PATHS).includes(pathname)) { 
      const navigateTo = lastPath ? lastPath : PROTECTED_PATHS.movies
      navigate(navigateTo)
    }
  }

  function handleCheckToken() {                    
    if (document.cookie) {                           
      const cookies = parseCookie(document.cookie)     
      if (cookies.token) {                           
        apiMain.getUserInfo()                            
        .then((response) => {
          if(!response) {                             
            // todo выбросить ошибку
            return
          }
          handleLogin(response)         
        })
        .catch((err) => {
          setIsLoggedIn(false)        
          console.log(err)
        })
    
        return
      }
    }
    setIsLoggedIn(false)
  }

  React.useEffect(() => {
    handleCheckToken()      
  }, []) 

  function closeInfoTooltip() {          
    setIsInfoTooltipPopupOpen(false)
}

  function handleUpdateUser(userData) {  
    // setIsLoading(true)                   
    apiMain.updateUserInfo(userData)         
      .then(response => {               
        setCurrentUser(response)          
        setIsUpdateUser(true)  
      })
      .catch((err) => {                  
        console.log(err)
        setIsUpdateUser(false)           
      })  
      .finally(() => {                   
        setIsInfoTooltipPopupOpen(true)               
      })     
  }

  function handleLoginOut() {
    setIsLoggedIn(false)
  }

  function handleSearchMovies(moviesList, search, isCheck) {
    const filteredMovies = moviesList.filter((movie) => {
        const searchNameRu = movie.nameRU.toLowerCase().includes(search.toLowerCase())
        const searchNameEn = movie.nameEN.toLowerCase().includes(search.toLowerCase())

        return isCheck ? ((searchNameRu || searchNameEn) && movie.duration <= 40) : (searchNameRu || searchNameEn)
    })
    
    setFilteredMovies(filteredMovies)
    
    return filteredMovies
}

  function handleSaveMovie(movieData) {
    apiMain.addMovie(movieData)
        .then(() => {
            setSavedMovies(oldSavedMovies => ([...oldSavedMovies, movieData]))
        })
        .catch((err) => {console.log( err)})
}

function handleDeleteMovie(movieId) {
    apiMain.deleteMovie(movieId)
    .then(() => {
        setSavedMovies(oldSavedMovies => oldSavedMovies.filter(movie => movie.movieId !== movieId))
    })
    .catch((err) => {console.log( err)})
}

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
        <div className= "page">
          <Routes>
            <Route path='/signup' element={<Register
              onLoggedIn={handleLogin}
              isOpen={isInfoTooltipPopupOpen}
              setIsOpen={setIsInfoTooltipPopupOpen}
              onClose={closeInfoTooltip} 
            />} />
            <Route path='/signin' element={<Login onLoggedIn={handleLogin} />} />
            <Route path='/' element={<Main isLoggedIn={isLoggedIn} />} />

            <Route path={PROTECTED_PATHS.movies} element={<ProtectedRoute
              element={Movies}
              isLoggedIn={isLoggedIn}
              savedMoviesLoaded={savedMoviesLoaded}
              savedMovies={savedMovies}
              handleSearchMovies={handleSearchMovies}
              filteredMovies={filteredMovies}
              handleSaveMovie={handleSaveMovie}
              handleDeleteMovie={handleDeleteMovie}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />}/>
            <Route path={PROTECTED_PATHS.savedMovies} element={<ProtectedRoute
              isLoggedIn={isLoggedIn}
              savedMoviesLoaded={savedMoviesLoaded}
              element={SavedMovies} 
              savedMovies={savedMovies}
              handleSearchMovies={handleSearchMovies}
              filteredMovies={filteredMovies}
              handleDeleteMovie={handleDeleteMovie}
              errorMessage={errorMessage}
              setErrorMessage={setErrorMessage}
            />} />
            <Route path={PROTECTED_PATHS.profile} element={<ProtectedRoute
              isLoggedIn={isLoggedIn}
              element={Profile} 
              userData={userData}
              updateUser={isUpdateUser}
              isUpdateUser={isUpdateUser}
              onUpdateUser={handleUpdateUser}
              isOpen={isInfoTooltipPopupOpen}
              onClose={closeInfoTooltip}
              loggedOut={handleLoginOut}
            />} />
            
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        
        </div>
      </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
