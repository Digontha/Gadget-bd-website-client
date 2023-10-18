

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";



const OurBrand = ({ data }) => {

    const [singleData, setSingleData] = useState([])
    const [items, setItem] = useState([])

    console.log(singleData);
    const handleData = (e) => {
        const brandElement = e.target.closest('.card').querySelector('h2');
        const brandName = brandElement.innerText;
        console.log(brandName);

        const filterData = data?.filter(item => item.brand.toLowerCase().includes(brandName.toLowerCase()));
        setSingleData(filterData);
    }



    useEffect(() => {
            fetch("data.json")
            .then(res => res.json())
            .then(data => setItem(data))
    }, [])



    return (
        <>
            <h1 className="font-extrabold text-red-400 text-4xl text-center underline py-6">Our Brand</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                {
                    items.map(item => <>
                        <Link to={`/${item.brand_name}`}>
                            <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                                <figure className='h-60 m-5'><img className='w-full h-full' src={item.image_url} alt="Shoes" /></figure>
                                <div className="card-body">
                                    <h2 className="font-extrabold text-xl text-center">{item.brand_name}</h2>
                                </div>
                            </div>
                        </Link>
                    </>)
                }
            </div>
        </>
    );
};

export default OurBrand;