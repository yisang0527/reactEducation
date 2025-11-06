import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeWork from './page/HomeWork'

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomeWork />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
