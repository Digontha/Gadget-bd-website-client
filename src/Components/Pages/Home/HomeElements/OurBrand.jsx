
import { useState } from "react";
import { Link } from "react-router-dom";



const OurBrand = ({ data }) => {
  
    const [singleData,setSingleData] = useState([])
 console.log(singleData);
    const handleData = (e) => {
        const brandElement = e.target.closest('.card').querySelector('h2');
        const brandName = brandElement.innerText;
        console.log(brandName);

        const filterData = data?.filter(item => item.brand == brandName)
        setSingleData(filterData);
    }

    return (
        <>
            <h1 className="font-extrabold text-red-400 text-4xl text-center underline py-6">Our Brand</h1>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-10">
                <Link>
                    <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                        <figure className='h-60 m-5'><img className='w-full h-full' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQDzU4v3AvJch6O-8qHSGTknrLoc_SUKDoNA&usqp=CAU" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="font-extrabold text-xl text-center">Apple</h2>
                        </div>
                    </div>
                </Link>

               <Link >
               <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                    <figure className='h-60 m-5'><img className='w-full h-full' src="https://images.samsung.com/is/image/samsung/assets/bd/about-us/brand/logo/mo/256_144_4.png?$512_N_PNG$" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-extrabold text-xl text-center">Samsung</h2>
                    </div>
                </div>
               </Link>

                <Link >
                <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                    <figure className='h-60 m-5'><img className='w-full h-full' src="https://assets.mspimages.in/gear/wp-content/uploads/2017/11/Xiaomi.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-extrabold text-xl text-center">xiaomi</h2>
                    </div>
                </div>
                
                </Link>

                <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                    <figure className='h-60 m-5'><img className='w-full h-full' src="https://static.vecteezy.com/system/resources/previews/020/927/331/original/infinix-brand-logo-phone-symbol-name-black-design-china-mobile-illustration-with-green-background-free-vector.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-extrabold text-xl text-center">infinix</h2>
                    </div>
                </div>
                <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                    <figure className='h-60 m-5'><img className='w-full h-full' src="https://assets.gadgets360cdn.com/pricee/assets/brand/og_itel_logo.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-extrabold text-xl text-center">itel</h2>
                    </div>
                </div>
                <div onClick={handleData} className="card card-compact  bg-base-100 shadow-xl">
                    <figure className='h-60 m-5'><img className='w-full h-full' src="https://www.tdc.org/app/uploads/2021/05/TDC67_001C_10-600x400.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-extrabold text-xl text-center">symphony</h2>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurBrand;