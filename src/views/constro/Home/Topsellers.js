import React, { useRef } from 'react'
import { FaChevronRight, FaStar } from 'react-icons/fa'
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import Topselling from '../../../dataCenter/Home/Topsellers'
import Carousel from 'react-elastic-carousel';
import { useHistory } from 'react-router-dom'

const Topsellers = () => {
    const carouselRef = useRef(null);
    const history = useHistory()
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 1 },
        { width: 550, itemsToShow: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 992, itemsToShow: 3 },
        { width: 1100, itemsToShow: 4 }
    ]

    const Loop = (currentItem) => {
        if (currentItem.index == Topselling.length - 1) {
            setTimeout(() => {
                carouselRef.current.goTo(0);
            }, 1500);
        }
    };

    const onNextStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(0);
        }
    };

    const onPrevStart = (currentItem, nextItem) => {
        if (currentItem.index === nextItem.index) {
            carouselRef.current.goTo(Topselling.length);
        }
    };
    return (
        <section className='pb-0'>
            <div className='d-flex justify-content-between'>
                <h1 className='text-dark ff-bold'>Hot Deals</h1>
                <p role='button' className='text-dark ff-bold cursor-pointer' onClick={() => history.push('/products')}>View All <FaChevronRight color='#cb9f0b' /></p>
            </div>
            <Carousel showArrows={false} onChange={Loop} breakPoints={breakPoints} enableAutoPlay ref={carouselRef}
                onPrevStart={onPrevStart}
                onNextStart={onNextStart}
                autoPlaySpeed={3500}>
                {
                    Topselling && Topselling.length > 0 && Topselling.map((item) => {
                        return <Card className='cardstyles'>
                            <div className='cardImg'>
                                <img
                                    className='img-fluid'
                                    src={item.image}
                                />
                            </div>
                            <CardBody className='pt-0'>
                                <Row className='d-flex justify-content-between align-items-center mt-2'>
                                    <Col lg={9} md={9} sm={9} xs={9}>
                                        <h4 className='font-weight-bold text-uppercase text-dark mb-0 text-truncate'>{item.name}</h4>
                                    </Col>
                                    <Col lg={3} md={3} sm={3} xs={3}>
                                        <div className='d-flex justify-content-center align-items-center rating-bg'>
                                            <span className='pr-1 text-white'>{item.rating}</span><FaStar color='#FEDE31' />
                                        </div>
                                    </Col>
                                </Row>
                                <CardText tag="h4" className='text-dark'>
                                    {item.subType}
                                </CardText>
                                <CardSubtitle
                                    className="mb-2 text-muted"
                                    tag="h6"
                                >MRP : <del>Rs.{item.mrpPrice}</del>
                                </CardSubtitle>
                                <CardText tag="h4" className='text-dark mb-0'>
                                    Sale Price :
                                </CardText>
                                <CardText tag="h4" className='text-dark mb-0'>
                                    Rs.{item.salePrice} per {item.quantityTypes && item.quantityTypes[0] && item.quantityTypes[0].type}
                                </CardText>
                            </CardBody>
                            <Button className='mx-2 my-2 addcartbtn' onClick={() => history.push('/products')}>
                                Check out the Product
                            </Button>
                        </Card>
                    })
                }
                {/* <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-essential d-flex align-items-center justify-content-center'>
                        <img src={require('../../../assets/img/E-commerce/fruits.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3 mb-1'>Fruits</h5>
                    <h4 className='text-dark'>Up to 50% OFF</h4>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-essential d-flex align-items-center justify-content-center'>
                        <img src={require('../../../assets/img/E-commerce/groceries.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3 mb-1'>Daily Essentials</h5>
                    <h4 className='text-dark'>Up to 50% OFF</h4>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-essential d-flex align-items-center justify-content-center'>
                        <img src={require('../../../assets/img/E-commerce/mango.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3 mb-1'>Mango</h5>
                    <h4 className='text-dark'>Up to 50% OFF</h4>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-essential d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/grocerybag.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3 mb-1'>Vegitables</h5>
                    <h4 className='text-dark'>Up to 50% OFF</h4>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-essential d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/strawberry.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3 mb-1'>Strowberry</h5>
                    <h4 className='text-dark'>Up to 50% OFF</h4>
                </Col>
                <Col lg="2" className='d-flex flex-column align-items-center justify-content-center'>
                    <div className='bg-essential d-flex align-items-center justify-content-center'>
                        <img src={require('../../assets/img/E-commerce/cherry.png').default} className="img-fluid p-4" />
                    </div>
                    <h5 className='text-dark mt-3 mb-1'>Cherry</h5>
                    <h4 className='text-dark'>Up to 50% OFF</h4>
                </Col> */}
            </Carousel>
        </section>
    )
}

export default Topsellers