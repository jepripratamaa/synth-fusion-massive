import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import blog1 from '../assets/blog1.png'
import blog2 from '../assets/blog2.png'
import blog3 from '../assets/blog3.png'
import blog4 from '../assets/blog4.png'

function BlogPage() {
    return (
        <div className='blog w-100 min-vh-100 blog-background'>
        <Container>
            <Row className='blog-box'>
                <Col>
                    <h1 className='text-white text-center fw-bold'>Blog</h1>
                    <p className='text-white text-center'>Blogs and Books You Might Like and <br /> Interested with</p>
                </Col>
                <div className='img-blog gap-5'>
                <Card style={{ width: '168px', backgroundColor: 'transparent' }}>
                    <img src={blog1}/>
                </Card>
                <Card style={{ width: '168px', backgroundColor: 'transparent' }}>
                    <img src={blog2}/>
                </Card>
                <Card style={{ width: '168px', backgroundColor: 'transparent' }}>
                    <img src={blog3}/>
                </Card>
                <Card style={{ width: '168px', backgroundColor: 'transparent' }}>
                    <img src={blog4}/>
                </Card>
                </div>
            </Row>
        </Container>
        </div>
    );
}

export default BlogPage