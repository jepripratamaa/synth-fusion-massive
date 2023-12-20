import React from 'react'
import CourseComponent from './CourseComponent'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import courseimg from '../assets/course-1.png'
import { course, courseDesc } from '../data'

const CoursePage = () => {
    return (
        <div className=' courses page-background-2'>
            <div data-aos="fade-up">
            <Row className='course-page'>
                <Col>
                    <h1 className='text-center fw-bold'>Courses</h1>
                    <p className='text-white text-center'>FIND ALL COURSES AND TUTORIALS</p>
                </Col>
            </Row>
            </div>

            <div className='container'>
                <Row data-aos="fade-up" data-aos-duration='1000' data-aos-delay="100" style={{marginTop: '50px' }}>
                    <Col>
                        <Card className='courses-page'>
                            <Row>
                                <Col >
                                    <img src={courseimg} alt="course image" style={{ marginTop: '20px' }} />
                                </Col>
                                <Col>
                                    <Card.Body>
                                        <Card.Title className='title'>Guide to Audio Compressor</Card.Title>
                                        <Card.Title className='title-2'>Teknologi</Card.Title>
                                        <Card.Text className='text-courses' style={{color: '#f5f5f5'}}>
                                            <p className='text-white' style={{fontSize: '28px'}}>Level : Low </p>
                                            <p className='text-white' style={{fontSize: '28px'}}>11 hours learning</p>
                                        </Card.Text>
                                            <p className='text-white' style={{marginLeft: '35px', fontSize:'28px'}}>50 students enrolled</p>
                                            <br />
                                            <div className='text-center text-courses-2'>
                                                <a href='' style={{fontSize: '28px'}}>Learn Now</a>
                                                <br />
                                                <a href='' style={{fontSize: '28px', color: '#D0C13A'}}>Class Information</a>
                                            </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <div className='py-5'>
                        <h2 className='text-white'>What you get</h2>
                    </div>
                    <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-6">
                        <div data-aos="fade-up" data-aos-duration='1000' className="box">
                            <p className="box-text">Certificate</p>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="100" className="box">
                            <p className="box-text">Foundational <br /> Understanding</p>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" className="box">
                            <p className="box-text">Tool Proficiency </p>
                        </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                        <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" className="box">
                            <p className="box-text">Advanced <br /> Tecniques Mastery </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </Row>
                <Row>
                    <div>
                        <div data-aos="fade-up" data-aos-duration='1000' className="mb-2 py-5">
                            <Button style={{background : 'transparent', border : 'none'}} variant="primary" size="lg">
                            <a href="#desc">Description Class</a>
                            </Button>{' '}
                            <Button style={{background : 'transparent', border : 'none'}} variant="secondary" size="lg">
                            <a href="/testimoni">Testimoni</a>
                            </Button>
                        </div>

                        <div id='#desc'>
                            <h4 style={{color: '#EDDC41'}}> Description </h4>
                            <div data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300">
                                {courseDesc.map((courseDesc) => {
                                    return(
                                        <div key={courseDesc.id} className='text-white' style={{fontSize: '20px', textAlign: 'justify'}}>
                                            <p>{courseDesc.title}</p>
                                            <p>{courseDesc.title2}</p>
                                            <p>{courseDesc.desc1}</p>
                                            <p>{courseDesc.desc2}</p>
                                            <p>{courseDesc.desc3}</p>
                                            <p>{courseDesc.desc4}</p>
                                            <p>{courseDesc.desc5}</p>
                                            <p>{courseDesc.desc6}</p>
                                            <p>{courseDesc.desc7}</p>
                                            <p>{courseDesc.desc8}</p>
                                            <p>{courseDesc.desc9}</p>
                                            <p>{courseDesc.desc10}</p>
                                            <p>{courseDesc.desc11}</p>
                                            <p>{courseDesc.desc12}</p>
                                        </div>
                                    )
                                }
                                )}
                            </div>
                        </div>
                    </div>
                </Row>
                </div>
                
                <CourseComponent/>
        </div>
    )
}

export default CoursePage