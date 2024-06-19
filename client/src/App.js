import logo from './logo.svg';
import './App.css';
import Signup from './screens/Home';
import Login from './screens/Login';
import Home from './screens/Home';
import Counselling from './screens/Counselling';
import LanguageSelector from './screens/LanguageSelector';
import Forum from './screens/Forum';
import Navbar from './screens/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <header>
          <LanguageSelector />
          <Navbar/>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counselling" element={<Counselling />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forums" element={<Forum />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
