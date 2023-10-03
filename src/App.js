import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes, Redirect  } from 'react-router-dom';
import InitialRoute from './components/InitialRoute';

function App() {
  return (
    <div>
      <Navbar/>
      <Router>
        <Routes>
        <Route path="/" element={<InitialRoute></InitialRoute>} />
          <Route path="/page/:page" element={<Home></Home>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
