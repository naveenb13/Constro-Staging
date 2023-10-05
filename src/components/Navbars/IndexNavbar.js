import React, { useEffect, useState, useRef, createRef } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { AnchorScroll } from "../../helper";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Row,
  Col,
  Button,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownItem,
  DropdownMenu,
  Label,
  FormGroup,
  Form,
  Input
} from "reactstrap";
import { FaTimes } from "react-icons/fa";
import { FiMenu } from 'react-icons/fi';
import { BsFillCartPlusFill } from 'react-icons/bs'
import Drawer from 'react-modern-drawer'
import 'react-modern-drawer/dist/index.css'
import { BiPlusMedical } from 'react-icons/bi'
import { PiMinusBold } from 'react-icons/pi'
import { FaArrowLeft } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { BsPersonCircle } from 'react-icons/bs'
import { LoginSocialGoogle } from "reactjs-social-login";
import { ToastContainer, toast } from 'react-toastify';
import { Storage } from '../../services/service';
import Avatar from 'react-avatar';
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import { FaUserCircle, FaCartPlus, FaBookmark } from "react-icons/fa";
import { useForm, Controller } from "react-hook-form"
import allProducts from '../../dataCenter/Products';

const placeholderText = {
  label: 'Select City',
  value: ''
}

export default function IndexNavbar(props) {
  const formWizardRef = createRef();
  const pathname = useLocation().pathname
  const history = useHistory()
  const getUser = Storage.get("constroUserdata")
  const auth = Storage.get("constroAccesstoken")
  const { cartData, data, setData, setCartData } = props
  const initialValue = 0;
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [token, setToken] = useState("")
  const [userData, setuserData] = useState({})
  const [toggleIndex, setToggleIndex] = useState(0)

  const [formName, setFormName] = useState('')
  const [formMail, setFormMail] = useState('')
  const [formNumber, setFormNumber] = useState('')
  const [formCity, setFormCity] = useState('')
  const [formAddress, setFormAddress] = useState('')

  const { register, handleSubmit, control } = useForm()

  useEffect(() => {
    if (getUser && auth && auth !== "") {
      setToken(auth)
      setuserData(getUser)
      setFormName(getUser.name)
      setFormMail(getUser.email)
    }
  }, [getUser && getUser !== null, auth && auth !== null])

  const [isOpen, setIsOpen] = React.useState(false)
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState)
  }

  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };

  const handleComplete = () => {
    const answer = cartData.map((item, index) => {
      return `${item.name}(${item.subType}) - ${item.count}`
    })
    const materialData = answer && answer.join()
    if (materialData) {
      var formattedBody =
        `Dear Constro,\n` +
        `We are interested in purchasing the following materials:\n\n` +
        `Name - ${formName} \n` +
        `Email - ${formMail} \n` +
        `Phone Number - ${formNumber} \n` +
        `Delivery Address - ${formAddress}, ${formCity} \n` +
        `Materials - ${materialData} \n`
        ;
      let details = navigator.userAgent;
      let regexp = /android|iphone|kindle|ipad/i;
      let isMobileDevice = regexp.test(details);
      if (isMobileDevice) {
        var whatsappToLink = `https://api.whatsapp.com/send/?text=${encodeURIComponent(formattedBody)}&phone=:+91${9940578802}&type=phone_number&app_absent=0`
        window.open(whatsappToLink, '_blank')
        sessionStorage.setItem("cartData", []);
        sessionStorage.setItem("overallData", JSON.stringify(allProducts));
        history.push("/")
      } else {
        var whatsappToLink = `https://web.whatsapp.com/send?phone=${9940578802}&text=${encodeURIComponent(formattedBody)}&app_absent=0`
        window.open(whatsappToLink, '_blank')
        sessionStorage.setItem("cartData", []);
        sessionStorage.setItem("overallData", JSON.stringify(allProducts));
        history.push("/")
      }
    }
  };

  const handleNext = () => {
    if (toggleIndex === 1) {
      if (formName === "" || formMail === "" || formNumber === "" || formCity === "" || formAddress === "") {
        toast("Some inputs are empty");
      } else {
        formWizardRef.current?.nextTab();
      }
    } else {
      formWizardRef.current?.nextTab();
    }
  };

  const customTitleTemplate = () => {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "1rem",
        }}
      >
        <h2
          className="ff-bold mb-1"
          style={{
            color: "#094899",
          }}
        >
          Shopping Cart
        </h2>
        <p
          className="ff-bold"
          style={{
            color: "#000000",
          }}
        >
          You have {cartData && cartData.length ? cartData.length : 0} {cartData && cartData.length > 1 ? 'items' : 'item'} added in your cart
        </p>
      </div>
    );
  }

  const totalPrice = () => {
    const result = cartData.reduce((accumulator, currentValue) => accumulator + (Number(currentValue.salePrice) * currentValue.count), initialValue);
    return result
  }

  const increaseCount = (item) => {
    const findItem = data.findIndex((i) => i.uniqueId === item.uniqueId)
    const findItem1 = cartData.findIndex((i) => i.uniqueId === item.uniqueId)
    if (findItem >= 0 && findItem1 >= 0) {
      const adding = item.count + 1
      data[findItem].count = adding
      cartData[findItem1].count = adding
    }
    setData([...data]);
    setCartData([...cartData])
    sessionStorage.setItem("overallData", JSON.stringify(data));
    sessionStorage.setItem("cartData", JSON.stringify(cartData));
  }

  const decreaseCount = (item) => {
    const findItem = data.findIndex((i) => i.uniqueId === item.uniqueId)
    const findItem1 = cartData.findIndex((i) => i.uniqueId === item.uniqueId)
    if (findItem >= 0 && findItem1 >= 0) {
      if (item.count > 1) {
        const minus = item.count - 1
        data[findItem].count = minus
        cartData[findItem1].count = minus
      } else {
        const minus = item.count - 1
        data[findItem].count = minus
        cartData[findItem1].count = minus
        cartData.splice(findItem1, 1)
      }
    }
    setData([...data]);
    setCartData([...cartData])
    sessionStorage.setItem("overallData", JSON.stringify(data));
    sessionStorage.setItem("cartData", JSON.stringify(cartData));
  }

  const notify = () => toast("Login Unsuccessfull.!");

  const logout = () => {
    Storage.logout()
    setToken("")
    setuserData({})
    toast("Logout Successfull.!");
  }

  const loginUser = (item) => {
    Storage.set("constroAccesstoken", item.access_token);
    Storage.set("constroUserdata", item);
    setToken(item.access_token)
    setuserData(item)
    toast("Login Successfull.!");
  }

  return (
    <Navbar expand="lg" className="fixed-top border-bottom border-dark">
      <div className="w-100">
        <Row className="d-flex align-items-center justify-content-between">
          <Col lg={2}>
            <div className="d-flex align-items-center justify-content-between">
              <NavbarBrand className="mb-1" to="/" tag={Link} id="navbar-brand" onClick={() => AnchorScroll()}>
                <img src={require('../../assets/img/E-commerce/logo.png').default} alt='logo' className='img-fluid' width={120} />
              </NavbarBrand>
              <button
                aria-expanded={collapseOpen}
                className="navbar-toggler navbar-toggler"
                onClick={toggleCollapse}
              >
                <FiMenu className="text-dark" size="24" />
              </button>
            </div>
          </Col>
          <Col lg="6" className="text-lg-center">
            <Collapse
              className={"justify-content-end nav-mobile" + collapseOut}
              navbar
              isOpen={collapseOpen}
              onExiting={onCollapseExiting}
              onExited={onCollapseExited}
            >
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column flex-lg-row justify-content-between">
                  <Nav className="nav-link-space d-flex flex-column flex-lg-row">
                    <NavItem className="mb-3 mb-lg-0">
                      <Link to="/" className={`nav-text ff-book font-style px-3 mr-4 ${pathname === '/' && 'menu-active rounded-lg'}`}>Home</Link>
                    </NavItem>
                    <NavItem className="mb-3 mb-lg-0">
                      <Link to="/products" className={`nav-text ff-book font-style px-3 mr-4 ${pathname === '/products' && 'menu-active rounded-lg'}`}>Products</Link>
                    </NavItem>
                    <NavItem>
                      <Link to="/contact" className={`nav-text ff-book font-style px-3 mr-4 ${pathname === '/contact' && 'menu-active rounded-lg'}`}>Get a Quote</Link>
                    </NavItem>
                  </Nav>
                </div>
                <div className="navbar-collapse-header">
                  <Row>
                    <Col className="collapse-close" xs="6">
                      <button
                        aria-expanded={collapseOpen}
                        onClick={toggleCollapse}
                      >
                        <FaTimes className="pf-text-secondary" size="24" />
                      </button>
                    </Col>
                  </Row>
                </div>
              </div>
            </Collapse>
          </Col>
          <Col lg="4" className="justify-content-lg-end align-items-lg-end justify-content-between align-items-center d-flex nav-mobile1">
            <Button className='mx-2 my-2 py-2 addcartbtn d-flex align-items-center justify-content-center flex-row btn-sm' onClick={toggleDrawer}>
              <BsFillCartPlusFill color="#FFFFFF" className='font-weight-bold' />
              <span className="mx-2 font-weight-bold">Cart</span>
              <span className="font-weight-bold bg-btn-count-icon">{cartData && cartData.length ? cartData.length : 0}</span>
            </Button>
            {
              token && userData ?
                <UncontrolledDropdown className='dropdown-user nav-item align-items-center' direction="down">
                  <DropdownToggle href='/' tag='a' className='align-items-center' onClick={e => e.preventDefault()}>
                    <div className='mx-2 my-2 py-1 d-flex align-items-center justify-content-center flex-row'>
                      <Avatar src={userData && userData.picture} size="30" round={true} />
                    </div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-menu-right optionpost p-2">
                    <span className="mx-2 optionpostname font-weight-bold">Hello, {userData && userData.name} 👋</span>
                    <DropdownItem to='#' onClick={() => logout()}>
                      <span className='align-middle optionpostitem'>Logout</span>
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>
                : <LoginSocialGoogle
                  client_id="715313534490-h93t0bni0cf00harl89koelugt732uln.apps.googleusercontent.com"
                  discoveryDocs="claims_supported"
                  scope="profile email"
                  access_type="offline"
                  onResolve={({ provider, data }) => {
                    loginUser(data)
                  }}
                  onReject={({ error }) => {
                    notify();
                  }}
                >
                  <Button className='mx-2 my-2 py-2 addcartbtn d-flex align-items-center justify-content-center flex-row btn-sm'> <FcGoogle />&nbsp;Login</Button>
                </LoginSocialGoogle>
            }
          </Col>
        </Row>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction='right'
          className="drawerspec"
          lockBackgroundScroll={true}
        >
          <div className="d-flex flex-column">
            <div className="d-flex justify-content-start align-items-center cart-text-bg pl-1">
              <FaArrowLeft color="#FFFFFF" size={"1.5rem"} onClick={toggleDrawer} />
              <h3 className="text-dark mb-0 py-2 ml-2 ff-bold">Continue Shopping</h3>
            </div>
            <section className="pt-0">
              {
                cartData && cartData.length > 0 ? <FormWizard
                  onComplete={handleComplete}
                  title={customTitleTemplate()}
                  color="#094899"
                  stepSize="sm"
                  nextButtonText="Proceed"
                  onTabChange={(e) => setToggleIndex(e.prevIndex)}
                  ref={formWizardRef}
                  backButtonTemplate={(handlePrevious) => (
                    <Button type="button" className="wizardButton" onClick={handlePrevious}>
                      Back
                    </Button>
                  )}
                  nextButtonTemplate={() => (
                    <Button type="button" className="wizardButton" onClick={handleNext}>
                      Proceed
                    </Button>
                  )}
                  finishButtonTemplate={(handleComplete) => (
                    <Button type="button" className="wizardButton" onClick={handleComplete}>
                      Place Order
                    </Button>
                  )}
                >
                  <FormWizard.TabContent title="Cart Items" icon={<FaCartPlus color={toggleIndex !== 0 && "#094899"} />}>

                    <Row className="py-2 align-items-center">
                      <Col lg={2} md={2} sm={2} xs={3}>
                        <h6 className="text-dark text-center">Image</h6>
                      </Col>
                      <Col lg={6} md={5} sm={6} xs={5}>
                        <h6 className="text-dark">Product</h6>
                      </Col>
                      <Col lg={2} md={3} sm={2} xs={2}>
                        <h6 className="text-dark text-center">Qty</h6>
                      </Col>
                      <Col lg={2} md={2} sm={2} xs={2} className="text-center">
                        <h6 className="text-dark text-center">Price</h6>
                      </Col>
                    </Row>
                    {
                      cartData.map((item) => {
                        return <Row className="border-bottom border-top py-2 align-items-center">
                          <Col lg={2} md={2} sm={2} xs={3}>
                            <img className="img-fluid" src={item.image}></img>
                          </Col>
                          <Col lg={6} md={5} sm={6} xs={5}>
                            <p className="text-dark">{item.name}</p>
                            <p className="text-dark">{item.subType}</p>
                          </Col>
                          <Col lg={2} md={3} sm={2} xs={2} className="d-flex flex-column align-items-center justify-content-around flex-lg-row flex-md-row countGrid py-1 px-0">
                            <PiMinusBold color="#008000" className='font-weight-bold' onClick={() => decreaseCount(item)} />
                            <span className='font-weight-bold'>{item.count}</span>
                            <BiPlusMedical color="#FF0000" className='font-weight-bold' onClick={() => increaseCount(item)} />
                          </Col>
                          <Col lg={2} md={2} sm={2} xs={2} className="text-center">
                            <p className="text-dark">{item.salePrice * item.count}</p>
                          </Col>
                        </Row>
                      })
                    }
                    <Row className="d-flex flex-column mt-4">
                      <Col className="d-flex justify-content-between flex-row">
                        <h4 className="text-blue">Total amount before shipping cost</h4>
                        <h4 className="text-dark">- {totalPrice()}.00</h4>
                      </Col>
                      <Col className="d-flex justify-content-between flex-row">
                        <h4 className="text-blue">Shipping cost</h4>
                        <h4 className="text-dark">- 0.00</h4>
                      </Col>
                      <Col className="d-flex justify-content-between flex-row">
                        <h4 className="text-blue">Final total amount</h4>
                        <h4 className="text-dark">- {totalPrice()}.00</h4>
                      </Col>
                    </Row>
                  </FormWizard.TabContent>
                  <FormWizard.TabContent title="Personal Details" icon={<FaUserCircle color={toggleIndex !== 1 && "#094899"} />}>
                    <Row>
                      <Col md={12} xs={12}>
                        <FormGroup className="text-left">
                          <Label>Name</Label>
                          <Controller
                            name="firstName"
                            control={control}
                            render={({ field }) => <Input defaultValue={formName} className='form-control-quote' {...field} type='text' value={formName} required onChange={(e) => setFormName(e.target.value)} />}
                          />
                        </FormGroup>
                        <Row className='d-flex align-items-center'>
                          <Col md={6} xs={6}>
                            <FormGroup className="text-left">
                              <Label>Email Id</Label>
                              <Controller
                                name="emailId"
                                control={control}
                                render={({ field }) => <Input defaultValue={formMail} className='form-control-quote' {...field} type='text' value={formMail} required onChange={(e) => setFormMail(e.target.value)} />}
                              />
                            </FormGroup>
                          </Col>
                          <Col md={6} xs={6}>
                            <FormGroup className="text-left">
                              <Label>Phone No.</Label>
                              <Controller
                                name="mobile"
                                control={control}
                                render={({ field }) => <Input defaultValue={formNumber} className='form-control-quote' {...field} type='text' required onChange={(e) => setFormNumber(e.target.value)} />}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <FormGroup className="text-left">
                          <Label>City</Label>
                          <Controller
                            name="city"
                            control={control}
                            render={({ field }) => <Input defaultValue={formCity} className='form-control-quote' type='select' placeholder={placeholderText} {...field} required onChange={(e) => setFormCity(e.target.value)}>
                              <option disabled={true} value=''>Select City</option>
                              <option value='chennai'>Chennai</option>
                              <option value='chengalpattu'>Chengalpattu</option>
                            </Input>}
                          />
                        </FormGroup>
                        <FormGroup className="text-left">
                          <Label>Address</Label>
                          <Controller
                            name="address"
                            control={control}
                            render={({ field }) => <Input defaultValue={formAddress} className='form-control-quote' {...field} type='text' required onChange={(e) => setFormAddress(e.target.value)} />}
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </FormWizard.TabContent>
                  <FormWizard.TabContent title="Checkout" icon={<FaBookmark color={toggleIndex !== 2 && "#094899"} />}>
                    <h3 className="text-dark text-center">Order Details</h3>
                    <Row className="pb-2 align-items-center">
                      <Col lg={2} md={2} sm={2} xs={3}>
                        <h6 className="text-dark text-center">Image</h6>
                      </Col>
                      <Col lg={6} md={5} sm={6} xs={5}>
                        <h6 className="text-dark">Product</h6>
                      </Col>
                      <Col lg={2} md={3} sm={2} xs={2}>
                        <h6 className="text-dark text-center">Qty</h6>
                      </Col>
                      <Col lg={2} md={2} sm={2} xs={2} className="text-center">
                        <h6 className="text-dark text-center">Price</h6>
                      </Col>
                    </Row>
                    {
                      cartData.map((item) => {
                        return <Row className="border-bottom border-top py-2 align-items-center">
                          <Col lg={2} md={2} sm={2} xs={3}>
                            <img className="img-fluid" src={item.image}></img>
                          </Col>
                          <Col lg={6} md={5} sm={6} xs={5}>
                            <p className="text-dark">{item.name}</p>
                            <p className="text-dark">{item.subType}</p>
                          </Col>
                          <Col lg={2} md={3} sm={2} xs={2} className="d-flex flex-column align-items-center justify-content-around flex-lg-row flex-md-row py-1 px-0">
                            <span className='font-weight-bold'>{item.count}</span>
                          </Col>
                          <Col lg={2} md={2} sm={2} xs={2} className="text-center">
                            <p className="text-dark">{item.salePrice * item.count}</p>
                          </Col>
                        </Row>
                      })
                    }
                    <Row className="d-flex flex-column mt-4">
                      <Col className="d-flex justify-content-between flex-row">
                        <h4 className="text-blue">Final total amount</h4>
                        <h4 className="text-dark">- {totalPrice()}.00</h4>
                      </Col>
                    </Row>
                    <Row className="d-flex justify-content-start flex-column mt-4 deliveryGrid py-2">
                      <h4 className="text-blue">Delivery Address</h4>
                      <h4 className="text-dark mb-0">{formName}</h4>
                      <h5 className="text-dark mb-0">{formAddress}</h5>
                      <h5 className="text-dark mb-0">{formCity}</h5>
                      <h5 className="text-dark mb-0">{formNumber}</h5>
                    </Row>
                  </FormWizard.TabContent>
                </FormWizard> : <div>
                  <img className="img-fluid" src={require('../../assets/img/E-commerce/cartempty.png').default}></img>
                </div>
              }
            </section>
          </div>
        </Drawer>
      </div>
      <ToastContainer />
    </Navbar>
  );
}
