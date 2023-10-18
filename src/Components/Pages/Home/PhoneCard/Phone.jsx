
import { useLoaderData } from 'react-router-dom';
import React, { useEffect } from 'react';
import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';



const Phone = () => {
  const data = useLoaderData()

  console.log(data);

  const SimpleSlider = () => {
    useEffect(() => {
      // Initialize the Splide slider
      new Splide('.splide', {
        type: 'slide',
        perPage: 1,
        autoplay: true,
        pauseOnHover: true,
      }).mount();
    }, []);
  }





  return (
    <>
    {
      data.map(item=><>
      
      <div className='flex  justify-center items-center lg:h-[70vh] mt-20'>
        <div className="splide">
          <div className="splide__track">
            <ul className="splide__list">
              <li className="splide__slide">
                <div>
                  <div className="card lg:card-side bg-base-100 shadow-xl">
                    <figure className='h-60 m-5'><img className='w-full h-full' src={item.photo} alt="Album" /></figure>
                    <div className="card-body">
                      <h2 className="card-title">{item.name}</h2>
                      <p>{item.price}</p>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      </>)
    }
     
      <SimpleSlider />
    </>
  );
};

export default Phone;