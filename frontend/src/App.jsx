import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Profile from './pages/Profile'
import ViewAllActivity from './pages/ViewAllActivity'
import Marketplace from './pages/Marketplace'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/view-all-activity" element={<ViewAllActivity />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* Placeholder routes for future pages */}
          <Route path="/dashboard" element={<div>Dashboard - Coming Soon</div>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
