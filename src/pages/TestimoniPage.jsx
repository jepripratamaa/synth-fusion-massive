import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { testimoni } from '../data/index'

const TestimoniPage = () => {
    return (
        <div className='testi w-100 page-background-2'>
        <Container>
            <Row data-aos="fade-up" className='mb-5'>
                <Col>
                    <h1 className='text-white text-center fw-bold'>Testimoni</h1>
                    <p className='text-white text-center'>Lets see the POV from Our Academy Learners</p>
                </Col>
            </Row>
            <Row className='row-cols-lg-3 row-cols-1'>
                {testimoni.map((testimoni) => {
                    return(
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="100" >
                        <Col key={testimoni.id} className='mb-5 colom-testi'>
                            <i className={testimoni.star1} style={{color: "#ffc85f",}}></i>
                            <i className={testimoni.star2} style={{color: "#ffc85f",}}></i>
                            <i className={testimoni.star3} style={{color: "#ffc85f",}}></i>
                            <i className={testimoni.star4} style={{color: "#ffc85f",}}></i>
                            <i className={testimoni.star5} style={{color: "#ffc85f",}}></i>
                            <p className='desc text-white'>{testimoni.desc}</p>
                            <div className='people'>
                                <img src={testimoni.image} alt="" />
                                <div>
                                    <h5 className='text-white mb-1'>{testimoni.name}</h5>
                                    <p className='text-white m-0'>{testimoni.skill}</p>                                
                                </div>
                            </div>
                        </Col>
                        </div>
                    )
                })}
            </Row>
        </Container>
        </div>
    )
}

export default TestimoniPage