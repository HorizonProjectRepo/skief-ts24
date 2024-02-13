import { RouterProvider } from "react-router-dom";
import router from "./routes/routes.jsx";
import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home.jsx';


function App() {
  return (
    <div>
      {/* <div className="max-w-5xl mx-auto text-white">
        <Home />
      </div>
      <ToastContainer /> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
