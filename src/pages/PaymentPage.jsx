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
                                    <div className='payment'>
                                        <img src={payment.image} alt="" />
                                    </div>
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