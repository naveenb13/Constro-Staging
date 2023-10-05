import React, { useEffect } from "react";
import Banner from "./Banner";
import Category from "./Category";
import Topsellers from "./Topsellers";
import Footer from "../../../components/Footer";
import Testimonals from "./Testimonals";
import Steps from "./Steps";
import Newsletter from "./Newsletter";
import { AnchorScroll } from "../../../helper";
import 'bootstrap/dist/css/bootstrap.min.css';

const Home = () => {

    useEffect(() => {
        AnchorScroll()
    }, [])
    return (
        <>
            <div className="wrapper" >
                <Banner />
                <Steps />
                <Category />
                <Topsellers />
                <Newsletter />
                <Testimonals />
                <Footer />
            </div>
        </>
    );
}

export default Home