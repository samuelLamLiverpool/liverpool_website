import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Vedio from './pages/Vedio'
import NavigationBar from './component/NavigationBar'

const App = () => {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Vedio />} />
      </Routes>
    </Router>
  )
}

export default App
