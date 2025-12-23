import { createBrowserRouter } from "react-router-dom"
import Index from "../pages/underconstruction"
import NotFound from "../pages/404/NotFound"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "*",
    element: <NotFound />,
  }
])

export default router