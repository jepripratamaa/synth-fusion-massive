import { Container, Row, Col } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'

import { blog } from '../data/index'

function BlogPage() {
    return (
        <div className='blog w-100 min-vh-100 page-background-2'>
        <Container>
            <Row>
                <Col>
                    <h1 className='text-white text-center fw-bold'>Blog</h1>
                    <p className='text-white text-center'>Blogs and Books You Might Like and <br /> Interested with</p>
                </Col>
                <div className='blog-pos '>
                    {blog.map((blog) => {
                        return(
                            <div>
                                <Col key={blog.id} className='book-blog'>
                                    <div>
                                        <img src={blog.image} alt="" />
                                    </div>
                                </Col>
                            </div>
                        )
                    })}
                </div>
                {/* <div className='img-blog gap-5'>
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
                </div> */}
            </Row>
        </Container>
        </div>
    );
}

export default BlogPage