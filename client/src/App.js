import logo from './logo.svg';
import './App.css';
import Signup from './screens/Home';
import Login from './screens/Login';
import Home from './screens/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Add other routes here */}
    </Routes>
  </Router>
  );
}

export default App;
