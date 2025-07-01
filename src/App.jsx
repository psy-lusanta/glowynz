import FacialServices from './pages/FacialServices'
import Home from './pages/Home'
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Navbar from './components/Navbar'

function App() {
  return (
    <>
      <div>
        <Navbar />
      </div>
      <main className="facial-services">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </main>
    </>
  )
}

export default App
