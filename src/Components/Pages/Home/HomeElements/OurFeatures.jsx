import {  FaFan, FaFirefoxBrowser,  FaMobile, FaMoneyBill, FaProductHunt } from 'react-icons/fa';
import {  AiFillAlert} from 'react-icons/ai';

const OurFeatures = () => {
    return (
        <div className='py-10 w-[90%] mx-auto'>

                 <h1 className='font-extrabold text-red-400 text-4xl text-center underline py-6'>Our Features</h1>
                <div className='grid lg:grid-cols-2 lg:w-2/3 mx-auto md:grid-cols-2 grid-cols-1'>
                <div className='m-5  bg-red-500 lg:w-[500px] p-10 rounded-xl'>
                        <FaMobile className='text-5xl'></FaMobile>
                       <h1 className='text-2xl font-semibold'>Wide Selection of Mobile Devices</h1>
                 </div>
                 <div className='m-5  bg-orange-300 lg:w-[500px] p-10  rounded-xl'>
                      <FaFan className='text-5xl'></FaFan>
                       <h1 className='text-2xl font-semibold'>User-Friendly Navigation and Filters</h1>
                 </div>
                 <div className='m-5  bg-yellow-300 lg:w-[500px] p-10  rounded-xl'>
                       <FaProductHunt className='text-5xl'></FaProductHunt>
                       <h1 className='text-2xl font-semibold'>Detailed Product Descriptions and Specifications</h1>
                 </div>
                 <div className='m-5  bg-gray-300 lg:w-[500px] p-10  rounded-xl'>
                     <FaMoneyBill className='text-5xl'></FaMoneyBill>
                       <h1 className='text-2xl font-semibold'>Secure Online Transactions and Payment Options</h1>
                 </div>
                 <div className='m-5  bg-blue-300 lg:w-[500px] p-10  rounded-xl'>
                     <FaFirefoxBrowser className='text-5xl'></FaFirefoxBrowser>
                       <h1 className='text-2xl font-semibold'>Responsive Design for Mobile Browsing</h1>
                 </div>
                 <div className='m-5  bg-purple-300 lg:w-[500px] p-10  rounded-xl'>
                     <AiFillAlert className='text-5xl'></AiFillAlert>
                       <h1 className='text-2xl font-semibold'>Deals and Promotions Alerts</h1>
                 </div>
                </div>

        </div>
    );
};

export default OurFeatures;