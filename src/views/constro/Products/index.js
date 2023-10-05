import React, { useEffect, useState } from 'react'
import IndexNavbar from "../../../components/Navbars/IndexNavbar";
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle, CardText, Button, Input } from 'reactstrap'
import allProducts from '../../../dataCenter/Products';
import { FaStar } from 'react-icons/fa'
import { BiPlusMedical } from 'react-icons/bi'
import { PiMinusBold } from 'react-icons/pi'
import Footer from "../../../components/Footer";
import { AnchorScroll } from '../../../helper';
import 'bootstrap/dist/css/bootstrap.min.css';

const Products = () => {

    var overallData = sessionStorage.getItem("overallData");
    var cartSessionData = sessionStorage.getItem("cartData");
    const [data, setData] = useState([])
    const [cartData, setCartData] = useState([])
    const [temp, setTemp] = useState([])

    useEffect(() => {
        if (overallData) {
            let a = JSON.parse(overallData)
            setData(a)
        } else {
            setData(allProducts)
        }
        // if (allProducts && allProducts.length > 0) {
        //     setData(allProducts)
        // }
    }, [overallData, allProducts])

    useEffect(() => {
        AnchorScroll()
    }, [])

    useEffect(() => {
        if (cartSessionData) {
            let a = JSON.parse(cartSessionData)
            setCartData(a)
            setTemp(a)
        }
    }, [cartSessionData])

    const increaseCount = (item) => {
        const findItem = temp.findIndex((i) => i.uniqueId === item.uniqueId)
        if (findItem === -1) {
            const result = { ...item, count: 1 }
            temp.push(result)
            const ind = data.findIndex((i) => i.uniqueId === item.uniqueId)
            if (ind >= 0) {
                data[ind].count = 1
            }
        } else {
            const ind = data.findIndex((i) => i.uniqueId === item.uniqueId)
            const ind1 = temp.findIndex((i) => i.uniqueId === item.uniqueId)
            if (ind >= 0 && ind1 >= 0) {
                const adding = item.count + 1
                data[ind].count = adding
                temp[ind1].count = adding
            }
        }
        setData([...data]);
        setTemp([...temp]);
        setCartData([...temp])
        sessionStorage.setItem("overallData", JSON.stringify(data));
        sessionStorage.setItem("cartData", JSON.stringify(temp));
    }

    const decreaseCount = (item) => {
        const findItem = temp.findIndex((i) => i.uniqueId === item.uniqueId)
        const findItem1 = data.findIndex((i) => i.uniqueId === item.uniqueId)
        if (findItem >= 0 && findItem1 >= 0) {
            const minus = item.count - 1
            temp[findItem].count = minus
            data[findItem1].count = minus
        }
        if (item.count < 1) {
            temp.splice(findItem, 1)
        }
        setData([...data]);
        setTemp([...temp]);
        setCartData([...temp])
        sessionStorage.setItem("overallData", JSON.stringify(data));
        sessionStorage.setItem("cartData", JSON.stringify(temp));
    }

    const randomCountChange = (e, item) => {
        const findItem = temp.findIndex((i) => i.uniqueId === item.uniqueId)
        const findItem1 = data.findIndex((i) => i.uniqueId === item.uniqueId)
        if (findItem >= 0 && findItem1 >= 0) {
            if (e === "") {
                const minus = 1
                temp[findItem].count = minus
                data[findItem1].count = minus
            } else {
                const minus = Number(e)
                temp[findItem].count = minus
                data[findItem1].count = minus
            }
        }
        if (item.count < 1) {
            temp.splice(findItem, 1)
        }
        setData([...data]);
        setTemp([...temp]);
        setCartData([...temp])
        sessionStorage.setItem("overallData", JSON.stringify(data));
        sessionStorage.setItem("cartData", JSON.stringify(temp));
    }

    return (
        <div className="wrapper" >
            <div>
                <IndexNavbar cartData={cartData} data={data} setData={setData} setCartData={setCartData} />
            </div>
            {/* <div className='h-75'>
                <img className='w-100 h-50' src={require('../../../assets/img/E-commerce/product2.png').default}></img>
            </div> */}
            <section className='mt-5 pt-5 py-0' id='cement'>
                <h2 className='text-dark border-dark'>Cements</h2>
                <Row>
                    {
                        data && data.length > 0 && data.filter((item) => item.category === 'cement').map((item) => {
                            return <Col lg={3} md={4} sm={6} xs={12}>
                                <Card className='cardstyles'>
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
                                    {
                                        item && item.count > 0 ?
                                            <Button className={item.count > 0 ? 'd-flex justify-content-between align-items-center mx-2 my-2 px-3 addcartbtn1' : 'd-flex justify-content-between align-items-center mx-2 my-2 addcartbtn'}>
                                                <div onClick={() => decreaseCount(item)} className='mr-2'>
                                                    <PiMinusBold color="#FFFFFF" className='font-weight-bold' />
                                                </div>
                                                <Input
                                                    id="quantity"
                                                    name="quantity"
                                                    type="text"
                                                    className='font-weight-bold text-center'
                                                    onKeyPress={(e) => {
                                                        if (!/[0-9]/.test(Number(e.key))) {
                                                            e.preventDefault()
                                                        }
                                                    }}
                                                    value={item.count}
                                                    onChange={(e) => randomCountChange(e.target.value, item)}
                                                />
                                                <div onClick={() => increaseCount(item)} className='ml-2'>
                                                    <BiPlusMedical color="#FFFFFF" className='font-weight-bold' />
                                                </div>
                                            </Button>
                                            : <Button className='mx-2 my-2 addcartbtn' onClick={() => increaseCount(item)}>
                                                Add to cart
                                            </Button>
                                    }
                                </Card>
                            </Col>
                        })
                    }
                </Row>
            </section>
            <Footer />
        </div>
    )
}

export default Products