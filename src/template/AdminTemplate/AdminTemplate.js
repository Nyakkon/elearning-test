import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Breadcrumb, Layout, Menu } from "antd";
import React, { useState } from "react";
import { NavLink, Route } from "react-router-dom";


export const AdminTemplate = (props) => {
  const { Component, ...propsRoute } = props;
  const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem("Users", "1", <UserOutlined />,),
    getItem("Courses", "2", <DesktopOutlined />),
  ];
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Route
      exact
      path={props.path}
      render={(propsRoute) => {
        //{path:'/home', component:Home}
        return (
          <div>
            <Layout
              style={{
                minHeight: "100vh",
              }}
            >

              <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={(value) => setCollapsed(value)}
              >
                <div className="logo" />
                
                <Menu  theme="dark"
                  defaultSelectedKeys={["1"]}
                  mode="inline"
                  items={items}>

                    <Menu.Item key='1' icon={<UserOutlined />}>
                        <NavLink to='/admin/users'>Users</NavLink>
                    </Menu.Item>
                    <Menu.Item key='2' icon={<DesktopOutlined />}>
                        <NavLink to='/admin/courses'>Courses</NavLink>
                        <NavLink to='/admin/courses/addnew'>Add New</NavLink>
                    </Menu.Item>
                 

                </Menu>

              </Sider>

              <Layout className="site-layout">
                <Header
                  className="site-layout-background"
                  style={{
                    padding: 0,
                  }}
                />

                <Content
                  style={{
                    margin: "0 16px",
                  }}
                >
                  <Breadcrumb
                    style={{
                      margin: "16px 0",
                    }}
                  >
                    {/* <Breadcrumb.Item>User</Breadcrumb.Item>
                    <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
                  </Breadcrumb>
                  <div
                    className="site-layout-background"
                    style={{
                      padding: 24,
                      minHeight: 360,
                    }}
                  >
                    <Component {...propsRoute} />
                  </div>
                </Content>
                <Footer
                  style={{
                    textAlign: "center",
                  }}
                >
                  Ant Design ©2018 Created by Ant UED
                </Footer>
              </Layout>
              
            </Layout>
          </div>
        );
      }}
    />
  );
};
