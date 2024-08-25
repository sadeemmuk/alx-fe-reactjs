import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './component/Home'
import About from './component/About'
import Services from './component/Services'
import Contact from './component/Contact'
import NavBar from './component/Navbar'

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
