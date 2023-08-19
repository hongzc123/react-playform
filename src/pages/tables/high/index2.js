import React, { memo } from 'react'
import { Table } from 'antd'

export default memo(function Index() {
    const columus = [
        {
            title: 'Full Name',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Age',
            width: 100,
            dataIndex: 'age',
            key: 'age',
            fixed: 'left',
        },
        {
            title: 'Column 1',
            dataIndex: 'address',
            key: '1',
            width: 150,
        },
        {
            title: 'Column 2',
            dataIndex: 'address',
            key: '2',
            width: 150,
        },
        {
            title: 'Column 3',
            dataIndex: 'address',
            key: '3',
            width: 150,
        },
        {
            title: 'Column 4',
            dataIndex: 'address',
            key: '4',
            width: 150,
        },
        {
            title: 'Column 5',
            dataIndex: 'address',
            key: '5',
            width: 150,
        },
        {
            title: 'Column 6',
            dataIndex: 'address',
            key: '6',
            width: 150,
        },
        {
            title: 'Column 7',
            dataIndex: 'address',
            key: '7',
            width: 150,
        },
        { title: 'Column 8', dataIndex: 'address', key: '8' },
        {
            title: 'Action',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () => <a>action</a>,
        },
    ];

    const data = [];
    for (let i = 0; i < 100; i++) {
        data.push({
            key: i,
            name: `Edrward ${i}`,
            age: 32,
            address: `London Park no. ${i}`,
        });
    }
    return (
        <div style={{'width': '1000px'}}>
            {/* 这个是固定前后的列,横向滚动查看其它数据需要和scroll.x配合使用 */}
            <Table columns={columus} dataSource={data} scroll={{x: 1200}} />
        </div>
    )
})
