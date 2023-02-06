import './App.css'
import { RouterProvider } from "react-router-dom";
import { primaryRoutes } from './routes/PrimaryRoutes'

function App() {
  return (
      <RouterProvider router={primaryRoutes} />
  )
}

export default App
