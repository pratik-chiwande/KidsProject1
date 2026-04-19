import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router'
import { faFacebookF, faVimeoV, faPinterest, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faRss } from '@fortawesome/free-solid-svg-icons';
import 'animate.css';
import '../Teachers/Teachers.css'

const teachers = [
  {
    img: 'Img/teacher_01.jpg',
    bgColor: 'bg-yellow',
    title: 'Broklyn Doel ',
    subject: 'Sains Teacher'
  },
  {
    img: 'Img/teacher_02.jpg',
    bgColor: 'bg-red',
    title: 'Alex Jhonson ',
    subject: 'Art Teacher'
  },
  {
    img: 'Img/teacher_03.jpg',
    bgColor: 'bg-orange',
    title: 'Robot Jhonson  ',
    subject: 'Math Teacher'
  },
  {
    img: 'Img/teacher_04.jpg',
    bgColor: 'bg-purple',
    title: 'Janaton Doe  ',
    subject: 'English Teacher'
  },
  {
    img: 'Img/teacher_05.jpg',
    bgColor: 'bg-lightblue',
    title: 'Janaton Doe  ',
    subject: 'English Teacher'
  },
  {
    img: 'Img/teacher_06.jpg',
    bgColor: 'bg-green',
    title: 'Janaton Doe  ',
    subject: 'English Teacher'
  },
  {
    img: 'Img/teacher_07.jpg',
    bgColor: 'bg-pink',
    title: 'Janaton Doe  ',
    subject: 'English Teacher'
  },
  {
    img: 'Img/teacher_09.jpg',
    bgColor: 'bg-orange',
    title: 'Janaton Doe  ',
    subject: 'English Teacher'
  }


]

function Teachers() {
  return (
    <>

      <section id="Teachers">
        <div className='overlay '>
          <Container>
            {/* <Row className='m-4 my-4 py-5'>
                            <Col lg={8} className='teacher-header text-center fw-bold mx-auto '>
                                <h1 className=''>Meet Our Teachers</h1>
                                <p>Rapidiously expedite granular imperatives before economically sound web services. Credibly actualize pandemic strategic themeplatform.</p>
                            </Col>
                        </Row> */}
            <Row className='mt-5'>
              {teachers.map((item, index) => {
                return (
                  <Col lg={6} key={index} className="mb-4">
                    <Row className="g-0 align-items-stretch">

                      {/* IMAGE */}
                      <Col lg={5} md={5} sm={12} xs={12}>
                        <div className="teachers-img">
                          <img src={item.img} alt="teacher" className="img-fluid w-100 h-100" />
                        </div>
                      </Col>

                      {/* CONTENT */}
                      <Col lg={7} md={7} sm={12} xs={12}>
                        <div className={`teachers-content p-3 ${item.bgColor}`}>
                          <h4 className="fw-bold text-white">
                            {item.title}
                            <span className="f-16 ff-bubblegum fw-normal ms-2">{item.subject}</span>
                          </h4>

                          <ul className="d-flex p-0 my-2 text-white text-center">
                            <Link className="px-2"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            <Link className="px-2"><FontAwesomeIcon icon={faVimeoV} /></Link>
                            <Link className="px-2"><FontAwesomeIcon icon={faPinterest} /></Link>
                            <Link className="px-2"><FontAwesomeIcon icon={faTwitter} /></Link>
                            <Link className="px-2"><FontAwesomeIcon icon={faRss} /></Link>
                          </ul>

                          <p className="text-white">
                            Distinctively initiate and sustainable synergy vaan tactical opportunities.
                          </p>

                          <Link to="/teachers" className="port">
                            View Portfolio
                          </Link>
                        </div>
                      </Col>

                    </Row>
                  </Col>
                );
              })}
            </Row>
            <Row className='m-5'>
              <div className="teachers_btn text-center btn  pointer">
                <Link to='/teachers' className='bg-red text-white p-2 mb-3'>See More</Link>
              </div>
            </Row>
          </Container>
        </div>
      </section>
    </>
  )
}

export default Teachers