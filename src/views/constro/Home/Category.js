import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Row, Col } from 'reactstrap'
import Categories from '../../../dataCenter/Home/category'
import { useHistory } from 'react-router-dom'

const Category = () => {
    const history = useHistory()
    return (
        <section className='pb-0'>
            <div className='d-flex justify-content-between'>
                <h1 className='text-dark ff-bold'>Shop From Top Categories</h1>
                <p role="button" className='text-dark ff-bold' onClick={() => history.push('/products')}>View All <FaChevronRight color='#cb9f0b' /></p>
            </div>
            <Row>
                {
                    Categories && Categories.length > 0 && Categories.map((item) => {
                        return <Col lg="2" md="4" sm="6" role='button' className='d-flex flex-column align-items-center justify-content-center' onClick={() => history.push(item.route)}>
                            <div className='bg-products d-flex align-items-center justify-content-center'>
                                <img src={item.image} className="img-fluid p-4" />
                            </div>
                            <h5 className='text-dark ff-bold mt-3'>{item.name}</h5>
                        </Col>
                    })
                }
                {/* <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-products d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/washing-machine.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3'>Electronics</h5>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-products d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/watch.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3'>Watches</h5>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-products d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/necklace.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3'>Accessories</h5>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-products d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/flower-pot.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3'>Decor</h5>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-products d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/mobile2.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3'>Furniture</h5>
                </Col> */}
            </Row>
        </section>
    )
}

export default Category