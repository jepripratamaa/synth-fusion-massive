import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import ImgSf from "../assets/sf-grup.png";

const CourseComponent = () => {
  return (
    <div className="coursepage">
      <Container fluid className="align-items-start justify-content-center min-vh-100">
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
                            {/* <Col className='course'>
                                <Card className="text-white">
                                <Card.Img src={ImgSf} alt="Card image" />
                                <Card.ImgOverlay>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in
                                    to additional content. This content is a little bit longer.
                                    </Card.Text>
                                    <Card.Text>Last updated 3 mins ago</Card.Text>
                                </Card.ImgOverlay>
                                </Card>
                            </Col> */}


							<Col className='chapter sf'></Col>
							<Col className='chapter chapter1'></Col>
							<Col className='chapter chapter2'></Col>
							<Col className='chapter chapter3'></Col>
						</Row>
					</Col>
				</Row>
      <Container className='asset'>
        <Row>
        <img src='/src/assets/asset-courses.png' alt='Bottom Image' />
        </Row>
        </Container>
      </Container>
    </div>
  )
}

export default CourseComponent