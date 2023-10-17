
const AddProduct = () => {

    const handleAddProduct =(e)=>{
        e.preventDefault();
        const form=e.target
        const name=form.name.value;
        const brand=form.brand.value;
        const type=form.type.value;
        const price=form.price.value;
        const description = form.description.value;
        const rating=form.rating.value;
        const photo=form.photo.value;
        const allProduct= {name, brand, type, price, description, rating, photo};
        console.log(allProduct);
   
    }
    return (
        <div className="lg:w-[50%] mx-auto mt-10 bg-[#F4F3F0] p-20" >
        
            <div className="">
                <h1 className="btn btn-success">Add your product</h1>
            </div>

            <div className="mt-10">
                <form onSubmit={handleAddProduct}>

                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" placeholder="name" name="name" className="input input-bordered w-full " />
                        <input type="text" placeholder="brand name" name="brand" className="input input-bordered w-full " />
                    </div>

                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" placeholder="type" name="type" className="input input-bordered w-full " />
                        <input type="text" placeholder="price" name="price" className="input input-bordered w-full " />
                    </div>
                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" placeholder="description" name="description" className="input input-bordered w-full " />
                        <input type="text" placeholder="rating" name="rating" className="input input-bordered w-full " />
                    </div>

                    <div className="lg:flex gap-4 mb-5">
                        <input type="text" placeholder="photo URL" name="photo" className="input input-bordered w-full " />
                    </div>
                    <button className="btn btn-neutral btn-block">Add product</button>
                </form>
            </div>

        </div>
    );
};

export default AddProduct;