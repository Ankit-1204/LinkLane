import React from 'react';
import ProfileForm from "./profile"
import UserProfile from './user';
import axios from 'axios';
import Home from './home';
import {RouterProvider, createBrowserRouter} from 'react-router-dom'
axios.defaults.baseURL='http://localhost:5000'
axios.defaults.withCredentials=true

const router=createBrowserRouter([
    {
        path:"/",
        element:<Home />
    },
    {
        path:'/user',
        element:<ProfileForm />
    }
]);
const App = () => {
    return (
        <RouterProvider router={router}/>
    )
};

export default App;
