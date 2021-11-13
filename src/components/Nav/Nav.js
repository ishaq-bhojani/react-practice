import React, { useContext } from 'react'
import { Link } from "react-router-dom";
import { Menu } from "antd";
import { useState } from "react";
import { HomeOutlined, InfoCircleOutlined, ProfileOutlined } from "@ant-design/icons";
import AuthContext from '../../Context/AuthContect';


const Nav = () => {
    const authuseCtx = useContext(AuthContext)

    const [current, setCurrent] = useState("home");

    const handleClick = e => {
        setCurrent(e.key);
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{ justifyContent: 'center' }}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="logout" icon={<ProfileOutlined />} onClick={authuseCtx.onLogout} >
                Logout
            </Menu.Item>
        </Menu>
    );
};
export default Nav;