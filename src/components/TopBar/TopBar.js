import React from 'react'
import { Layout, Menu, Dropdown } from 'antd';
import logo from '../../assets/images/logo.png'
import avatarImage from '../../assets/images/avatar.jpg'
import { LogoutOutlined, UserOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { auth } from '../../config/firebase';
const { Header, Content } = Layout;
const getSelectedKey = () => {
    if (window.location.pathname === "/") {
        return '1'
    } else if (window.location.pathname === "/about") {
        return '2'
    } else {
        return '1'
    }
}

const TopBar = ({ children, user }) => {
    const handleLogout = ()=>{
        auth.signOut();
    }
    const menu = (
        <Menu>
            <Menu.Item className="menu-nav-item" key="1"> <UserOutlined /> Profile</Menu.Item>
            <Menu.Divider />
            <Menu.Item className="menu-nav-item" key="2" onClick={() => handleLogout()} > <LogoutOutlined /> Logout</Menu.Item>
        </Menu>
    );
    return (
        <Layout>
            <Header style={{ width: '100%', display: "flex" }}>
                <div style={{ textAlign: "center", ...(!!user ? {} : { width: "100%" }) }}>
                    <img src={logo} className="logo" alt="logo" height="45" />
                </div>
                {user && (
                    <>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={[getSelectedKey()]}
                            style={{ lineHeight: '64px', flex: 1, marginLeft: "10px" }}
                        >
                            <Menu.Item key="1">
                                <Link to="/">Home</Link>
                            </Menu.Item>
                            <Menu.Item key="2">
                                <Link to="/about">About</Link>
                            </Menu.Item>
                        </Menu>
                        <div className="right-nav-items">
                            <Dropdown overlayClassName="menu-nav-items" overlay={menu} trigger={['click']}>
                                <a href="#test" className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                                    <img src={avatarImage} alt="profileImg" className="nav-profile-img" height="50" />
                                </a>
                            </Dropdown>
                        </div>
                    </>
                )}

            </Header>
            <Content
                className="site-layout-background-dashboard"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                {children}
            </Content>
        </Layout>
    );
}

export default TopBar;