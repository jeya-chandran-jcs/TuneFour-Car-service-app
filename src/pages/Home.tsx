
import NavBar from '../Components/NavBar'

import Footer from '../Components/Footer'
import { Outlet } from 'react-router-dom'

export default function Home() {
    return (
        <div style={{ width: "100%", height: "100vh", display: "flex", flexDirection: "column" }}>
            <NavBar />
             <Outlet />
            <Footer />
        </div>
    )
}

