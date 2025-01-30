import { Container } from "react-bootstrap";
import Service from "../components/Service/Service";
import Contact from "../components/Contact/Contact";

const About = () => {
   
    return (
        <div>
            <div className="py-5" style={{ backgroundColor: '#9538E2' }}>
                <Container>
                    <h2 className="text-center text-light ">About</h2>
                    <p className="text-center text-light  ">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!.</p>
                </Container>
               
            </div>

            <Service />
            <Contact />
           
        </div>
    );
};

export default About;