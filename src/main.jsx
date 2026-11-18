
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { router } from "../src/Route/Routing"

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
