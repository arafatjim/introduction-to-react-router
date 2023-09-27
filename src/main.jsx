import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Header from './components/Header/Header';
import About from './components/About/About';
import Contact from './Contact/Contact';
import Users from './Users/Users';
import Comments from './components/Comments/Comments';
import UserDetails from './components/UserDetails/UserDetails';
import Posts from './components/Posts/Posts';
import PostDetails from './components/PostDetails/PostDetails';

const router=createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: [
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path:'/users',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users></Users>
      },
      {
        path:'/comments',
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/comments'),
        element:<Comments></Comments>
      },
      {
        path:'/user/:userId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader: () =>  fetch(`https://jsonplaceholder.typicode.com/posts`),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
      }
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
