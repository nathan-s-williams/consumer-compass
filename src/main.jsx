// main.tsx or main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import App from './App'
import './index.css'
import ErrorPage from "./Views/ErrorPage.tsx";
import Login from "./Views/Login.tsx";
import Dashboard from "./Views/Dashboard.tsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <Dashboard /> },
            { path: "login", element: <Login /> },
            { path: "dashboard", element: <Dashboard /> }
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <NextUIProvider>
            <RouterProvider router={router} />
        </NextUIProvider>
    </React.StrictMode>
);