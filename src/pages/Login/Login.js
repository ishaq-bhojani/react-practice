import React, { useContext } from 'react';
import { Form, Input, Button, } from 'antd';
// InputNumber, Cascader, Select, Row, Col, Checkbox,
import './Login.scss'
import icon from '../../Images/Social.png'
import { Link } from "react-router-dom";
import AuthContext from '../../Context/AuthContect';



const Login = () => {
    const authuseCtx = useContext(AuthContext)
    const onFinish = (values) => {
        console.log('Success:', values);
        authuseCtx.setToogle(true)
        localStorage.setItem("loggedIn", "1")
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };


    return (
        <div className="Loginmain-div">
            <Form
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="on"
            >
                <section className="h-100">
                    <div className="container py-5">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-xl-6 bg-transparent-user">
                                <div className="card-body p-md-5 text-black shadow p-3 mb-5 bg-body rounded">
                                    <h1 className="mb-5 text-capitalize d-flex justify-content-center text-muted fw-bold">
                                        <img width="300px" height="150px" src={icon} alt="" />
                                    </h1>
                                    <h3 className="fw-bold">Welcome back!</h3>
                                    <h6 className="mb-5">Log in by typing your email and password.</h6>
                                    <div className="row">
                                        <div className="form-outline mb-4">
                                            <Form.Item
                                                name="email"
                                                rules={[
                                                    { required: true, message: 'Please input your Email!' },
                                                    { type: 'email', message: 'The input is not valid E-mail!', },
                                                ]}
                                            >
                                                <Input size="large" />
                                            </Form.Item>
                                            {/* <input type="text" id="loginnameoremail" className="form-control rounded-0 form-control-lg" required /> */}
                                            <div className="d-flex justify-content-between">
                                                <label className="form-label" htmlFor="loginnameoremail"> Email address</label>
                                                {/* <a className="link-style" href="#" style={{ display: 'none' }} id="sendverfemailagain">Send Verification email</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-outline mb-1">
                                        <Form.Item
                                            name="password"
                                            rules={[
                                                { required: true, message: 'Please input your password!' },
                                                {min: 6, message: "Minimum 6 character required"}
                                                ]}

                                        >
                                            <Input.Password size="large" />
                                        </Form.Item>
                                        {/* <input type="password" id="loginpassword" className="form-control rounded-0 form-control-lg" required /> */}
                                        <div className="d-flex justify-content-between">
                                            <label className="form-label" htmlFor="loginpassword">Password</label>
                                            {/* <a className="link-style" href="./forgetpassword.html">Forget Password</a> */}
                                        </div>
                                    </div>
                                    <div className="form-check form-switch">
                                        <input className="form-check-input shadow-remove" type="checkbox" id="flexSwitchCheckDefault" />
                                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Show
                                            Password</label>
                                    </div>
                                    <div id="emailHelp" className="form-text mb-4 text-center pt-4">
                                        Dont have an account <Link to="/signup">Signup</Link>
                                    </div>
                                    <div className="pt-3">
                                        <Form.Item>
                                            <Button type="primary" htmlType="submit">
                                                Submit
                                            </Button>
                                        </Form.Item>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Form>
        </div>
    )
}

export default Login;
