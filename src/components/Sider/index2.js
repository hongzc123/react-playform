import React, { Component } from 'react'
import { Menu } from 'antd';
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;

export class index2 extends Component {
  render() {
    return (
      <div>
        <Menu mode="inline" theme="light" defaultSelectedKeys={['1']} defaultOpenKeys={['haha1']}>
            <Menu.Item key="1" icon={<MailOutlined />}>
                Navigation One
            </Menu.Item>
            <Menu.Item key="2" icon={<AppstoreOutlined />}>
                Navigation Two
            </Menu.Item>
            <SubMenu key="haha1" icon={<SettingOutlined/>} title="Navigation Three - Submenu">
                <Menu.Item key="setting:1">Option 1</Menu.Item>
                <Menu.Item key="setting:2">Option 2</Menu.Item>
                <Menu.Item key="setting:3">Option 3</Menu.Item>
                <Menu.Item key="setting:4">Option 4</Menu.Item>
            </SubMenu>
        </Menu>

      </div>
    )
  }
}

export default index2