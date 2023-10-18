import { useLoaderData } from "react-router-dom";
import swal from "sweetalert";


const Update = () => {

    const data = useLoaderData()
    console.log(data);

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        const form = e.target
        const name = form.name.value;
        const brand_name = form.brand.value;
        const type = form.type.value;
        const price = form.price.value;
        const description = form.description.value;
        const rating = form.rating.value;
        const img = form.img.value;

        const allProduct = { name, brand_name, type, price, description, rating, img };
        console.log(allProduct);
         
        fetch(`http://localhost:5000/product/brand_name/${data._id}`,{
            method:"PUT",
            headers:{
                "content-type": "application/json"
            },
            body:JSON.stringify(allProduct)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                swal("Good job!", "You update successfully", "success");
                
            }
        })

    }

    return (
        <div className="lg:w-[50%] mx-auto mt-10 bg-[#F4F3F0] p-20" >

            <div className="">
                <h1 className="btn btn-success">Update your product</h1>
            </div>

            <div className="mt-10">
                <form onSubmit={handleUpdateProduct}>

                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" defaultValue={data.name} placeholder="name" name="name" className="input input-bordered w-full " />
                        <select name="brand" className="select w-full max-w-xs">
                            <option disabled selected>Pick a brand</option>
                            <option value="Apple">Apple</option>
                            <option value="Samsung">Samsung</option>
                            <option value="Xiaomi">Xiaomi</option>
                            <option value="Infinix">Infinix</option>
                            <option value="itel">itel</option>
                            <option value="Symphony">Symphony</option>
                         
                        </select>

                    </div>

                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" defaultValue={data.type} placeholder="type" name="type" className="input input-bordered w-full " />
                        <input type="text" defaultValue={data.price} placeholder="price" name="price" className="input input-bordered w-full " />
                    </div>
                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" defaultValue={data.description} placeholder="description" name="description" className="input input-bordered w-full " />
                        <input type="text" defaultValue={data.rating} placeholder="rating" name="rating" className="input input-bordered w-full " />
                    </div>

                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" defaultValue={data.img} placeholder="photo URL" name="img" className="input input-bordered w-full " />
                    </div>
                    <button className="btn btn-neutral btn-block">Update</button>
                </form>
            </div>

        </div>
    );
};

export default Update;