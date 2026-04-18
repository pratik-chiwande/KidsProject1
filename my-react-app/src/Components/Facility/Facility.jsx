import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from 'react-bootstrap'
import { faGlobeAsia, faGraduationCap, faHourglass, faHouse, faPersonChalkboard, faSchool } from '@fortawesome/free-solid-svg-icons'

// let = [{
//     icon:faa,
//     heading:,
//     description:
// }]


function Facility() {
    return (
        <>
            <section id="Facility">
                <Container>
                    <Row>
                        <Col xl={3} sm={6} md={6} className='text-center'>
                             <div className='facility-item'>
                                <span className='icon bg-red'>
                                    <FontAwesomeIcon icon={faSchool} />
                                </span>
                            </div>
                            <h3 className='text-red'>Active Learning</h3>
                            <p className='text-gray'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                        </Col>
                          <Col xl={3} sm={6} md={6} className='text-center'>
                            <div className='facility-item'>
                                <span className='icon bg-yellow'>
                                    <FontAwesomeIcon icon={faPersonChalkboard}  />
                                </span>
                            </div>
                            <h3 className='text-yellow'>Expert Teachers</h3>
                            <p className='text-gray'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                        </Col>
                          <Col xl={3} sm={6} md={6} className='text-center'>
                             <div className='facility-item'>
                                 <span className='icon bg-orange'>
                                    <FontAwesomeIcon icon={faGlobeAsia} />
                                </span>
                            <h3 className='text-orange'>Strategi Location</h3>
                            <p className='text-gray'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                            </div>
                        </Col>
                          <Col xl={3} sm={6} md={6} className='text-center'>
                             <div className='facility-item'>
                                  <span className='icon bg-violet'>
                                    <FontAwesomeIcon icon={faGraduationCap} />
                                </span>
                            <h3 className='text-violet'>Full Day Programs</h3>
                            <p className='text-gray'>Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after</p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Facility