import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Contact from './components/Contact'
import NavBar from './components/Navbar'

function App() {
 
  return (
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<NavBar />}>
  <Route index element={<Home />} />
  <Route path='/about' element={<About />} />
  <Route path='/services' element={<Services />} />
  <Route path='/contact' element={<Contact />} />
  </Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App
