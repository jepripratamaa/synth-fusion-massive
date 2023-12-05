import React from 'react'
import CourseComponent from '../components/CourseComponent'
import { Container, Row, Col } from 'react-bootstrap'

const CoursePage = () => {
    return (
        <div className='page-background-2'>
            <div>
            <Row className='course-page'>
                <Col>
                    <h1 className='text-center fw-bold'>Course</h1>
                    <p className='text-white text-center'>FIND ALL COURSES AND TUTORIALS</p>
                </Col>
            </Row>
            </div>
            <div>
                <CourseComponent/>
                <CourseComponent/>
            </div>
        </div>
    )
}

export default CoursePage