import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import { PlusOutlined } from '@ant-design/icons';

function dropZone() {
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
                {/*클릭 시 사진 선택*/}
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div
                            style={{
                                width: '300px',
                                height: '250px',
                                border: '1px solid black',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}
                            {...getRootProps()}
                        >
                            <input {...getInputProps()} />
                            <PlusOutlined />
                        </div>
                    </section>
                )}
            </Dropzone>
            <div
                style={{
                    width: '300px',
                    height: '250px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                선택한 사진 나옴
                <br />
                (서버 연결하면 만들게요)
            </div>
        </div>
    );
}

export default dropZone;
