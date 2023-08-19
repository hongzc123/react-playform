// import { Button, Modal, Space } from 'antd'
// import React, { Component } from 'react'

// export class index extends Component {
//     handleConfirm(type) {
//         Modal[type]({
//             title: 'This is a notification message',
//             content: (
//                 <div>
//                     <p>some messages...some messages...</p>
//                     <p>some messages...some messages...</p>
//                 </div>
//             ),
//             onOk() { }
//         })
//     }
//     render() {
//         return (
//             <div>
//                 <Space wrap>
//                     <Button onClick={() => this.handleConfirm('info')}>Info</Button>
//                     <Button onClick={() => this.handleConfirm('success')}>Success</Button>
//                     <Button onClick={() => this.handleConfirm('error')}>Error</Button>
//                     <Button onClick={() => this.handleConfirm('warning')}>Warning</Button>
//                 </Space>
//             </div>
//         )
//     }
// }

// export default index

import React, { memo, useState } from 'react'
import { Button, Modal, Space, Card } from 'antd'

export default memo(function Index() {
    const [isModalOpen1, setIsModalOpen1] = useState(false)
    const [isModalOpen2, setIsModalOpen2] = useState(false)
    const showModal = (type) => {
        if (type === 1) {
            setIsModalOpen1(true)
        } else {
            setIsModalOpen2(true)
        }
    }
    const handleOk = () => {
        setIsModalOpen1(false)
        setIsModalOpen2(false)
    }
    const handleCancel = () => {
        setIsModalOpen1(false)
        setIsModalOpen2(false)
    }
    const handleConfirm = (type) => {
        Modal[type]({
            title: 'This is a notification message',
            content: (
                <div>
                    <p>some messages...some messages...</p>
                    <p>some messages...some messages...</p>
                </div>
            ),
            onOk() { }
        })
    }
    return (
        <div>
            <Card>
                <Space wrap>
                    <Button info onClick={() => handleConfirm('info')}>Info</Button>
                    <Button success onClick={() => handleConfirm('success')}>Success</Button>
                    <Button error onClick={() => handleConfirm('error')}>Error</Button>
                    <Button warning onClick={() => handleConfirm('warning')}>Warning</Button>
                </Space>
            </Card>

            <Card>
                <Space wrap>
                    <Button type="primary" onClick={() => showModal(1)}>
                        Open Modal
                    </Button>
                    <Button type="primary" onClick={() => showModal(2)}>
                        Open Modal2
                    </Button>
                </Space>
            </Card>

            <Modal title="Basic Modal1" open={isModalOpen1} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
            <Modal title="Basic Modal2" open={isModalOpen2} onOk={handleOk} onCancel={handleCancel}>
                <p>Some contents...</p>
                <p>Some contents...</p>
                <p>Some contents...</p>
            </Modal>
        </div>
    )
})

