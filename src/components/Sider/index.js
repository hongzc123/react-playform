import React, { Component } from "react";
import { Menu } from "antd";
import menuConfig from "../../config/menu";
import { SettingOutlined } from "@ant-design/icons";
import "./index.scss";
import { Link, Switch } from 'react-router-dom'

const { SubMenu } = Menu;
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
            {/* {
              item.items.map((items) => {
                return (
                  <Menu.Item key={items.key} title={items.title}>
                    {items.title}
                  </Menu.Item>
                );
              })
            } */}
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
            <Switch>
              <Link to={item.key}>{item.title}</Link>
            </Switch>
          </Menu.Item>
        );
      }
    });
  };
  render() {
    return (
      <div>
        <div className='logo'>
          <img src="/assets/logo-ant.svg" alt="" />
          <h1>金渡CMS</h1>
        </div>
        <Menu mode="inline" theme="dark">
          {this.state.menuItem}
        </Menu>
      </div>
    );
  }
}

export default index3;
