import {Link} from "react-router-dom";
import {Menu} from "antd";
import {useState} from "react";
import {HomeOutlined, InfoCircleOutlined} from "@ant-design/icons";

const Nav = () => {

    const [current, setCurrent] = useState("home");

    const handleClick = e => {
        setCurrent( e.key );
    };

    return (
        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{justifyContent: 'center'}}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="about" icon={<InfoCircleOutlined />}>
                <Link to="/about">About</Link>
            </Menu.Item>
        </Menu>
        );
};
export default Nav;