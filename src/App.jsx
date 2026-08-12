import React, { useEffect } from 'react'
import Home from './pages/Home/Home'
import { Routes,Route } from 'react-router-dom'
import Login from './pages/Login/Login'
import Player from './pages/Player/Player'
import MoviesShows from './pages/MoviesShows/MoviesShows'
import StreamingPlatform from './pages/StreamingPlatform/StreamingPlatform'
import QA from './pages/QA/QA'
import Subscriptions from './pages/Subscriptions/Subscriptions'
import Search from './pages/Search/Search'
import ProtectedRoute from './components/ProtectedRoute'

export const App = () => {
  useEffect(() => {
    fetch('/api/status')
      .then(res => res.json())
      .then(data => console.log('Backend connection successful:', data))
      .catch(err => console.error('Backend connection failed:', err));
  }, []);

  return (
    <div>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <Home/>
          </ProtectedRoute>
        }/>
        <Route path='/player/:id' element={
          <ProtectedRoute>
            <Player/>
          </ProtectedRoute>
        }/>
        <Route path='/movies-shows' element={
          <ProtectedRoute>
            <MoviesShows/>
          </ProtectedRoute>
        }/>
        <Route path='/streaming-platform' element={
          <ProtectedRoute>
            <StreamingPlatform/>
          </ProtectedRoute>
        }/>
        <Route path='/qa' element={
          <ProtectedRoute>
            <QA/>
          </ProtectedRoute>
        }/>
        <Route path='/subscriptions' element={
          <ProtectedRoute>
            <Subscriptions/>
          </ProtectedRoute>
        }/>
        <Route path='/search' element={
          <ProtectedRoute>
            <Search/>
          </ProtectedRoute>
        }/>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </div>
  )
}
