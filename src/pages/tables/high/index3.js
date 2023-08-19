import React, { Component } from 'react'
import { Table } from 'antd'

export class Index extends Component {
    render() {
        const sharedOnCell = (_, index) => {
            console.log(index)
            if (index === 4) {
                return { colSpan: 0 };
            }
        };
        const columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                render: (text, row, index) => <a>{text}</a>,
                onCell: (_, index) => ({
                    // colSpan: index < 4 ? 1 : 5,
                    colSpan: index < 4 ? 1 : 3,
                }),
            },
            {
                title: 'Age',
                dataIndex: 'age',
                onCell: sharedOnCell,
            },
            {
                title: 'Home phone',
                colSpan: 2,
                dataIndex: 'tel',
                onCell: (_, index) => {
                    if (index === 2) {
                        return { rowSpan: 2 };
                    }
                    // These two are merged into above cell
                    if (index === 3) {
                        return { rowSpan: 0 };
                    }
                    if (index === 4) {
                        return { colSpan: 0 };
                    }
                },
            },
            {
                title: 'Phone',
                colSpan: 0,
                dataIndex: 'phone',
                onCell: sharedOnCell,
            },
            {
                title: 'Address',
                dataIndex: 'address',
                onCell: sharedOnCell,
            },
        ];
        const data = [
            {
                key: '1',
                name: 'John Brown',
                age: 32,
                tel: '0571-22098909',
                phone: 18889898989,
                address: 'New York No. 1 Lake Park',
            },
            {
                key: '2',
                name: 'Jim Green',
                tel: '0571-22098333',
                phone: 18889898888,
                age: 42,
                address: 'London No. 1 Lake Park',
            },
            {
                key: '3',
                name: 'Joe Black',
                age: 32,
                tel: '0575-22098909',
                phone: 18900010002,
                address: 'Sidney No. 1 Lake Park',
            },
            {
                key: '4',
                name: 'Jim Red',
                age: 18,
                tel: '0575-22098909',
                phone: 18900010002,
                address: 'London No. 2 Lake Park',
            },
            {
                key: '5',
                name: 'Jake White',
                age: 18,
                tel: '0575-22098909',
                phone: 18900010002,
                address: 'Dublin No. 2 Lake Park',
            },
        ];
        return (
            <div>
                <Table columns={columns} dataSource={data} bordered />
            </div>
        )
    }
}

export default Index