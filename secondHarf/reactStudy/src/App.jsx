import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
// 컴포넌트 import
import MainMenu from './Component/MainMenu'
import Info from './Component/study1/Info'
import Board from './Component/study1/Board'
import Member from './Component/study1/Member'
import Store from './Component/study1/Store'
import Schedule from './Component/study2/Schedule'
import Student from './Component/study2/Student'
import Memo from './Component/study2/Memo'
import BoardMng from './Component/study2/BoardMng'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<MainMenu />} />
        <Route path='/propstate' element={<Info />} />
        <Route path='/boardMake' element={<Board />} />
        <Route path='/member' element={<Member />} />
        <Route path='/store/*' element={<Store />} />
        <Route path='/schedule' element={<Schedule />} />
        <Route path='/studentname' element={<Student />} />
        <Route path='/simplememo' element={<Memo />} />
        <Route path='/boardMng/*' element={<BoardMng />} />
      </Routes>
    </Router>
  )
}

export default App
