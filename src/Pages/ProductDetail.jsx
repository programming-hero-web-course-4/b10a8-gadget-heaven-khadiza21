import { Helmet } from "react-helmet";
import GadgetsDetail from "../components/Gadgets/GadgetsDetail";


const ProductDetail = () => {
    return (
        <div>
            <Helmet> <title>Gadget Heaven | Details</title> </Helmet>
            <GadgetsDetail />
        </div>

    );
};

export default ProductDetail;