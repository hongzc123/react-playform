import React, { Component } from 'react'
import { Card, Table } from 'antd'
import axios from 'axios'

export class index extends Component {
    state = {
        data: []
    }
    async componentDidMount() {
        const { data } = await axios.get('http://localhost:3002/user')
        console.log(data)
        this.setState({
            data: data.user
        })
    }
    render() {
        const dataSource = [
            {
                key: '1',
                name: '胡彦斌',
                age: 32,
                address: '西湖区湖底公园1号',
            },
            {
                key: '2',
                name: '胡彦祖',
                age: 42,
                address: '西湖区湖底公园1号',
            },
        ];
        const columns = [
            {
                title: '姓名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '年龄',
                dataIndex: 'age',
                key: 'age',
            },
            {
                title: '住址',
                dataIndex: 'address',
                key: 'address',
            },
        ];
        return (
            <div>
                <Card title='基础表格'>
                    <Table dataSource={this.state.data} columns={columns} />;
                </Card>
            </div>
        )
    }
}

export default index