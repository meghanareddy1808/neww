import logo from './logo.svg';
import './App.css';
import Signup from './screens/Home';
import Login from './screens/Login';
import Home from './screens/Home';
import Counselling from './screens/Counselling';
import LanguageSelector from './screens/LanguageSelector';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div>
        <header>
          <h1>Your Application</h1>
          <LanguageSelector />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counselling" element={<Counselling />} />
          {/* Add other routes here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
