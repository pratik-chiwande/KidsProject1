import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'

const classItem = [
    {
        img: "Img/class_01.jpg",
        title: 'Imagination Classes',
        titlecolor: 'ff-bubblegum fw-bold text-yellow',
        addressBg: 'bg-yellow'
    },
     {
        img: "Img/class_02.jpg",
        title: 'Drawing Classes',
        titlecolor: 'ff-bubblegum fw-bold text-red',
        addressBg: 'bg-red'
    },
     {
        img: "Img/class_03.jpg",
        title: 'Learning Classes',
        titlecolor: 'ff-bubblegum fw-bold text-orange',
        addressBg: 'bg-orange'
    }
]

function Homepopular() {
    return (
        <>
            <section id="homepopular" className='p-120'>
                <Container>
                    <div className='popular-header  text-center'>

                        <h2 className='fw-bold text-purple'>Our Popular Classes</h2>
                        <p className='text-gray text-center'>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                    </div>
                    <Row className='px-5 px-sm-0'>
                        {
                            classItem.map((item, index) => {
                                return (
                                    <Col lg={4} sm={6} xs={12} key={index} className='insta'>

                                        <div className="class-item mt-4">
                                            <img src={item.img} alt='img' className='img-fluid img w-100 h-100' />
                                            <ul className='class-ul list-unstyled'>
                                                <li className='bg-purple'>
                                                    <span>Class Size</span>
                                                    <span>30 - 40</span>
                                                </li>
                                                <li className='bg-red'>
                                                    <span>Years Old</span>
                                                    <span>5 -6</span>
                                                </li>
                                                <li className='bg-orange'>
                                                    <span>Tution Fee</span>
                                                    <span>$1500</span>
                                                </li>
                                            </ul>
                                            <div className='class-content text-center text-lg-start '>
                                                <h4>
                                                    <Link to='/' className={item.titlecolor}>{item.title}</Link>
                                                </h4>
                                                <p style={{ lineheight:'30px' ,marginBottom:"5px"}}>

                                                    <span className='text-red'>
                                                        Class Time :
                                                    </span>
                                                         08:00 am - 10:00 am
                                                </p>
                                                <p>
                                                    Draticaly novate fuly rarched an plications awesome theme education
                                                </p>
                                            </div>
                                            <div className={`class-address text-center ${item.addressBg}`}>
                                            <p className='text-white m-0'>
                                                <span className='px-1'><FontAwesomeIcon icon={faHouse}/></span>
                                                218 New Newyork Road, USA- 1205
                                            </p>
                                            </div>

                                        </div>

                                    </Col>
                                )
                            })
                        }
                    </Row>
                    <Row>
                       <div className="class-btn text-center" >
                        <Link to='/classes' className='bg-purple'>See More  Classes</Link>
                       </div>
                    </Row>
                </Container>
            </section>
        </>
    )
}
export default Homepopular