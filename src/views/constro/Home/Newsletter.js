import React from 'react'
import { Button, Col, Row } from 'reactstrap'
import { useHistory } from 'react-router-dom'

const Newsletter = () => {
    const history = useHistory()
    return (
        <section className='pb-0'>
            <div className='quote-bg p-5'>
                <Row className='d-flex justify-content-center align-items-center flex-column text-center'>
                    <h1 className='ff-bold text-dark mb-1'>Not in the mood of ordering now ? Get a Quote for your future orders...</h1>
                    <Button type="button" className='addcartbtn btn btn-lg' onClick={() => history.push('/contact')}>Get A Quote</Button>
                </Row>
            </div>
        </section>
    )
}

export default Newsletter