import "./about.scss";
import {Progress, Typography} from 'antd';

const {Title} = Typography;

const About = () => {
    return (
        <div className="about_container">
            <Title>React Project With Ant Design and Redux</Title>
            <Title level={2}>By: Ishaq Bhojani</Title>
            <Title level={3}>Progress:</Title>
            <Progress percent={50} />
        </div>
    );
}

export default About;