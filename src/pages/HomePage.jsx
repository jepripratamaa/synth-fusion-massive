import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import CourseComponent from '../components/CourseComponent';


const HomePage = () => {
  return (
    <div >
      <div className="homepage">
        <Container>
          <Row className="align-items-center w-100 min-vh-100">
            <Col className="text-left">
              
              <div className="content">
                <h4 className=' mb-4'>IMPROVE YOUR MUSIC CAREER</h4>
                <h1>SYNTH <br />  
                    FUSION <br />
                    ACADEMY
                </h1>
                <p className='my-3'>
                  Website that provides music learning <br />
                  materials. Starting from mixing and <br />
                  mastering, Soundbanks, Presets and <br />
                  Samples, and much more.
                </p>
                <Button>Find out more</Button>{' '}
                <Container>
                <Row>
                <Col className='asset w-100'>
                  <img src='/src/assets/Asset1.png' alt='Bottom Image' />
                </Col>
                </Row>
                </Container>
              </div>
            </Col>
          </Row>
        </Container>

      </div>

      <div className='courses'>
        <CourseComponent/>
      </div>
    </div>
  );
};

export default HomePage;
