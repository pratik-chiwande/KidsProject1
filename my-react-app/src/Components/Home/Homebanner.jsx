import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router';
import myimg1  from '../src/assets/Img/banner_01.jpg'
import myimg2  from '../src/assets/Img/banner_02.jpg'
import myimg3  from '../src/assets/Img/banner_03.jpg'
import './Home.css';

function Homebanner() {
    return (
        <>
            <section  id='Homebanner' className="section-notch">
                <Carousel data-bs-theme="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={myimg1}
                            alt="First slide"
                        />
                        <Carousel.Caption className='text-start'>
                            <h3 className='font-36 fw-bold animate__animated animate__slideInUp'>Welcome to KidsAcademy</h3>
                            <h1 className='font-66 fw-bold animate__animated animate__slideInUp animate__slow'>Best For Education</h1>
                            <p className='pb-3 animate__animated animate__slideInUp text-white'>Monotonely principle centered ahitectures through and standards <br /> magnetic  metrics whereas
                                cross functional products..</p>
                            <div className='animate__animated animate__slideInUp animate__slower'>
                                <Link to='/' className='bg-purple link-1'>Read more</Link>
                                <Link to='/' className='bg-yellow link-2'>Buy Now</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={myimg1}
                            alt="Second slide"
                        />
                        <Carousel.Caption className='text-start'>
                            <h3 className='font-36 fw-bold animate__animated animate__slideInUp'>Welcome to KidsAcademy</h3>
                            <h1 className='font-66 fw-bold animate__animated animate__slideInUp animate__slow'>Best For Education</h1>
                            <p className='pb-3 animate__animated animate__slideInUp text-white'>Monotonely principle centered ahitectures through and standards <br /> magnetic  metrics whereas
                                cross functional products..</p>
                            <div className='animate__animated animate__slideInUp animate__slower'>
                                <Link to='/' className='bg-purple link-1'>Read more</Link>
                                <Link to='/' className='bg-yellow link-2'>Buy Now</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100 img-fluid"
                            src={myimg3}
                            alt="Third slide"
                        />
                        <Carousel.Caption className='text-start'>
                            <h3 className='font-36 fw-bold animate__animated animate__slideInUp'>Welcome to KidsAcademy</h3>
                            <h1 className='font-66 fw-bold animate__animated animate__slideInUp animate__slow'>Best For Education</h1>
                            <p className='pb-3 animate__animated animate__slideInUp text-white'>Monotonely principle centered ahitectures through and standards <br /> magnetic  metrics whereas
                                cross functional products..</p>
                            <div className='animate__animated animate__slideInUp animate__slower'>
                                <Link to='/' className='bg-purple link-1'>Read more</Link>
                                <Link to='/' className='bg-yellow link-2'>Buy Now</Link>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </section>
        </>
    )
}

export default Homebanner