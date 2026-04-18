import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlasses, faHouseChimney, faLandmark, faLocationArrow, faMicrophone } from '@fortawesome/free-solid-svg-icons';

import { faUser } from '@fortawesome/free-regular-svg-icons';
import '../About.css'

import { Container, Row, Col } from 'react-bootstrap'

function WhyChoose() {
    return (
        <>
            <section className='whychoose '>
                <Container>
                    <Row className='mt-5 py-5'>
                        <Col lg={8} className='text-center fw-bold mx-auto'>
                            <h1 className='text-purple'>Why Choose KidsAcademy</h1>
                            <p className=''>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                        </Col>
                    </Row>

                    <Row>
                        <Col lg={4} xs={12}>
                            <div className="choose-left">
                                <div className="choose-item">
                                    <div className='icon bg-yellow text-white'>
                                        <FontAwesomeIcon icon={faUser} />
                                    </div>
                                    <div className='choose-content'>
                                        <h4 className='text-yellow'>Expert Teachers</h4>
                                        <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className='icon bg-orange text-white'>
                                        <FontAwesomeIcon icon={faLandmark} />
                                    </div>
                                    <div className='choose-content'>
                                        <h4 className='text-orange'>Multimedia Class</h4>
                                        <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className='icon bg-lightblue text-white'>
                                        <FontAwesomeIcon icon={faMicrophone} />
                                    </div>
                                    <div className='choose-content'>
                                        <h4 className='text-lightblue'>Music And Art Class</h4>
                                        <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                        <Col lg={4} xs={12}>
                            <img src={'../src/assets/Img/feature-about.jpg'} alt='' className='img-fluid'/>
                        </Col>
                        <Col lg={4} xs={12}>
                            <div className="choose-right">
                                <div className="choose-item">
                                    <div className='icon bg-red text-white'>
                                        <FontAwesomeIcon icon={faHouseChimney} />
                                    </div>
                                    <div className='choose-content'>
                                        <h4 className='text-red'>Expert Teachers</h4>
                                        <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className='icon bg-purple text-white'>
                                        <FontAwesomeIcon icon={faGlasses} />
                                    </div>
                                    <div className='choose-content'>
                                        <h4 className='text-purple'>Multimedia Class</h4>
                                        <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                    </div>
                                </div>
                                <div className="choose-item">
                                    <div className='icon bg-pink text-white'>
                                        <FontAwesomeIcon icon={faLocationArrow} />
                                    </div>
                                    <div className='choose-content'>
                                        <h4 className='text-pink'>Music And Art Class</h4>
                                        <p>Distinctively enhance empowered and alignments without leveraged architectures professionly.</p>
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default WhyChoose