import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlassPlus } from '@fortawesome/free-solid-svg-icons';


import { Link } from 'react-router'

const saved = [
    {
        img: 'Img/gallery_01.jpg'
    },
    {
        img: 'Img/gallery_02.jpg'
    },
    {
        img: 'Img/gallery_03.jpg'
    },
    {
        img: 'Img/gallery_04.jpg'
    },
    {
        img: 'Img/gallery_05.jpg'
    },
    {
        img: 'Img/gallery_06.jpg'
    }
]

function Homegallery() {
    return (
        <>

            <section className="" id="Homegallery">
                <Container>
                    <div>
                        <Row className='m-4 my-4 py-5 gallery-header'>
                            <Col lg={8} className='text-center fw-bold mx-auto '>
                                <h1>Our School Gallery</h1>
                                <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={8} className='text-center fw-bold mx-auto '>
                                <ul className=' d-block text-center m-5 '>
                                    <li> <Link to='' className='text-yellow'>Show all</Link>  </li>
                                    <li> <Link to='' className='text-red' >Class</Link>  </li>
                                    <li> <Link to='' className='text-orange'>Event</Link>  </li>
                                    <li> <Link to='' className='text-purple'>Playing</Link>  </li>
                                    <li> <Link to='' className='text-lightblue'>Art</Link>  </li>

                                </ul>
                            </Col>
                        </Row>
                    </div>
                    <Row>

                        {
                            saved.map((item, index) => {
                                return (
                                    <Col lg={4} sm={12} md={6} key={index} className='mt-5 col-4'>
                                        <div className='gallery-img'>
                                            <img src={item.img} alt='img' className='img-fluid' />
                                        </div>
                                        <div className='gallery-overlay bg-purple'>

                                        <div className='gallery-content'>
                                            <Link to={item.img} target='_blank'><FontAwesomeIcon icon={faMagnifyingGlassPlus} /></Link>
                                            <h4>Product Name Here</h4>
                                            <span>
                                                By : KidsAcademy Theme
                                            </span>
                                        </div>
                                        </div>
                                    </Col>

                                )
                            }
                            )
                        }

                    </Row>
                </Container>
            </section >
        </>
    )
}

export default Homegallery