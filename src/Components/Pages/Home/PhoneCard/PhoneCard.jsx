import Rating from "react-rating";
import { Link } from "react-router-dom";



const PhoneCard = ({ item }) => {
  console.log(item);
  const { name, brand_name, price, type, rating, img } = item || {};

  console.log(name, brand_name, price, type, rating, img);

  return (
    <>
    

      <div className="card bg-base-100 shadow-xl">
        <figure  className='h-60 m-5'><img className='w-full h-full' src={img} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{brand_name}</h2>
          <p>{name}</p>
          <p>{price}</p>
          <p>{type}</p>
          <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
            <Rating
              initialRating={rating}
              className="text-red-400"
              readonly
              emptySymbol={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>

              }
              fullSymbol={<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
              </svg>
              }
            />
          </p>
          <div className="">
            <Link><button className="btn btn-primary w-full">Add to cart</button></Link>
          </div>
        </div>
      </div>

    </>
  );
};

export default PhoneCard;