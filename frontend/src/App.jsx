import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Placeholder routes for future pages */}
          <Route path="/login" element={<div>Login Page - Coming Soon</div>} />
          <Route path="/register/farmer" element={<div>Farmer Registration - Coming Soon</div>} />
          <Route path="/register/buyer" element={<div>Buyer Registration - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
