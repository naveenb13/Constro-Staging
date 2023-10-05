import React, { useRef, useEffect, useState } from 'react'
import { Row, Col, Button } from "reactstrap";
import IndexNavbar from "../../../components/Navbars/IndexNavbar";
// import Carousel from 'react-elastic-carousel';
import { Carousel } from "react-3d-animated-carousel";
import BannerDetails from "../../../dataCenter/Home/banner";
import { useHistory } from 'react-router-dom'

export default function Banner() {

    const carouselRef = useRef(null);
    const history = useHistory()
    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 300, itemsToShow: 1 },
        { width: 550, itemsToShow: 1 },
        { width: 768, itemsToShow: 1 },
        { width: 992, itemsToShow: 1 }
    ]

    var overallData = sessionStorage.getItem("overallData");
    var cartSessionData = sessionStorage.getItem("cartData");

    const [data, setData] = useState([])
    const [cartData, setCartData] = useState([])

    useEffect(() => {
        if (overallData) {
            let a = JSON.parse(overallData)
            setData(a)
        }
    }, [overallData])

    useEffect(() => {
        if (cartSessionData) {
            let a = JSON.parse(cartSessionData)
            setCartData(a)
        }
    }, [cartSessionData])

    const Loop = (currentItem) => {
        if (currentItem.index == BannerDetails.length - 1) {
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
            carouselRef.current.goTo(BannerDetails.length);
        }
    };

    return (
        <>
            <div className="mt-5">
                <div>
                    <IndexNavbar cartData={cartData} data={data} setData={setData} setCartData={setCartData} />
                </div>
                <div className='h-100 mb-5 pb-5 d-lg-none d-flex'></div>
                <section className='bg-color-banner mt-lg-0 mt-5'>
                    <div className='d-flex flex-column'>
                        <Row className='d-flex justify-content-between align-items-center'>
                            <Col lg={4} md={6} sm={6} className='d-flex justify-content-center'>
                                <img src={require("../../../assets/img/E-commerce/Home/Banner/cement-banner.png").default} className="img-fluid rounded mx-auto banner-animation" width={300} />
                            </Col>
                            <Col lg={2} className='d-lg-flex d-none justify-content-center'></Col>
                            <Col lg={6} md={6} sm={6} className='d-lg-flex d-md-flex d-sm-flex d-none justify-content-end '>
                                <img src={require("../../../assets/img/E-commerce/Home/Banner/sand-banner.png").default} className="img-fluid rounded banner-animation" width={300} />
                            </Col>
                        </Row>
                        <Row className='d-flex align-items-center my-lg-0 my-3'>
                            <Col lg={12} md={12} sm={12} className='d-flex flex-column align-items-center'>
                                <img src={require("../../../assets/img/E-commerce/logo.png").default} className='img-fluid' width={350}></img>
                                <p className='text-dark ff-light h3 mb-0'>Book all your construction materials at one place.!</p>
                                <Button type="button" className='addcartbtn btn btn-lg' onClick={() => history.push('/products')}>Order Now</Button>
                            </Col>
                        </Row>
                        <Row className='d-flex justify-content-between align-items-center'>
                            <Col lg={6} md={6} sm={6} className='d-flex justify-content-center'>
                                <img src={require("../../../assets/img/E-commerce/Home/Banner/brick-banner.png").default} className="img-fluid position-rel2 rounded-100 banner-animation" width={250} />
                            </Col>
                            <Col lg={6} md={6} sm={6} className='d-lg-flex justify-content-center d-md-flex d-sm-flex d-none'>
                                <img src={require("../../../assets/img/E-commerce/Home/Banner/rmc-banner.png").default} className="img-fluid position-rel4 banner-animation" width={300} />
                            </Col>
                        </Row>
                    </div>
                </section>
                {/* <Carousel
                        isDark={false}
                        data={BannerDetails}
                    /> */}
            </div>
        </>
    )
}