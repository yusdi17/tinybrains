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

const router = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <LandingPage />,
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

])

export default router