import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';

function Homeabout() {
    return (
        <>
            <section className='Homeabout section-notch mb-50 '>
                <div className='overlay p-120 '>
                    <Container >
                        <Row>
                            <Col lg={6}>
                                <img src="../src/assets/Img/about.png" alt="about " className='img-fluid' />
                            </Col>
                            <Col lg={6} className=' text-center mt-5 text-lg-start mt-lg-0 '>
                                <h2 className='fw-bold h1'>About Our KidsAcademy</h2>
                                <p>Enthusiasticay diseminate competitive oportunitie through transparent an actions Compelngly seize viral schemas through intermandated creative is adiea sources. Enthusiasticay plagiarize clientcentered relationship for the covalent experiences. Distinctively architect 24/365 service for wireless is ebusiness ahosfluorescently Efficiently comunicate coperative methods of empowerment awesome athrough Monotonectaly myocardinate cross and functional niche markets and an functional.</p>

                                <div>
                                    <Link to='/about' className=" fw-bold fst-italic bg-purple text-white px-4 py-3">Read More</Link>
                                    <Link to='/' className="fst-italic fw-bold bg-yellow m-3 text-white px-4 py-3">Buy Now</Link>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Homeabout