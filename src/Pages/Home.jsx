
import HeroBanner from "../components/Hero/HeroBanner";
import Gadgets from "../components/Gadgets/Gadgets";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";


const Home = () => {
  const location = useLocation();
  return (
    <>
      <div
        className={`p-4 ${location.pathname === "/"
          ? "bg-green-200"
          : "bg-blue-200"
          }`}
      >
        <h1 className="text-2xl font-bold">Welcome to Home Page</h1>
        <p>This is the home page with a unique background color!</p>
      </div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Gadget Heaven | Home</title>

      </Helmet>
      <HeroBanner />
      <Gadgets />
    </>
  );
};

export default Home;