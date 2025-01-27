import { Helmet } from "react-helmet-async";
import HeroBanner from "../components/Hero/HeroBanner";
import Gadgets from "../components/Gadgets/Gadgets";


const Home = () => {
    return (
       <>
       <Helmet>
        <title>Home | Home</title>
      </Helmet>
      <HeroBanner />
      <Gadgets />
       </>
    );
};

export default Home;