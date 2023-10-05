{/* <Carousel showArrows={false} breakPoints={breakPoints} enableAutoPlay ref={carouselRef}
                            onPrevStart={onPrevStart}
                            onNextStart={onNextStart}
                            autoPlaySpeed={3500} >
                            <div className='bg-banner-slide1 w-100 h-100'>
                                <Row className="d-flex flex-column align-items-center justify-content-center">
                                    <h2 className="banner-text mb-4 mt-2">Welcome to the Online Store</h2>
                                    <h4 className="banner-text mb-4 mt-2 text-uppercase">for all the </h4>
                                    <h2 className="banner-text mb-4 mt-2 text-uppercase">Construction Materials</h2>
                                </Row>
                            </div>
                            {
                                BannerDetails && BannerDetails.length > 0 && BannerDetails.map((item) => {
                                    return <div className='bg-banner-slide w-100 h-100'>
                                        <Row className="align-items-center justify-content-center p-5">
                                            <Col lg="8">
                                                <h4 className="text-dark mb-0">{item.text1}</h4>
                                                <h2 className="text-dark mb-0 text-uppercase">{item.text2}</h2>
                                                <h4 className="text-dark mb-0 text-uppercase">{item.text3}</h4>
                                            </Col>
                                            <Col lg="4">
                                                <img src={item.image} className="img-fluid" />
                                            </Col>
                                        </Row>
                                    </div>
                                })
                            }
                        </Carousel> */}