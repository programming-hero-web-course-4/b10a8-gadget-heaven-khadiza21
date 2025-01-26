
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../components/Shared/Footer/Footer";
import HeaderNavBar from "../components/Shared/HeaderNavBar/HeaderNavBar";


const Main = () => {
    const location = useLocation();
    const hideHeaderFooter = ["/404","*"];
    const shouldHideHeaderFooter = hideHeaderFooter.includes(location.pathname);
    return (
        <div>
            {!shouldHideHeaderFooter && <HeaderNavBar />}
            <Outlet />
            {!shouldHideHeaderFooter && <Footer />}

        </div>
    );
};

export default Main;