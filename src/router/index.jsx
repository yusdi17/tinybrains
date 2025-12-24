import { createBrowserRouter } from "react-router-dom"
import NotFound from "../pages/404/NotFound"
import LandingPage from "../pages/LandingPage"
import Login from "../pages/auth/Login"
import Register from "../pages/auth/Register"
import ForgotPassword from "../pages/auth/LupaPassword"
import ResetPassword from "../pages/auth/ResetPassword"
import Explore from "../pages/projects/Explore"
import UserProfile from "../pages/profile/UserProfile"
import ProjectDetail from "../pages/projects/ProjectDetail"
import Upload from "../pages/projects/Upload"
import Layout from "../components/Layout"
import DashboardLayout from "../layouts/DashboardLayout"
import Overview from "../pages/dashboard/OverView"
import MyProjects from "../pages/dashboard/MyProjects"
import ManageUsers from "../pages/dashboard/admin/ManageUsers"
import ManageProjects from "../pages/dashboard/admin/ManageProject"
import SystemLogs from "../pages/dashboard/admin/SystemLogs"
import Settings from "../pages/dashboard/Settings"

const router = createBrowserRouter([

  // --- Dashboard Routes ---
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <Overview />
      },
      {
        path: "projects", 
        element: <MyProjects />
      },
      {
        path: "projects/new", 
        element: <Upload />
      },
      {
        path: "users",
        element: <ManageUsers />
      },
      { 
        path: "admin-projects",
        element: <ManageProjects />
      },
      { 
        path: "logs", 
        element: <SystemLogs />
      },
      {
        path: "settings",
        element: <Settings />
      }
    ]
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/explore/projects",
        element: <Explore />,
      },
      {
        path: "/profile/:username",
        element: <UserProfile />,
      },
      {
        path: "/project/:id",
        element: <ProjectDetail />
      },
      {
        path: "/upload",
        element: <Upload />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ]
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />
  },
  {
    path: "/reset-password",
    element: <ResetPassword />
  },

])

export default router