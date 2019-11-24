import React, { useState } from 'react';

import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import {Route} from 'react-router-dom';
import Addarticle from '../Addarticle/Addarticle';
import "../../static/style/home.css"
const { Header, Content, Footer, Sider } = Layout;

const {SubMenu}  = Menu;
function Home() {
  const [collapsed, setCollapsed] = useState(false)

  const onCollapse = collapsed => {
    setCollapsed(collapsed)
  };
  const toggle = () => {
    setCollapsed(!collapsed)
  }
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <div className="logo" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>工作台</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>添加文章</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>文章管理</span>
              </span>
            }
          >
            <Menu.Item key="3">添加文章</Menu.Item>
            <Menu.Item key="4">文章列表</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>留言管理</span>
          </Menu.Item>
          <Menu.Item key="11">
            <Icon type="bulb" />
            <span>其他功能</span>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
      <Header style={{ background: '#fff', padding: 0 }} >
          <Icon
              className="trigger"
              type={collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={toggle}
          />
        </Header>  
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>首页</Breadcrumb.Item>
              <Breadcrumb.Item>添加文章</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                <div>
                   <Route  path="/home/" exact component={Addarticle}/>
                </div>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>JSZhuang.com</Footer>
      </Layout>
    </Layout>
  )

}


export default Home;