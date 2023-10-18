import { useLoaderData } from "react-router-dom";


const PhoneDetails = () => {
    const data = useLoaderData()
    console.log(data);

    return (
        <div className="lg:w-[600px] mx-auto py-10">
            
              
                    <div className=" lg:card-side bg-white shadow-2xl ">
                        <figure><img className="lg:w-full" src={data.img} alt="Album" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{data.name}</h2>
                            <p>{data.description}</p>
                            <p>${data.price}</p>
                            <div className="card-actions">
                                <button className="btn btn-success w-full">Add to cart</button>
                            </div>
                        </div>
                    </div>

               
            
        </div>
    );
};

export default PhoneDetails;