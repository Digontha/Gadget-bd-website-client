import { useState } from "react";
import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const MyCart = () => {
    const cartData = useLoaderData()
  
    const [Data,setData]=useState(cartData)

    const handleDelete=(_id)=>{
              console.log(_id);
              fetch(`http://localhost:5000/details/brand_name/id/cart/${_id}`,{
                method: 'DELETE',
              })
              .then(res=>res.json())
              .then(() =>{
                
                swal("Good job!", "Your product delete successfully!", "success");
                
                const remaining = Data.filter(item => item._id !== _id)
                        setData(remaining)
              })
    }

    return (
        <div>
          <h2 className="text-4xl text-center underline mt-10">Your cart items</h2>
           <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 py-10 ">
           {
                Data.map(item => <div  key={item._id}>
                    <div className=" lg:card-side bg-base-100 shadow-xl">
                        <figure className='h-60 m-5 '><img className=' w-fit h-full'src={item.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>${item.price}</p>
                            <div className="card-actions justify-end">
                                <button onClick={()=>handleDelete(item._id)} className="btn btn-primary">Delete</button>
                            </div>
                        </div>
                    </div>
                </div>)
            }
           </div>
        </div>
    );
};

export default MyCart;