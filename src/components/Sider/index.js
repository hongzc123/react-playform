import React, { Component } from "react";
import { Menu, Layout } from "antd";
import menuConfig from "../../config/menu";
import { SettingOutlined } from "@ant-design/icons";
import "./index.scss";

const { SubMenu } = Menu;
const { Sider } = Layout;

export class index3 extends Component {
  state = {
    menuItem: "",
  };
  componentDidMount() {
    let menuItem = this.getMenuItem(menuConfig);
    this.setState({ menuItem });
  }
  getMenuItem = (data) => {
    return data.map((item) => {
      if (item.items) {
        return (
          <SubMenu key={item.key} title={item.title} icon={<SettingOutlined />}>
            {/* {item.items.map((items) => {
              return (
                <Menu.Item key={items.key} title={items.title}>
                  {items.title}
                </Menu.Item>
              );
            })} */}
            {this.getMenuItem(item.items)}
          </SubMenu>
        );
      } else {
        return (
          <Menu.Item
            key={item.key}
            title={item.title}
            icon={<SettingOutlined />}
          >
            {item.title}
          </Menu.Item>
        );
      }
    });
  };
  render() {
    return (
      <Sider
        className="sidebar-left"
        width={200}
      >
        <Menu mode="inline" theme="light">
          {this.state.menuItem}
        </Menu>
      </Sider>
    );
  }
}

export default index3;
