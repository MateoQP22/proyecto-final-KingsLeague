import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import './App.css';
import { store } from "./redux/store";
import { primaryRoutes } from './routes/PrimaryRoutes';

function App() {
  return (
    <>
    <Provider store={store}>
      <RouterProvider router={primaryRoutes} />
    </Provider>
    </>
  )
}

export default App
