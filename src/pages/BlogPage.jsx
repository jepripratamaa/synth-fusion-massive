import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import pdf1Image from '../assets/pdf1.png'
import pdf2Image from '../assets/pdf2.png' 

function BlogPage() {
    return (
        <div className='blog w-100 min-vh-100 page-background-2'>
            <Container>
                <Row data-aos="fade-up" className='mb-5'>
                    <Col>
                        <h1 className='text-white text-center fw-bold'>Articles</h1>
                        <p className='text-white text-center'>Articles You Might Like and Interested with</p>
                    </Col>
                </Row>
                <Row data-aos="fade-up" data-aos-duration='1000' style={{marginTop: '50px' }}>
                    <Col>
                        <Card className='blog-card'>
                            <Row>
                                <Col md={4}>
                                    <img src={pdf1Image} alt="Blog Image" style={{ width: '100%' }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#EDDC41' }}>Intro To Music Production <br /> All you need to know to start with music production!</Card.Title>
                                        <Card.Text style={{color: '#f5f5f5'}}>
                                            If you just got involved in the electronic music production scene, you might be aware of how important sound design is for you as a music producer.
                                            People often say that you have to develop your own signature sound so that you can stand out from the rest. That’s true. The music industry does not want another Martin Garrix or Calvin Harris in the scene, they want something new which is promotable or marketable to attract the listeners.
                                            What topics are covered inside?
                                            <ul>
                                                <li>Synthesizers</li>
                                                <li>Song-writing</li>
                                                <li>Mixing</li>
                                                <li>Mastering</li>
                                                <li>Tutorials & Blog Articles</li>
                                            </ul> <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{color: '#f5f5f5'}}>Download PDF</p>
                                                <p style={{ color: '#EDDC41', marginLeft: '5px' }}>Here</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row data-aos="fade-up" data-aos-duration='1000' data-aos-delay="100" style={{marginTop: '50px' }}>
                    <Col>
                        <Card className='blog-card' >
                            <Row>
                                <Col md={4}>
                                    <img src={pdf2Image} alt="Blog Image" style={{ width: '100%' }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#EDDC41' }}>Becoming a Synthesizer Wizard: From Presets to Power User</Card.Title>
                                        <Card.Text style={{ color: '#EDDC41' }}>
                                            The book is also a great introduction to SynthEdit for anyone who wants to create—and then share or sell—their own synthesizers.
                                        </Card.Text>
                                        <p style={{color: '#f5f5f5'}}>
                                            Individuals who are new to synthesis and wish to grasp the fundamentals while taking their initial steps in creating and 
                                            manipulating sounds with synthesizers. Musicians already acquainted with synthesis, aiming to strengthen or broaden their 
                                            knowledge to utilize their tools more comprehensively. Anyone interested in constructing, sharing, and possibly commercializing 
                                            their own synthesizers. The book delves into synthesis from its fundamental principles, concentrating on the essential elements 
                                            and building blocks. It illustrates concepts using four prominent modular synthesizers (Zebra 2, KarmaFX Synth Modular, 
                                            VAZ Modular, and SynthEdit). Exploring various sound building techniques derived from these building blocks, the book 
                                            demonstrates their applicability to the featured synthesizers or any other synthesizer. Furthermore, the book serves as an 
                                            excellent initiation to SynthEdit, offering insights for those interested in crafting, sharing, and selling their own synthesizers.
                                        </p>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{color: '#f5f5f5'}}>Download PDF</p>
                                                <p style={{ color: '#EDDC41', marginLeft: '5px' }}>Here</p>
                                            </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row data-aos="fade-up" data-aos-duration='1000' data-aos-delay="200" style={{marginTop: '50px' }}>
                    <Col>
                        <Card className='blog-card' >
                            <Row>
                                <Col md={4}>
                                    <img src={pdf1Image} alt="Blog Image" style={{ width: '100%' }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#EDDC41' }}>Intro To Music Production <br /> All you need to know to start with music production!</Card.Title>
                                        <Card.Text style={{color: '#f5f5f5'}}>
                                            If you just got involved in the electronic music production scene, you might be aware of how important sound design is for you as a music producer.
                                            People often say that you have to develop your own signature sound so that you can stand out from the rest. That’s true. The music industry does not want another Martin Garrix or Calvin Harris in the scene, they want something new which is promotable or marketable to attract the listeners.
                                            What topics are covered inside?
                                            <ul>
                                                <li>Synthesizers</li>
                                                <li>Song-writing</li>
                                                <li>Mixing</li>
                                                <li>Mastering</li>
                                                <li>Tutorials & Blog Articles</li>
                                            </ul> <br />
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{color: '#f5f5f5'}}>Download PDF</p>
                                                <p style={{ color: '#EDDC41', marginLeft: '5px' }}>Here</p>
                                            </div>
                                        </Card.Text>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

                <Row data-aos="fade-up" data-aos-duration='1000' data-aos-delay="300" style={{marginTop: '50px' }}>
                    <Col>
                        <Card className='blog-card' >
                            <Row>
                                <Col md={4}>
                                    <img src={pdf2Image} alt="Blog Image" style={{ width: '100%' }} />
                                </Col>
                                <Col md={8}>
                                    <Card.Body>
                                        <Card.Title style={{ color: '#EDDC41' }}>Becoming a Synthesizer Wizard: From Presets to Power User</Card.Title>
                                        <Card.Text style={{ color: '#EDDC41' }}>
                                            The book is also a great introduction to SynthEdit for anyone who wants to create—and then share or sell—their own synthesizers.
                                        </Card.Text>
                                        <p style={{color: '#f5f5f5'}}>
                                            Individuals who are new to synthesis and wish to grasp the fundamentals while taking their initial steps in creating and 
                                            manipulating sounds with synthesizers. Musicians already acquainted with synthesis, aiming to strengthen or broaden their 
                                            knowledge to utilize their tools more comprehensively. Anyone interested in constructing, sharing, and possibly commercializing 
                                            their own synthesizers. The book delves into synthesis from its fundamental principles, concentrating on the essential elements 
                                            and building blocks. It illustrates concepts using four prominent modular synthesizers (Zebra 2, KarmaFX Synth Modular, 
                                            VAZ Modular, and SynthEdit). Exploring various sound building techniques derived from these building blocks, the book 
                                            demonstrates their applicability to the featured synthesizers or any other synthesizer. Furthermore, the book serves as an 
                                            excellent initiation to SynthEdit, offering insights for those interested in crafting, sharing, and selling their own synthesizers.
                                        </p>
                                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                                <p style={{color: '#f5f5f5'}}>Download PDF</p>
                                                <p style={{ color: '#EDDC41', marginLeft: '5px' }}>Here</p>
                                            </div>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                </Row>

            </Container>
        </div>
    );
}

export default BlogPage;