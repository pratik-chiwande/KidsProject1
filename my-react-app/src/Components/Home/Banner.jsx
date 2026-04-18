import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router'

function Banner({props}) {
    return (
        <>
            <section id="Banner" className='section-notch position-relative'>
                <div className='overlay '>
                    <Container>

                        <h2>{props.heading}</h2>
                        <div>
                            <Link to=''>Home</Link> {props.pages}
                        </div>
                    </Container>
                </div>
            </section>
        </>
    )
}

export default Banner