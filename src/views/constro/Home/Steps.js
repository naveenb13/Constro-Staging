import React from 'react'
import { Col, Row } from 'reactstrap'

const Steps = () => {
    return (
        <section className='pb-0'>
            <div className='step-bg p-4'>
                <Row className='d-flex justify-content-center align-items-center flex-column mb-2 text-center'>
                    <h1 className='ff-bold text-dark mb-1'>How it works</h1>
                    <p className='text-dark ff-bold'>Product Quality Is Our Priority, And Always Guarantees Fast Delivery.</p>
                </Row>
                <Row className='d-flex justify-content-center align-items-center flex-column flex-lg-row flex-md-row'>
                    <Col lg={4} md={4} sm={12} className='d-flex align-items-center flex-column text-center'>
                        <img src={require("../../../assets/img/E-commerce/Home/Steps/step1.png").default} className='img-fluid'></img>
                        <h3 className='ff-bold text-dark mb-0'>Easy To Order</h3>
                        <p className='text-dark'>You only order through this website.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='d-flex align-items-center flex-column text-center'>
                        <img src={require("../../../assets/img/E-commerce/Home/Steps/step2.png").default} className='img-fluid'></img>
                        <h3 className='ff-bold text-dark mb-0'>Free And Fastest Delivery</h3>
                        <p className='text-dark'>Free Shipping on all Orders and Delivery will be on time.</p>
                    </Col>
                    <Col lg={4} md={4} sm={12} className='d-flex align-items-center flex-column text-center'>
                        <img src={require("../../../assets/img/E-commerce/Home/Steps/step3.png").default} className='img-fluid'></img>
                        <h3 className='ff-bold text-dark mb-0'>Best Quality</h3>
                        <p className='text-dark'>The best quality of materials for you.</p>
                    </Col>
                </Row>
            </div>
        </section>
    )
}

export default Steps