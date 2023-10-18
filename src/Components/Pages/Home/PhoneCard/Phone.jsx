
import { useLoaderData } from 'react-router-dom';
;
import PhoneCard from './PhoneCard';



const Phone = () => {

  const data = useLoaderData()
  console.log(data);








  return (
    <>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/R.a205972f4f87a7b787f648ff55049889?rik=7Ymt%2bOxSB%2fTR1w&pid=ImgRaw&r=0" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide4" className="btn btn-circle">❮</a>
            <a href="#slide2" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src="https://www.tvadsongs.uk/wp-content/uploads/iphone-12-pro-5g-advert-8211-the-most-powerful-iphone-ever-yO191CBy7GI.jpg" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">❮</a>
            <a href="#slide3" className="btn btn-circle">❯</a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src="https://th.bing.com/th/id/OIP.cdVQronqJpg4qjs24p2H4AHaDe?pid=ImgDet&w=1280&h=600&rs=1" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">❮</a>
            <a href="#slide4" className="btn btn-circle">❯</a>
          </div>
        </div>
      </div>

      <div className='grid lg:grid-cols-2 grid-cols-1 md:grid-cols-1 gap-10 w-2/3 mx-auto'>

        {
          data.map(items => <PhoneCard key={items._id} item={items}></PhoneCard>)
        }
      </div>

    </>
  );
};

export default Phone;