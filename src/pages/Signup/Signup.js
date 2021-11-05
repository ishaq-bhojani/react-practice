import React, { useState } from 'react'
import { auth, createUserWithEmailAndPassword, db, collection, setDoc, doc } from '../../config/firebase';
import { getAuthErrorMsg } from '../../utils/errorHandles';
import { Button, Card, notification, Form, Input, Spin } from 'antd'
import { Link, withRouter } from 'react-router-dom';
import logoBlack from '../../assets/images/logo-black.png';
import { LockOutlined, MailOutlined, UserOutlined } from '@ant-design/icons';
function Signup(props) {
    const [loading, setLoading] = useState(false);
    if(props.user){
        if(!loading){
            props.history.push("/");
        }else{
            return(
                <div className="center-container">
                    <Spin size="large" />
                </div>
            )
        }
    }
    const FormHandler = (values) => {
        const { fullName, email, password } = values;
        setLoading(true)
        createUserWithEmailAndPassword(auth, email, password).then((result) => {
            const usersRef = collection(db, "users");
            const userData = {
                email,
                fullName,
                userId: result.user.uid,
                createdAt: new Date().getTime()
            };
            setDoc(doc(usersRef, result.user.uid), userData).then(() => {
                setLoading(false);
                props.history.push("/")
            }).catch((err) => {
                if (err) {
                    setLoading(false);
                    console.log({ err })
                    notification.error({ message: "Something Went Wrong" })
                }
            })
        }).catch((error) => {
            if (error) {
                setLoading(false);
                console.log({ error })
                notification.error({ message: getAuthErrorMsg(error.code) })
            }
        })
    }
    return (
        <div className="authContainer">
            <Card className="authCard">
                <img className="auth-logo" src={logoBlack} alt="Logo" />
                <Form autoComplete="false" onFinish={FormHandler}>
                    <Form.Item name="fullName" rules={
                        [
                            { required: true, message: "Please Enter Your Full Name" },
                        ]
                    } >
                        <Input type="text" placeholder="Full Name" prefix={<UserOutlined />} />
                    </Form.Item>
                    <Form.Item name="email" rules={
                        [
                            { required: true, message: "Please Enter Email" },
                            { type: "email", message: "Please Provide Valid Email" }
                        ]
                    } >
                        <Input type="text" placeholder="Email" prefix={<MailOutlined />} />
                    </Form.Item>
                    <Form.Item name="password" rules={
                        [
                            { required: true, message: "Please Enter Password" },
                            { min: 6, message: 'Password must be minimum 6 characters.' }
                        ]
                    } >
                        <Input type="password" placeholder="Password" prefix={<LockOutlined />} />
                    </Form.Item>
                    <Button htmlType="submit" className="auth-btn" type="primary" disabled={loading} loading={loading}>Signup</Button>
                </Form>
                <br />
                <Link to="/login">Already Have An Account</Link>
            </Card>

        </div>
    )
}

export default withRouter(Signup)