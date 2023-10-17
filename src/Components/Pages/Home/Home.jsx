import { useLoaderData } from "react-router-dom";
import Footer from "../Footer";
import Banner from "./HomeElements/Banner";
import OurBrand from "./HomeElements/OurBrand";
import OurFeatures from "./HomeElements/OurFeatures";
import OurWroker from "./HomeElements/OurWroker";



const Home = () => {
    const data = useLoaderData()

    return (
        <div>
            <Banner></Banner>
            <OurBrand data={data}></OurBrand>
            <OurFeatures></OurFeatures>
            <OurWroker></OurWroker>
            <Footer></Footer>
        </div>
    );
};

export default Home;