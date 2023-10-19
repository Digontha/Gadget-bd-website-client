
import { useLoaderData, useParams } from 'react-router-dom';

import PhoneCard from './PhoneCard';
import { useEffect, useState } from 'react';



const Phone = () => {

  const [adData,setAdData]=useState([])

 const [filter,setFilter]=useState()
  const data = useLoaderData()


  const id = useParams()
 
  

 useEffect(()=>{
        fetch("/data.json")
        .then(res => res.json())
        .then(Data => setAdData(Data))

        
 },[])

 
useEffect(()=>{
  const filter = adData.filter(item=>item.brand==id.brand)
  setFilter(filter);
},[adData,id.brand])





  return (
    <>
   
    {
      filter?.map((i,inx) => <div key={inx}>
                   <div className="carousel h-[80vh] w-full">
        <div id="slide1" className="carousel-item relative w-full ">
          <img src={i.adImg_1} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={i.adImg_2} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={i.adImg_3} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      </div>)
    }
  
      

      <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-10 w-2/3 mx-auto'>

        {
         data.length? data.map(items => <PhoneCard key={items._id} item={items}></PhoneCard>) : <div className='lg:text-5xl text-center py-10 font-bold'>No Product Available</div>
        }

      </div>

    </>
  );
};

export default Phone;