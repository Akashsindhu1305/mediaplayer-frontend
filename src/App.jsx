import './App.css'
import Header from './components/Header'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import Home from './pages/Home'
import WatchHistory from './pages/WatchHistory'
import Footer from './components/Footer'

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<LandingPage/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/watchhistory' element={<WatchHistory/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
