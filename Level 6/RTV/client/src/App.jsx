// import './App.css';
import Navbar from './components/Navbar.jsx';
import {Routes, Route, Navigate} from 'react-router-dom'
import Auth from './components/Auth.jsx';
import Profile from './components/Profile.jsx';
import { useContext, useEffect } from 'react';
import { UserContext } from './context/UserProvider.jsx';
import ProtectedRoute from './components/ProtectedRoute.jsx';
import PublicPostList from './components/PublicPostList.jsx';



function App() {

  const { token, logout, allPosts, upKeepPosts, upVotePost, downVotePost } = useContext(UserContext)


  useEffect(() => {
        upKeepPosts()
    }, [])
  

  return (
    <div className="App">
      
      {token && <Navbar logout= {logout}/>}

      <Routes>

        <Route path='/' element = { token ? <Navigate to='/profile' /> : <Auth />} />

        <Route path='/profile' 
        element = {
          <ProtectedRoute token={token} >
            <Profile />
          </ProtectedRoute>}/>

        <Route path= '/posts' 
        element = {<ProtectedRoute token={token}>
          <PublicPostList allPosts={allPosts} upKeepPosts= {upKeepPosts} upVotePost={upVotePost} downVotePost= {downVotePost}/>
        </ProtectedRoute>}/>

      </Routes>
    </div>
  );
}

export default App;