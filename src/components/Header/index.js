import React from 'react'
import { Layout, Menu } from 'antd'
const { Header } = Layout;

export default function index() {
  const items1 = ['1', '2', '3'].map((key) => ({
    key,
    label: `nav ${key}`,
  }));
  return (
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']} items={items1} />
    </Header>
  )
}
