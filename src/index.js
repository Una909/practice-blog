import React from 'react';
import ReactDOM from 'react-dom/client';
import  './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import PostDetail from './pages/PostDetail';
import Profile from './pages/Profile';
import CreatePosts from './pages/CreatePosts';
import EditPost from './pages/EditPost';
import CategoryPosts from './pages/CategoryPosts';
import Dashboard from './pages/Dashboard';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <Home />},
      {path: "posts/:id", element: <PostDetail />},
      {path: "profile/:id", element: <Profile />},
      {path: "create", element: <CreatePosts />},
      {path: "posts/categories/:category", element: <CategoryPosts />},
      {path: "myposts/:id", element: <Dashboard />},
      {path: "posts/:id/edit", element: <EditPost />},
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

