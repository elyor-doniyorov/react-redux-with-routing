import logo from './logo.svg';
import './App.css';
import { HomePage } from './containers/HomePage/index';
import { UserPage } from './containers/UserPage/index';
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/user" element={<UserPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
