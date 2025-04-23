
import "../styles/Service.css"

const services=[
    {
        id:1,
        name:"tire",
        img:"https://di-uploads-pod35.dealerinspire.com/toddwenzelbuickgmcgrandrapids/uploads/2023/03/Tire-rotation.jpg",
        cost:"₹ 800"
    },
    {
        id:2,
        name:"engine",
        img:"https://th.bing.com/th/id/OIP.YyvWu2s-waq8gEYIBTwckQHaEK?rs=1&pid=ImgDetMain",
        cost:"₹ 4000"
    },
    {
        id:3,
        name:"wash",
        img:"https://th.bing.com/th/id/OIP.U8ZJqjQs9A0uEKTs69QXlQHaEK?w=1024&h=576&rs=1&pid=ImgDetMain",
        cost:"₹ 1000"
    },
    {
        id:4,
        name:"Oil Change",
        img:"https://th.bing.com/th/id/OIP.jzDQOjk7FZynFnZbhoHBvwHaFH?rs=1&pid=ImgDetMain",
        cost:"₹ 500"
    },
    {
        id:5,
        name:"Full service",
        img:"https://th.bing.com/th/id/OIP.3PUezbgU51W5-EnboGZh0AHaFF?rs=1&pid=ImgDetMain",
        cost:"₹ 3000"
    }
]


export default function Service_card() {
  return (
    <div className='service-container'>
        {services.map((service)=>(
            <div className='card' key={service.id}>
                <img src={service.img} alt={service.name} className='card-img'/>
                <h3 >Service Name: {service.name}</h3>
                <hr />
                <p>Cost : {service.cost}</p>
                <div className='card-button'>
                    <button className='service-button'>Book a Service</button>
                </div>
            </div>
        ))}
    </div>
  )
}
