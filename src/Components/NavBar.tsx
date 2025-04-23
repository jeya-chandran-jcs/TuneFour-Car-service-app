
import { Link } from 'react-router-dom'
import "../styles/Navbar.css"

export default function NavBar() {
  return (
    <div className='navbar'>
        <div className='links'>
            <Link to="/service" className='service-link'>Service</Link>
            <Link to="/product" className='product-link'>Product</Link>
            <Link to="/about" className='about-link'>About</Link>
        </div>

        <div className='title'>

            <h3 className='title-head'>
                <span style={{fontSize:"1.3rem",fontWeight:"bold"}}>✞</span>uneFour
            </h3>
        </div>

        <div className='profile'>
            <h3>Login</h3>

            <div className='profile-icon'>
                <i className="fa-solid fa-user"></i>
            </div>
        </div>
    </div>
  )
}
