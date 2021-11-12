
import React, { useState } from 'react';
import { Card as AntCard, Avatar, Menu, Button, Dropdown } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons";
import EditModal from '../../Edit_Modal/EditModal';
import EditContext from '../../../Context/EditContext';
const { Meta } = AntCard;

const Card = ({ cardInCardsData }) => {
    const [check, setCheck] = useState(false);
    const [refresh, setRefresh] = useState(false);


    const setModal2Visible = (modal2Visible) => {
        setCheck(modal2Visible);
    }
    const edit_click = () => {
        setCheck(true)
    }
    // console.log(cardInCardsData.cardInHomedata.posts);
    const edit_handler = (values) => {
        cardInCardsData.post.title = values.values.title;
        cardInCardsData.post.description = values.values.description;
        cardInCardsData.post.upload = values.upload;
        cardInCardsData.post.thumb = values.thumb;
        setRefresh(!refresh)
    }
    const handle_delete = () => {
        console.log("handle delete Run");
        console.log(cardInCardsData.cardInHomedata.posts);
    }

    const menu = (
        <Menu>
            <Menu.Item>
                <a rel="noopener noreferrer" onClick={handle_delete}>
                    Delete Item
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <>
            <AntCard
                style={{ width: 300, margin: 10 }}
                cover={
                    <img
                        alt="example"
                        src={cardInCardsData.post.upload}
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" onClick={edit_click} />,
                    <Dropdown overlay={menu} placement="bottomRight" arrow>
                        <EllipsisOutlined key="ellipsis" />
                    </Dropdown>
                ]}
            >
                <Meta
                    avatar={<Avatar src={cardInCardsData.post.thumb} />}
                    title={cardInCardsData.post.title}
                    description={cardInCardsData.post.description}
                />
            </AntCard>
            <EditModal visible={setModal2Visible} modalInCardData={{ check: check, dispatch: cardInCardsData.dispatch, edit_handler: edit_handler, cardInCardsData: cardInCardsData, }} />

        </>
    );
}
export default Card;