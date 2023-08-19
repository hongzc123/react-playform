import React from 'react'
import {Card, Table} from 'antd'

export default function Index() {
  const colums = [
    {
      title: '姓名',
      dataIndex: 'name',
      width: 120
    },
    {
      title: '年龄',
      dataIndex: 'age'
    },
    {
      title: '地址',
      dataIndex: 'address'
    }
  ]

  const data = []
  for(let i = 0; i < 101; i++){
    data.push({
      key: i,
      name: `伟伟${i}`,
      age: 18,
      address: `北京西直门${i}`
    })
  }
  return (
    <div>
      <Card title='高度固定的表格'>
        <Table dataSource={data} columns={colums} scroll={{y: 260}} />
      </Card>
    </div>
  )
}
