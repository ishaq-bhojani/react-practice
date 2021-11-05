import React, { useState } from 'react'
import { auth, signInWithEmailAndPassword } from '../../config/firebase';
import { Button, Card, notification, Form, Input } from 'antd'
import { Link } from 'react-router-dom';
import logoBlack from '../../assets/images/logo-black.png';
import { LockOutlined, MailOutlined } from '@ant-design/icons';
import { getAuthErrorMsg } from '../../utils/errorHandles';
function Login() {
    const [loading, setLoading] = useState(false);

    const FormHandler = (values) => {
        const { email, password } = values;
        setLoading(true)
        signInWithEmailAndPassword(auth, email, password).then((result) => {
            setLoading(false);
        }).catch((error) => {
            if (error) {
                setLoading(false);
                notification.error({ message: getAuthErrorMsg(error.code) })
            }
        })
    }

    return (
        <div className="authContainer">
            <Card className="authCard">
                <img className="auth-logo" src={logoBlack} alt="Logo" />
                <Form autoComplete="false" onFinish={FormHandler}>
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
                    <Button htmlType="submit" className="auth-btn" type="primary" disabled={loading} loading={loading}>Login</Button>
                </Form>
                <br />
                <Link to="/signup">Create New Account</Link>
            </Card>

        </div>
    )
}

export default Login