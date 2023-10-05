import React from 'react'
import { Route, Switch, BrowserRouter } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
// Custom
import Home from "../views/constro/Home";
import Products from '../views/constro/Products';
import Contact from '../views/constro/Contact';


export default function Routes() {
    React.useEffect(() => {
        AOS.init();
    });

    React.useEffect(() => {
        document.body.classList.toggle("index-page");
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return function cleanup() {
            document.body.classList.toggle("index-page");
        };

    }, []);
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={(props) => <Home {...props} />} />
                    <Route exact path="/products" render={(props) => <Products {...props} />} />
                    <Route exact path="/contact" render={(props) => <Contact {...props} />} />
                </Switch>
            </BrowserRouter>
        </>
    )
}