import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './componenets/Home'
import About from './componenets/About'
import Services from './componenets/Services'
import Contact from './componenets/Contact'
import NavBar from './componenets/Navbar'

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
