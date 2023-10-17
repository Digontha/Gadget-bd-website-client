import Footer from "../Footer";
import Banner from "./HomeElements/Banner";
import OurBrand from "./HomeElements/OurBrand";
import OurFeatures from "./HomeElements/OurFeatures";
import OurWroker from "./HomeElements/OurWroker";



const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurBrand></OurBrand>
            <OurFeatures></OurFeatures>
            <OurWroker></OurWroker>
            <Footer></Footer>
        </div>
    );
};

export default Home;