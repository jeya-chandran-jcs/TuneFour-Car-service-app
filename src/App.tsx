import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Home from './pages/Home'
import Service_card from './Components/Service_card'
import Profile from './Components/Profile'
import Product from './Components/Product'
import About from './Components/About'

function App() {

  return (
    <Router>
      <Routes>
        
        <Route path="/" element={<Home />}>
          <Route index element={<Profile />}/>
          <Route path="service" element={<Service_card />}/>
          <Route path="product" element={<Product/>}/>
          <Route path="about" element={<About/>}/>
        </Route>
       
      </Routes>
    </Router>
  )
}

export default App
