import { Button, Container } from 'react-bootstrap';
import banner from '../../assets/banner.jpg'

const HeroBanner = () => {
    return (
        <>
            <div className='py-5' style={{ backgroundColor: '#9538E2' }}>
                <Container className='pb-5'>
                    <div className='text-center text-light py-5 mb-5'>
                        <h1 className='fw-bold pt-5 pb-3'>Upgrade Your Tech Accessorize with Gadget Heaven Accessories</h1>
                        <p className='pb-3'>Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all! Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
                        <Button className='bg-light fw-bold border-0 mb-5' style={{ color: '#9538e2', borderRadius: '24px' }}>Shop Now</Button>
                    </div>
                </Container>
            </div>



            <div>
                <Container style={{marginTop:'-200px'}}>
                    <div className=' rounded'  style={{height:'612px', border:'2px solid white'}}>    <img className='img-fluid h-100 w-100 p-4 ' style={{backgroundColor:'rgba(255, 255, 255, 0.432)'}}  src={banner} alt="" /></div>
                </Container>
            </div>
        </>
    );
};

export default HeroBanner;