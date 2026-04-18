import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faClock, faHome, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faDribbble, faFacebook, faInstagram, faPinterest, faSkype, faVimeo } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import './Topheader.css'
import { Container, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router';

let contactinfo = [
    {
        icon: faPhone,
        content: 'Phone : 8801 234 567 890'
    },
    {
        icon: faClock,
        content: 'Opening Time : 9:30am-5:30pm'
    },
    {
        icon: faHome,
        content: 'Address : Labartisan 1205 Newyork'
    }
]
let socialinfo =[
    {
        icon:faFacebook ,
        link:"wwww.facebook.com"
    },
    {
        icon: faInstagram  ,
        link:""
    },
    {
        icon:faPinterest  ,
        link:""
    },
    {
        icon: faSkype ,
        link:""
    },
    {
        icon: faVimeo ,
        link:""
    },
    {
        icon: faDribbble ,
        link:""
    },
]
function Topheader() {
    return (
        <>
            <section id="Topheader" className=' top-header bg-purple d-block text-white d-lg-block'>
                <Container fluid className='px-5'>
                    <Row className='px-xl-5'>
                        {

                            contactinfo.map((item, index) => {
                                return (
                                    <Col sm={"auto"} key={index}>
                                        <FontAwesomeIcon icon={item.icon} className='icon' />
                                        <span className='ms-2'>{item.content}</span>
                                    </Col>
                                )
                            })
                        }
                        <Col className='ms-auto col-auto '>
                        
                            {
                                socialinfo.map((data,index)=>
                                {
                                    return(
                                        <span className='socialicon px-2 ' key={index}>
                                            <Link to={data.link}><FontAwesomeIcon icon={data.icon}/></Link>
                                        </span>
                                    )
                                })
                            }
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Topheader