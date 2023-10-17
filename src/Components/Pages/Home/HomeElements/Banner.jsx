

const Banner = () => {
    const BgIMG = {
        backgroundImage: `url('https://i.ibb.co/xsHhgSy/mobileBD.webp')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',


    }


    return (
        <div className="hero h-[80vh] " style={BgIMG}>
            <div className="hero-content">
                <div className="  p-3 rounded-xl ">
                    <h1 className="md:text-5xl font-bold text-orange-800 ">Feel free to Shopping<br /> with us....</h1>
                    <p className="py-6 md:text-2xl text-white font-bold ">Have A GOOD DAY</p>
                </div>
            </div>
        </div>
    );
};

export default Banner;