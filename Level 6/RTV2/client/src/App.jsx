import Navbar from '../components/NavBar'
import Auth from '../components/Auth'
import {Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import { useContext, useEffect } from 'react'
import { UserContext } from '../context/UserProvider'
import ProtectedRoute from '../components/ProtectedRoute'
import Profile from '../components/Profile'
import Public from "../components/Public"
import PublicPostList from "../components/PublicPostList"
import axios from 'axios'

function App() {

const {token, logout, upKeepPosts,downVotePost, upVotePost, getAllComments } = useContext(UserContext)

useEffect(() => {
  getAllComments(); // Use the function from the context
}, []);


  return(
    <>
      { token && <Navbar logout={logout}/>}

    <Routes>

      <Route 
      path='/' 
      element={token ? <Navigate to='/profile' /> : <Auth />}
      />

      <Route 
      path='/profile' 
      element= {
        <ProtectedRoute token={token} redirectTo = "/">
          <Profile />
        </ProtectedRoute>}
        />

        <Route 
        path='/public' 
        element= {
        <ProtectedRoute token= {token} redirectTo = "/">
           <Public />
          
        </ProtectedRoute> }
        />

        <Route 
        path= '/posts'
        element = {
        <ProtectedRoute token={token} >
         
          <PublicPostList allPosts={PublicPostList} upKeepPosts={upKeepPosts} upVotePost={upVotePost} downVotePost= {downVotePost}/>
        </ProtectedRoute>}
        />

      {/* <PublicPostList /> */}

      
      </Routes>
    </>
  )

}
export default App
