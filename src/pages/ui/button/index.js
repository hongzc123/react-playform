import React, { memo, useState } from 'react'
import { Card, Button, Radio } from 'antd'
import {
    PlusOutlined,
    DeleteOutlined,
    EditOutlined,
    SearchOutlined,
    LeftOutlined,
    RightOutlined
} from '@ant-design/icons'


// React.memo是一个高阶组件,memo类似于PureComponent,不同的是,memo是一个function组件
export default memo(function Index() {
    const [loading, setLoading] = useState(true)
    return (
        <div className='wrap'>
            <Card title='图表款按钮组' className='button-wrap'>
                <Button icon={<PlusOutlined />}>添加</Button>
                <Button icon={<DeleteOutlined />}>删除</Button>
                <Button icon={<EditOutlined />}>修改</Button>
                <Button icon={<SearchOutlined />}>查找</Button>
                <Button icon={<SearchOutlined />} shape='circle'></Button>
                <Button icon={<SearchOutlined />} shape='round'></Button>
            </Card>

            <Card title='loading按钮' className='button-wrap'>
                <Button type='primary' loading={loading}>加载中</Button>
                <Button onClick={e => close()}>关闭加载</Button>
                <Button onClick={e => open()}>开启加载</Button>
            </Card>
        </div>
    )
    function open() {
        setLoading(true)
    }
    function close() {
        setLoading(false)
    }
})
