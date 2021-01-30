import React from 'react'
import { Form, Input, Select, Button } from 'antd';

const { Option } = Select;

function WritingForm(props) {
    return (
        <div>
             <Form
                layout="inline"
                name="nest-messages"
                style={{justifyContent:'space-between'}}>
                    <Form.Item name={['title']} label="제목" style={{width: "60%"}}>
                        <Input/>
                    </Form.Item>
                    <Form.Item
                    name={['product', 'name']}
                    label={props.index}
                    style={{width: "30%"}}
                    >
                    <Select
                        showSearch
                        placeholder="Search or Select"
                        optionFilterProp="children"
                    >
                        {props.list.map(item => (
                            <Option value={item.value}>{item.name}</Option>
                        ))}
                    </Select>
                    </Form.Item>

                </Form>
                <br/>
                <Form
                layout="vertical"
                name="nest-messages" >
                <Form.Item name={['description']} label="내용">
                    <Input.TextArea style={{height: "400px"}} />
                </Form.Item>
                <Form.Item name={['image']} label="이미지 첨부">
                    <input type="file"/>
                </Form.Item>
                <Form.Item>
                <button style={{ width: "100%", maxWidth: "400px", height: "50px", border: "none", backgroundColor: "black",
                color: "white", fontWeight: 600, fontSize: "22px", marginBottom: "30px"}}>업로드</button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default WritingForm
