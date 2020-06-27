import React from 'react';
import { Menu, Button } from 'antd';
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';

const { SubMenu } = Menu;

class Nav extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 300, marginLeft:20 }}>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
            ABOUT
          </Menu.Item>
          <SubMenu key="sub1" title="WORKS">
            <Menu.Item key="5">Skills</Menu.Item>
            <Menu.Item key="6">Educations</Menu.Item>
            <Menu.Item key="7">Career</Menu.Item>
          </SubMenu>
          <Menu.Item key="2">
            Wlog
          </Menu.Item>
          <Menu.Item key="3">
            CONTACT
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}


export default Nav;
// ReactDOM.render(<App />, mountNode);