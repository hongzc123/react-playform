import React, { memo, useEffect, useState } from 'react'
import { Card, Table } from 'antd'
import axios from 'axios'

export default memo(function Index() {
    const [data, setData] = useState()
    // useEffect(async () => {
    //     const getData = () => {
    //         return axios.get('http://localhost:3002/user')
    //     }
    //     const { data } = await getData()
    //     console.log(data)
    //     const { user } = { ...data }
    //     setData(user)
    // }, [])
    useEffect(() => {
        const getData = async () => {
            const { data } = await axios.get('http://localhost:3002/user')
            console.log(data)
            const { user } = { ...data }
            setData(user)
        }
        getData()
    }, [])

    const colums = [
        {
            title: 'id',
            dataIndex: 'id'
        },
        {
            title: '姓名',
            dataIndex: 'name'
        },
        {
            title: '年龄',
            dataIndex: 'age'
        },
        {
            title: '性别',
            dataIndex: 'isMale',
            render(isMale) {
                return isMale ? '男' : '女'
            }
        },
        {
            title: '地址',
            dataIndex: 'address'
        },
        {
            title: '手机号',
            dataIndex: 'phone'
        }
    ]
    return (
        <div>
            <Card title='基础表格'>
                <Table dataSource={data} columns={colums} />
            </Card>
        </div>
    )
})
