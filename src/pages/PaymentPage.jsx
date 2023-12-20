import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { payment } from '../data';

const PaymentPage = () => {
    return (
        <div className='blog w-100 payment-bg'>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-white text-center fw-bold'>Payment Method</h1>
                </Col>
                <div className='d-flex justify-content-around' style={{marginTop: '50px' }}>
                    {payment.map((payment) => {
                        return(
                            <div>
                                <Col key={payment.id} className=''>
                                    <button className='payment bg-transparent' style={{border: 'none'}}>
                                        <a target="_blank" href="https://wa.me/62895415000950?text=Halo Kak, Saya Mau Ikut Course Di Synth Fusion Academy..">
                                            <img src={payment.image} alt="" />
                                        </a>
                                    </button>
                                </Col>
                            </div>
                        )
                    })}
                </div>
            </Row>
        </Container>
        </div>
    );
}

export default PaymentPage