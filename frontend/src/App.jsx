import React from "react";
import './App.css'
import Home from "./components/Shared/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginForm from "./components/auth/login";
import SignUp from "./components/auth/signup";
import DashboardLayout from "./components/Dashboard/Layout";
import Dashboard from "./components/Dashboard/Dashboard";
import UserDetailsForm from "./components/Dashboard/UserDetails";
import Introduction from "./components/Games/Level1/Introduction";

function App() {

  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <LoginForm />
    },
    {
      path: '/signUp',
      element: <SignUp />
    },
    {
      path: '/UserDetails',
      element: (
        <DashboardLayout>
          <UserDetailsForm />
        </DashboardLayout>
      )
    },
    {
      path: '/games/level1',
      element: (
        <DashboardLayout>
          <Introduction />
        </DashboardLayout>
      )
    },
    {
      path: '/games/level2',
      element: (
        <DashboardLayout>
          <UserDetailsForm />
        </DashboardLayout>
      )
    },
    {
      path: '/games/level3',
      element: (
        <DashboardLayout>
          <UserDetailsForm />
        </DashboardLayout>
      )
    },
    {
      path: '/games/level4',
      element: (
        <DashboardLayout>
          <UserDetailsForm />
        </DashboardLayout>
      )
    },
    
    {
      path: '/dashboard',
      element: (
        <DashboardLayout>
          <Dashboard />
        </DashboardLayout>
      )
    }
  ])

  return (
    <>
      <div>
        <RouterProvider router={appRouter} />
      </div>
    </>
  )
}

export default App
