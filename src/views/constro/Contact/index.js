import React, { useEffect, useState } from 'react'
import IndexNavbar from '../../../components/Navbars/IndexNavbar'
import { useForm, Controller } from "react-hook-form"
import { Button, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import Footer from "../../../components/Footer";
import AsyncSelect from 'react-select/async'
import { components } from 'react-select'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaPlus } from 'react-icons/fa'
import { AnchorScroll } from '../../../helper';
import 'bootstrap/dist/css/bootstrap.min.css';

const placeholderText = {
    label: 'Select City',
    value: ''
}

const Contact = () => {
    const { register, handleSubmit, control } = useForm()

    const [count, setCount] = useState([1])

    const [items, setItems] = useState([
        { value: 'cement', label: 'Cement' },
        { value: 'bricks', label: 'Bricks' },
        { value: 'sand', label: 'Sand' }
    ])

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

    useEffect(() => {
        AnchorScroll()
    }, [])

    const onSubmit = (value, type) => {
        const answer = count.map((item, index) => {
            return `${value[`material${index}`].label} - ${value[`quantity${index}`]}`
        })
        const materialData = answer && answer.join()
        if (materialData) {
            var formattedBody =
                `Dear Constro,\n` +
                `We are interested in purchasing the following materials:\n\n` +
                `Name - ${value.firstName} \n` +
                `Email - ${value.emailId} \n` +
                `Phone Number - ${value.mobile} \n` +
                `Address - ${value.address}, ${value.city} \n` +
                `Materials - ${materialData} \n`
                ;
            var mailToLink = "mailto:theconstro@gmail.com?cc=naveenastro13@gmail.com&subject=Need Quotation&body=" + encodeURIComponent(formattedBody);
            window.location.href = mailToLink;
        }
    }

    const filterItems = (inputValue) => {
        return items.filter((i) =>
            i.label.toLowerCase().includes(inputValue.toLowerCase())
        );
    };

    const loadOptions = (
        inputValue,
        callback
    ) => {
        setTimeout(() => {
            callback(filterItems(inputValue));
        }, 1000);
    };

    const increaseCount = () => {
        const temp = [...count]
        temp.push(count.length + 1)
        setCount(temp)
    }

    const decreaseCount = () => {
        if (count.length > 1) {
            const temp = [...count]
            temp.pop()
            setCount(temp)
        }
    }

    return (
        <div className="wrapper" >
            <div>
                <IndexNavbar cartData={cartData} data={data} setData={setData} setCartData={setCartData} />
            </div>
            <section className='mt-5'>
                <h1 className='text-dark ff-bold text-center'><b>Get a Quote</b></h1>
                <Row>
                    <Col md={6} xs={12} className='d-flex align-items-center'>
                        <img className='img-fluid' src={require("../../../assets/img/E-commerce/Quotation/quote-1.png").default} />
                    </Col>
                    <Col md={6} xs={12}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <FormGroup>
                                <Label>Name</Label>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    render={({ field }) => <Input className='form-control-quote' {...field} type='text' required />}
                                />
                            </FormGroup>
                            <Row className='d-flex align-items-center'>
                                <Col md={6} xs={6}>
                                    <FormGroup>
                                        <Label>Email Id</Label>
                                        <Controller
                                            name="emailId"
                                            control={control}
                                            render={({ field }) => <Input className='form-control-quote' {...field} type='text' required />}
                                        />
                                    </FormGroup>
                                </Col>
                                <Col md={6} xs={6}>
                                    <FormGroup>
                                        <Label>Phone No.</Label>
                                        <Controller
                                            name="mobile"
                                            control={control}
                                            render={({ field }) => <Input className='form-control-quote' {...field} type='text' required />}
                                        />
                                    </FormGroup>
                                </Col>
                            </Row>
                            <FormGroup>
                                <Label>City</Label>
                                <Controller
                                    name="city"
                                    control={control}
                                    render={({ field }) => <Input defaultValue="" className='form-control-quote' type='select' placeholder={placeholderText} {...field}>
                                        <option disabled={true} value=''>Select City</option>
                                        <option value='chennai'>Chennai</option>
                                        <option value='chengalpattu'>Chengalpattu</option>
                                    </Input>}
                                />
                            </FormGroup>
                            <FormGroup>
                                <Label>Address</Label>
                                <Controller
                                    name="address"
                                    control={control}
                                    render={({ field }) => <Input className='form-control-quote' {...field} type='text' required />}
                                />
                            </FormGroup>
                            <Row className='d-flex align-items-center'>
                                <Col md={6} xs={6}>
                                    <FormGroup className='mb-0'>
                                        <Label>Materials you need</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={3} xs={3}>
                                    <FormGroup className='mb-0'>
                                        <Label>Quantity</Label>
                                    </FormGroup>
                                </Col>
                                <Col md={3} xs={3}>
                                    <FormGroup>
                                        <Button className='btn btn-sm add-btn mt-2' onClick={() => increaseCount()}><FaPlus color='white' /> Add more</Button>
                                    </FormGroup>
                                </Col>
                            </Row>
                            <Row>
                                {
                                    count && count.length > 0 && count.map((item, index) => {
                                        return <>
                                            <Col md={6} xs={6}>
                                                <FormGroup>
                                                    <Controller
                                                        name={`material${index}`}
                                                        id={`material${index}`}
                                                        control={control}
                                                        render={({ field }) => <AsyncSelect
                                                            noOptionsMessage={() => 'Type in your material name (for eg. Cement, Bricks etc.) '}
                                                            loadingMessage={() => 'searching...'}
                                                            isClearable={true}
                                                            className='react-select'
                                                            classNamePrefix='select'
                                                            name={`material${index}`}
                                                            id={`material${index}`}
                                                            loadOptions={loadOptions}
                                                            required
                                                            {...field}
                                                        />}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={3} xs={3}>
                                                <FormGroup>
                                                    <Controller
                                                        name={`quantity${index}`}
                                                        id={`quantity${index}`}
                                                        control={control}
                                                        render={({ field }) => <Input className='form-control-quote' {...field} type='number' required />}
                                                    />
                                                </FormGroup>
                                            </Col>
                                            <Col md={3} xs={3}>
                                                <FormGroup>
                                                    <Button type='button' className='btn btn-sm delete-btn mt-2' onClick={() => decreaseCount()}><RiDeleteBinLine /></Button>
                                                </FormGroup>
                                            </Col>
                                        </>
                                    })
                                }
                            </Row>
                            <FormGroup>
                                <Row className='d-flex justify-content-end align-items-center mt-5'>
                                    <Button type='submit' className='btn btn-md addcartbtn'>Send via Mail</Button>
                                    {/* <Button type='submit' className='btn btn-md addcartbtn'>Send via Whatsapp</Button> */}
                                </Row>
                            </FormGroup>
                        </Form>
                    </Col>
                </Row>
            </section>
            <Footer />
        </div>
    )
}

export default Contact