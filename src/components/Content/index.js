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
      <Content className="content">
        Content
      </Content>
    </Layout>
  );
}
