
import HeroBanner from "../components/Hero/HeroBanner";
import Gadgets from "../components/Gadgets/Gadgets";
import { Helmet } from "react-helmet";


const Home = () => {

  return (
    <>
      <Helmet> <title>Gadget Heaven | Home</title> </Helmet>
      <HeroBanner />
      <Gadgets />
    </>
  );
};

export default Home;