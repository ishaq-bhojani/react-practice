import { Spin } from 'antd';
import React from 'react'
import './Loading.scss';

function Loading() {
    return (
        <div className="loading-page-container" >
            <Spin size="large" />
        </div>
    )
}

export default Loading
