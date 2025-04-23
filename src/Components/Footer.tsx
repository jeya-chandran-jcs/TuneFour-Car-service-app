
import "../styles/Footer.css"

export default function Footer() {
  return (
    <div className='footer'>
       <div className='footer-1'>
            <h3>TuneFour</h3>
            <p>Your trusted partner for car tuning, servicing, and performance upgrades.</p>
            <p>Madurai, Tamil Nadu, India</p>
        </div>

        <div className='footer-2'>
        <ul>
            <li><a href='#'>Home</a></li>
            <li><a href='#'>Services</a></li>
            <li><a href='#'>Product</a></li>
            <li><a href='#'>About</a></li>
        </ul>
        </div>

        <div className='footer-3'>
            <a href='#' target='_blank'>Facebook</a>
            <a href='#' target='_blank'>Instagram</a>
            <a href='#' target='_blank'>Twitter</a>
        </div>

    </div>
  )
}
