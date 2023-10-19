import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const PhoneDetails = () => {
    const allData = useLoaderData()
    

    const handleCart = () =>{
        
    fetch(`http://localhost:5000/details/brand_name/id/cart`,{
        
    method:"POST",
    headers:{
        "content-type": "application/json",
    },
    body: JSON.stringify(allData),

    })
    .then(res=>res.json())
    .then(() =>{
        
        swal("Good job!", "Your product add to cart successfully!", "success");
    })
    }

    
    return (
        <div className="lg:w-[600px] mx-auto py-10">
            
              
                    <div className=" lg:card-side bg-white shadow-2xl ">
                        <figure className='h-60 m-5'><img className='w-fit h-full' src={allData.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{allData.name}</h2>
                            <p>{allData.description}</p>
                            <p>${allData.price}</p>
                            <div className="card-actions">
                                <button onClick={handleCart} className="btn btn-success w-full">Add to cart</button>
                            </div>
                        </div>
                    </div>

               
            
        </div>
    );
};

export default PhoneDetails;