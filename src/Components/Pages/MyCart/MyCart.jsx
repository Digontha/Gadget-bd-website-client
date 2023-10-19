import { useLoaderData } from "react-router-dom";


const MyCart = () => {
    const cartData = useLoaderData()
    console.log(cartData);

    return (
        <div>
          <h2 className="text-4xl text-center underline mt-10">Your cart items</h2>
           <div className="w-2/3 grid grid-cols-1 lg:grid-cols-2 mx-auto gap-10 py-10 ">
           {
                cartData.map(item => <div  key={item._id}>
                    <div className="card lg:card-side bg-base-100 shadow-xl">
                        <figure><img className="w-[400px] m-9" src={item.img} alt="Movie" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{item.name}</h2>
                            <p>${item.price}</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Delete</button>
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