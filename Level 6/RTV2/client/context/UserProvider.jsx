// UserProvider ROCK THE VOTE 2 app
import { createContext, useState } from "react"
import axios from 'axios';

const UserContext = createContext()

const userAxios = axios.create()

userAxios.interceptors.request.use(config => {
    const token = localStorage.getItem('token')
    config.headers.Authorization = `Bearer ${token}`
    return config
})

 function UserProvider(props) {

    const initState = {
        user: JSON.parse(localStorage.getItem('user')) || {},
        token: localStorage.getItem('token') || "",
        posts: [],
        errMsg: ''
    }

    const [userState, setUserState] = useState(initState)

    const [allPosts, setAllPosts] = useState([])
    const [comments, setComments] = useState([])

    function signup(credentials) {
        axios.post('/auth/signup', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
                console.log(res)
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function login(credentials) {
        axios.post('/auth/login', credentials)
            .then(res => {
                const { user, token } = res.data
                localStorage.setItem('token', token)
                localStorage.setItem('user', JSON.stringify(user))
                getAllPosts()
                getUserPosts()
                setUserState(prevUserState => ({
                    ...prevUserState,
                    user,
                    token
                }))
                console.log(res)
            })
            .catch(err => handleAuthErr(err.response.data.errMsg))
    }
    function logout() {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUserState({
            user: {},
            token: "",
            posts: []
        })
    }
    function handleAuthErr(errMsg) {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg
        }))
    }
    function resetAuthErr() {
        setUserState(prevUserState => ({
            ...prevUserState,
            errMsg: ""
        }))
    }
console.log(comments)
    function postNewComment(issueId, newComment){
        userAxios.post(`/api/comments/${issueId}`, newComment)
        .then(res => {
            setComments(prevComments =>[...prevComments, res.data] )
            comments(prevComments =>[...prevComments, res.data])
        })
        .catch(err => console.log(err))
    }
    function getAllComments(){
        userAxios.get(`/api/comments/`)
        .then(res => {
            setComments(res.data)
        })
        .catch(err => console.log(err))
    }


    function getAllPosts() {
        userAxios.get('/api/rtv')
            .then(res => setAllPosts(res.data))
            .catch(err => console.log(err))
    }
    function getUserPosts() {
        userAxios.get('/api/rtv/user')
            .then(res => setUserState(prevUserState => ({
                ...prevUserState,
                posts: [...prevUserState.posts, ...res.data]
            })))
            .catch(err => console.dir(err.response.data.errMsg))
    }
    function addPost(newPost) {
        userAxios.post('/api/rtv', newPost)
            .then(res => {
                setUserState(prevUserState => ({
                    ...prevUserState,
                    posts: [...prevUserState.posts, res.data]
                }))
                setAllPosts(prevPosts => ([
                    ...prevPosts,
                    res.data
                ]))
            })
            .catch(err => console.dir(err.response.data.errMsg))
    }
    // function upKeepPosts() {
    //     getUserPosts()
    //     getAllPosts()
    // }
    function upVotePost(postId) {
        userAxios.put(`/api/rtv/upVote/${postId}`)
            .then(res => {
                console.log(res.data)
                setAllPosts(prevPosts => prevPosts.map(post => postId !== post._id ? post : res.data))
                setUserState(prevUserState => ({ ...prevUserState, posts: prevUserState.posts.map(post => postId !== post._id ? post : res.data) }))

            })
            .catch(err => console.log(err))
    }
    function downVotePost(postId) {
        userAxios.put(`/api/rtv/downVote/${postId}`)
            .then(res => {
                setAllPosts(prevPosts => prevPosts.map(post => postId !== post._id ? post : res.data))
                setUserState(prevUserState => ({ ...prevUserState, posts: prevUserState.posts.map(post => postId !== post._id ? post : res.data) }))
            })
            .catch(err => console.log(err))
    }

    function deletePost(postId){
        userAxios.delete(`/api/rtv/${postId}`)
        .then(res => {
            setAllPosts(prevPosts => prevPosts.filter(post => post._id !== postId))
            setUserState(prevUserState => {
                return {
                    ...prevUserState, 
                    posts: prevUserState.posts.filter(post => post._id !== postId)
                }
            })
        })
        .catch(err => console.log(err))
    }

    return (
        <UserContext.Provider
            value={{
                ...userState,
                signup,
                login,
                logout,
                addPost,
                resetAuthErr,
                allPosts,
                getUserPosts,
                getAllPosts,
                upVotePost,
                downVotePost,
                deletePost,
                postNewComment,
                comments,
                setComments,
                getAllComments,
                

                
            }}>
            {props.children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }