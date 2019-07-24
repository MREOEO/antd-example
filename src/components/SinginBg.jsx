import React from 'react';
import { Col } from 'antd';
import bg from '../images/bg_signin.png';
export default function SinginBg (){

    return (
        <Col span={12}>
            <img style ={{
                width: 500,
                height: 700,
            }}
                alt="BG"
                src={bg}>

            </img>
        </Col>
    )
}