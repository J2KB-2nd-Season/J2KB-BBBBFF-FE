import React from 'react'
import { Collapse, Typography, Divider } from 'antd';
import { Link } from 'react-router-dom';

const { Panel } = Collapse;
const { Title } = Typography;

const text = `A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.`;


function ServicePage() {
    
    
    return (
        <div style={{width: '75%', maxWidth: 1200, margin: "0 auto", padding: "1rem", textAlign: "center", backgroundColor: "white"}}>
            <Link to='/'>
                <Title level={2}>J2KB STORE</Title>
            </Link>
            <Divider>고객센터</Divider>
            <Title level={3}>자주 묻는 질문</Title>
            
            <Collapse defaultActiveKey={['1']}>
                <Panel header="J2KB는 무엇인가요?" key="1">
                <pre>{text}</pre>
                </Panel>
                <Panel header="환불되나요?" key="2">
                <p>{text}</p>
                </Panel>
                <Panel header="교환되나요?" key="3">
                <p>{text}</p>
                </Panel>
            </Collapse>
            <br/>
            <button style={{ width: "320px", height: "50px", border: "none", backgroundColor: "black",
                color: "white", fontWeight: 600, fontSize: "22px"}}>질문하기</button>
        </div>
    )
}

export default ServicePage