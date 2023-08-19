import React, { memo, useState } from 'react'
import { Card, Table, Button, Modal, message } from 'antd'

export default memo(function Index() {
  const columns = [
    {
      id: 'ID',
      dataIndex: 'key'
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
      title: '地址',
      dataIndex: 'address'
    },
    {
      title: '操作',
      key: 'operaion',
      render: (row, { key }) => {
        return <Button onClick={() => removeItem(row, key)}>删除</Button>
      }
    }
  ]
  const removeItem = (row, key) => {
    console.log(row, key)
    // setIsModalOpen(true)
    Modal.confirm({
      title: '删除内容',
      content: `你忍心删除${row.name}吗？`,
      onOk: () => {
        setState(state.filter(item => item.key !== key))
        message.success('删除成功!')
      }
    })
  }
  const data = [
    {
      key: '1',
      name: '啊哈1',
      age: 18,
      address: '幸福里大道1号'
    },
    {
      key: '2',
      name: '啊哈2',
      age: 18,
      address: '幸福里大道2号'
    },
    {
      key: '3',
      name: '啊哈3',
      age: 18,
      address: '幸福里大道3号'
    },
    {
      key: '4',
      name: '啊哈4',
      age: 18,
      address: '幸福里大道4号'
    },
    {
      key: '5',
      name: '啊哈5',
      age: 18,
      address: '幸福里大道5号'
    },
  ]
  const [state, setState] = useState(data)
  // const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <div>
      <Card>
        <Table
          dataSource={state}
          columns={columns}
          scroll={{ x: 1000 }}
          bordered />
      </Card>

      {/* <Modal title='modal' open={isModalOpen}></Modal> */}
    </div>
  )
})
