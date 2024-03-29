import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/zyler_is_here/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App
