import React from 'react';
import { Row, Col, Input, Button } from 'antd';
import styled from 'styled-components';

const Container = styled.div`
    background-color:#E8F5FF;
    width: 500px;
    height: 700px;
`;

const SigninHomeTitle =styled.div`
    text-align: center;
    font-family: Roboto;
    font-size: 34px;
    font-weight: bold;
    color: #333333;
    padding-top: 90px;
`;

const EmailAndPasswordText = styled.div`
    font-family: Roboto;
    font-size: 14;
    font-weight: bold;
    color: #333333;
    padding-left: 20px;
    padding-top:60px;
`;

const InputEmailAndPassword = styled(Input)`
    width: 460px;
    margin-left: 20px;
    margin-top:10px;
`;

const SingInButton = styled(Button)`
    width : 100px;
    margin-left: 20px;
    margin-top:30px;
`;

const Line = styled.div`
    width:440px;
    height: 0.5px;
    margin-left: 30px;
    margin-right: 30px;
    margin-top: 30px;
    background: #787878;
`;

const Explanation = styled.div`
    margin-left: 30px;
    font-size: 16px;
    font-weight: bold;
`;

export default function SigninHome() {
  return <Col span={12}>
            <Container>
                    <SigninHomeTitle>LOG IN. START SEARCHING</SigninHomeTitle>
                    
                    <EmailAndPasswordText> Email </EmailAndPasswordText>
                    <InputEmailAndPassword size="large" placeholder="Enter e-mail."/>
                    
                    <EmailAndPasswordText style={{ paddingTop: 0, marginTop:20,}}> Password </EmailAndPasswordText>
                    <InputEmailAndPassword size="large" placeholder="Enter password."type="password"/>

                    <SingInButton type="primary" size="large"> SING IN </SingInButton>

                    <Line/>

                    <Row style ={{marginTop : 40}}>
                        <Col span={16}>
                            <Explanation>Need to create an account?</Explanation>
                        </Col>
                        <Col span={8}>
                          <Button size="normal">SING UP</Button>
                        </Col>
                    </Row>

                    <Row style ={{marginTop : 20}}>
                        <Col span={16}>
                            <Explanation>Forgot your password?</Explanation>
                        </Col>
                        <Col span={8}>
                          <Button size="normal">RECOVERT</Button>
                        </Col>
                    </Row>
            </Container>
        </Col>;
}