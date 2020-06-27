import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Typography } from 'antd';
import 'whatwg-fetch';

const { Title } = Typography;
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class SiderDemo extends React.Component {
  constructor(){
		super(...arguments);
		this.state = {
			proejct_list:[]
		};
  }
  
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  componentDidMount(){
		fetch('http://127.0.0.1:3001/projects',{
			method: 'get',
			dataType: 'json',
			headers:{
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
		})
		.then((response) => response.json())
		.then((responseData) => {
			this.setState({proejct_list: responseData});
		})
		.catch((error)=>{
			console.log('Error fetching project',error);
		});
	}

  render() {
    let proejct_list = this.state.proejct_list.map( (projects) => {
			return <Project
					name={projects.name}
					id={projects.id}
					description={projects.description}
					{...projects}/>
		});

    return (
      <Layout style={{ minHeight: '100vh' }}>
        <div style={{ width: 300 }}>
          <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
            <div className="logo" >
              <Title style={{margin: 30}} >W</Title>
            </div>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <SubMenu key="sub1" title="ABOUT">
                <Menu.Item key="1">Skills</Menu.Item>
                <Menu.Item key="2">Educations</Menu.Item>
                <Menu.Item key="3">Careers</Menu.Item>
              </SubMenu>
              <Menu.Item key="4" >
                WORKS
              </Menu.Item>
              <SubMenu key="sub3" title="Wlog">
                <Menu.Item key="5">개발 일지</Menu.Item>
                <Menu.Item key="6">개발 공부</Menu.Item>
              </SubMenu>
              <Menu.Item key="7" >
                CONTACT
              </Menu.Item>
            </Menu>
          </Sider>
        </div>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <ul>
                {proejct_list}
              </ul>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
    );
  }
}

class Project extends React.Component {
	render() {
		return (
			<li>
				{this.props.name}, id is {this.props.id}. description : {this.props.description}
			</li>
		);
	}
}


export default SiderDemo;
// ReactDOM.render(<SiderDemo />, mountNode);