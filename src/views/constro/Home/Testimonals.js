import React, { useEffect, useState } from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { useHistory } from 'react-router-dom'
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input } from 'reactstrap'
import ReactStars from 'react-stars';
import Avatar from 'react-avatar';

const Testimonals = () => {
    const history = useHistory()

    const [goToSlide, setGoToSlide] = useState(0);
    const [offsetRadius, setOffsetRadius] = useState(2);
    const [showNavigation, setShowNavigation] = useState(true);
    const [enableSwipe, setEnableSwipe] = useState(true);
    const [configOption, setConfigOption] = useState(config.gentle);
    const [width, setWidth] = useState(0)

    useEffect(() => {
        let widthX = window.innerWidth;
        setWidth(widthX)
    }, [])


    const slides = [
        {
            key: 1,
            content: <Card className='testimonal-card d-flex'>
                <div className='p-4 d-flex align-items-center flex-column'>
                    <Row>
                        <Avatar src={require("../../../assets/img/E-commerce/Avatar.png").default} size="40" round={true} />
                        <h3 className='mb-0 text-dark text-bold'>Rahul</h3>
                    </Row>
                    <h5 className='mb-0 text-dark text-bold'>Builder</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        color2='#ff6a00'
                        edit={false}
                        className='mb-2'
                    />
                    <CardText className='text-bold text-dark'>
                        Wow what a refreshing change! A personal service with attention to detail to assist with a significant order for a variety of products including: doors, windows, internal door sets with matching skirting, kitchens and bathrooms. All delivered on time at a very competitive price. Thank you CONSTRO
                    </CardText>
                </div>
            </Card>
        },
        {
            key: 2,
            content: <Card className='testimonal-card d-flex'>
                <div className='p-4 d-flex align-items-center flex-column'>
                    <Row>
                        <Avatar src={require("../../../assets/img/E-commerce/Avatar3.png").default} size="40" round={true} />
                        <h3 className='mb-0 text-dark text-bold'>Jeffrey</h3>
                    </Row>
                    <h5 className='mb-0 text-dark text-bold'>Contractor</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        color2='#ff6a00'
                        edit={false}
                        className='mb-2'
                    />
                    <CardText className='text-bold text-dark'>
                        CONSTRO provided keen prices and high quality alternatives to our existing products, although changing our spec was on the list they contacted us at the right time so it worked out very well.
                    </CardText>
                </div>
            </Card>
        },
        {
            key: 3,
            content: <Card className='testimonal-card d-flex'>
                <div className='p-4 d-flex align-items-center flex-column'>
                    <Row>
                        <Avatar src={require("../../../assets/img/E-commerce/Avatar4.png").default} size="40" round={true} />
                        <h3 className='mb-0 text-dark text-bold'>Prasanth</h3>
                    </Row>
                    <h5 className='mb-0 text-dark text-bold'>Normal Customer</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        color2='#ff6a00'
                        edit={false}
                        className='mb-2'
                    />
                    <CardText className='text-bold text-dark'>
                        I am thrilled to give a glowing review of the materials provided by CONSTRO. Due to supply chain challenges in the UK, our previous supplier was unable to meet our required lead times, leading us to choose CMD for the procurement needs of two of our projects.
                    </CardText>
                </div>
            </Card>
        },
        {
            key: 4,
            content: <Card className='testimonal-card d-flex'>
                <div className='p-4 d-flex align-items-center flex-column'>
                    <Row>
                        <Avatar src={require("../../../assets/img/E-commerce/Avatar7.png").default} size="40" round={true} />
                        <h3 className='mb-0 text-dark text-bold'>Karthi</h3>
                    </Row>
                    <h5 className='mb-0 text-dark text-bold'>Normal Customer</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        color2='#ff6a00'
                        edit={false}
                        className='mb-2'
                    />
                    <CardText className='text-bold text-dark'>
                        Used CONSTRO for materials for a while now. Always delivered on time as promised. Prices constantly competitive and easy to deal with. Always there to deal with any queries and ad hoc quotes always done timely. 100% recommend.
                    </CardText>
                </div>
            </Card>
        },
        {
            key: 5,
            content: <Card className='testimonal-card d-flex'>
                <div className='p-4 d-flex align-items-center flex-column'>
                    <Row className='align-items-center'>
                        <Avatar src={require("../../../assets/img/E-commerce/Avatar8.png").default} size="40" round={true} />
                        <h3 className='mb-0 text-dark text-bold'>Subham</h3>
                    </Row>
                    <h5 className='mb-0 text-dark text-bold'>Builder</h5>
                    <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        color2='#ff6a00'
                        edit={false}
                        className='mb-2'
                    />
                    <CardText className='text-bold text-dark'>
                        Easy to communicate with, product quality was fantastic. I have this company as our preferred supplier now- it's such a relief to find good quality and professional services at reasonable prices.
                    </CardText>
                </div>
            </Card>
        },
    ].map((slide, index) => {
        return { ...slide, onClick: () => setGoToSlide(index) };
    });

    const handleTouchStart = (evt) => {
        if (!enableSwipe) return;

        const firstTouch = evt.touches[0];
        setTouchState({
            xDown: firstTouch.clientX,
            yDown: firstTouch.clientY,
        });
    };

    const handleTouchMove = (evt) => {
        if (!enableSwipe || (!touchState.xDown && !touchState.yDown)) return;

        const xUp = evt.touches[0].clientX;
        const yUp = evt.touches[0].clientY;

        const xDiff = touchState.xDown - xUp;
        const yDiff = touchState.yDown - yUp;

        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            if (xDiff > 0) {
                /* left swipe */
                setGoToSlide(goToSlide + 1);
            } else {
                /* right swipe */
                setGoToSlide(goToSlide - 1);
            }
        }
    };

    const [touchState, setTouchState] = useState({
        xDown: null,
        yDown: null,
    });

    return (
        <section className='pb-0'>
            <div className='d-flex justify-content-between'>
                <h1 className='text-dark ff-bold'>Testimonals</h1>
            </div>
            <Row>
                <Col lg={6} md={6} sm={12} className='d-flex justify-content-lg-start align-items-md-start justify-content-md-start align-items-lg-start justify-content-center align-items-center'>
                    <img className='img-fluid' src={require("../../../assets/img/E-commerce/Home/Testimonals/testimonial.png").default} />
                </Col>
                <Col lg={6} md={6} sm={12} className='d-flex align-items-center'>
                    <div
                        style={{ width: "100%", height: "500px", margin: "0 auto" }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                    >
                        <Carousel
                            slides={slides}
                            goToSlide={goToSlide}
                            offsetRadius={offsetRadius}
                            showNavigation={showNavigation}
                            animationConfig={configOption}
                            className="img-fluid"
                            offsetRadius={0}
                        />
                    </div>
                </Col>
            </Row >
        </section >
    )
}

export default Testimonals