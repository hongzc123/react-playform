import React from "react"
import { Breadcrumb, Layout } from "antd"
const { Content } = Layout

export default function index() {
  return (
    <Layout
      style={{
        padding: "0 24px 24px"
      }}
    >
      <Breadcrumb
        style={{
          margin: "16px 0"
        }}
      >
        <Breadcrumb.Item>Home</Breadcrumb.Item>
        <Breadcrumb.Item>List</Breadcrumb.Item>
        <Breadcrumb.Item>App</Breadcrumb.Item>
      </Breadcrumb>
      <Content className="content">
        Content
      </Content>
    </Layout>
  );
}
