import { ToastContainer } from 'react-toastify';
import './App.css';
import Home from './pages/Home';


function App() {
  return (
    <div>
      <div className="max-w-5xl mx-auto text-white">
        <Home />
      </div>
      <ToastContainer />
    </div>
  );
}

export default App;
