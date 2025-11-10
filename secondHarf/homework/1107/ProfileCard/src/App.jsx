import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import ProfileCard from './ProfileCard'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<ProfileCard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
