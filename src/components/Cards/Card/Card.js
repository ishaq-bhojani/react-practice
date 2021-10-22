
import { Card as AntCard, Avatar } from 'antd';
import {EditOutlined, EllipsisOutlined, SettingOutlined} from "@ant-design/icons";
const { Meta } = AntCard;

const Card =  ({post}) => {
    return (<AntCard
        style={{ width: 300, margin: 10 }}
        cover={
            <img
                alt="example"
                src={post.upload}
            />
        }
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
    >
        <Meta
            avatar={<Avatar src={post.thumb} />}
            title={post.title}
            description={post.description}
        />
    </AntCard>);
}
export default Card;