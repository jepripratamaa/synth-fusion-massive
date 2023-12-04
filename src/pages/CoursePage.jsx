import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../css/main.css'; // File CSS terpisah
import CourseComponent from '../components/CourseComponent';

const CoursePage = () => {
  return (
    <div className="coursepage">
      <CourseComponent/>


      
      {/* <Container fluid className="align-items-start justify-content-center min-vh-100">
        <Row className="align-items-center w-100"> 
          <Col className="text-left">
            <div className="content">
              <h1 className='mt-4'>Popular Courses</h1><br />
              <h4 className='my-2'>
                FIND ALL POPULAR COURSES AND TUTORIALS
              </h4>
            </div><br />
          </Col>
          <Col className="text-end">
            <p className="mt-0 styled-p">More Courses</p>
          </Col>
        </Row>

       <Row className='w-100 d-flex justify-content-center '>
					<Col md={8}>
						<Row> 
							<Col className='chapter sf'></Col>
							<Col className='chapter chapter1'></Col>
							<Col className='chapter chapter2'></Col>
							<Col className='chapter chapter3'></Col>
						</Row>
					</Col>
				</Row>
      <Container fluid className='asset'>
        <Row>
          <Col className='text-center'>
            <img src='' alt='Bottom Image' />
          </Col>
        </Row>
        </Container>
      </Container> */}
    </div>
 );
};
export default CoursePage;
