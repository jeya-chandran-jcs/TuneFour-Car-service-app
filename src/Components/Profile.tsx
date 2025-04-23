import  { useState } from 'react'
import "../styles/Profile.css"

const carImg=[
    {
        id:1,
        img:"https://static.vecteezy.com/system/resources/previews/019/612/564/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png"
    },{
        id:2,
        img:"https://purepng.com/public/uploads/large/purepng.com-ford-gt-blue-super-carcarvehicletransportford-961524642104to3de.png"
    },
    {
        id:3,
        img:"https://static.vecteezy.com/system/resources/previews/019/068/311/non_2x/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png"
    },
    {
        id:4,
        img:"https://www.pngmart.com/files/22/Supercar-PNG-Isolated-File.png"
    },
    {
        id:5,
        img:"https://static.vecteezy.com/system/resources/previews/019/068/281/original/sport-car-isolated-on-transparent-background-3d-rendering-illustration-free-png.png"
    }
]




export default function Profile() {
    const [data,setData]=useState<string>("https://th.bing.com/th/id/R.aed8b217fe833519710116ff6420906c?rik=2SiImYVmotp6BA&riu=http%3a%2f%2fpngimg.com%2fuploads%2fMclaren%2fMclaren_PNG37.png&ehk=IjHC7GZFOqnOhnuUKzuFOI9HuUKCaSn9r3jibv7KZn0%3d&risl=&pid=ImgRaw&r=0")
        
const handleImge=(id:string)=>{
    setData(id)
}
    return (
    <div className='profile-container'>

        <div className='profile-title'><h1>TuneFour</h1></div>
        
        <div className='profile-card'>
        
            <div className='left-content'>
                <h2>Your One-Stop Car Tuning & Service Hub</h2>
                <p>
                    Whether it’s a quick wash, a full engine tune-up, or premium performance mods —
                    we’ve got your ride covered.
                </p>
                <ul>
                    <li>✔ Expert Mechanics</li>
                    <li>✔ Affordable Packages</li>
                    <li>✔ 24/7 Support</li>
                </ul>
                <button className='submit-button'>Book Your Service!</button>
            </div>

            <div className='right-content'>
                <img className='profile-img' src={data} alt='name'/>
            </div>
        
        </div>

        <div className='profile-carousel'>
            <div className='carousel-image'>
            {carImg.map((car)=>(
                <img src={car.img} key={car.id} alt="car name" className='carousel' onClick={()=>handleImge(car.img)}/>
            ))}
            </div>
        </div>
        
    </div>
  )
}
