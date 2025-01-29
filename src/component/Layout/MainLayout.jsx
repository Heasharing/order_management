import React, { useState } from "react";
import Admin from "../../assets/Picture/fried-rice.jpg";

import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { FcAbout } from "react-icons/fc";
import { MdAssignment } from "react-icons/md";

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Space, Input } from "antd";
import { Outlet, useNavigate } from "react-router";
import { List } from "antd/es/form/Form";
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
  getItem("Dashaboard", "/", <MdAssignment />),
  getItem("Overview", "", <UserOutlined />),
  getItem("Menu", "", <FaUser />, [
    getItem("Menu list", "/menu", <UserOutlined />),
    getItem("Category", "/category", <UserOutlined />),
  ]),
 
  getItem("Product ", "/product", <MdProductionQuantityLimits />),
  getItem("TableList ", "/table", <MdProductionQuantityLimits />),
  getItem("Order", "/order", <DesktopOutlined />),
  
  getItem("OrderHistory", "/orderhistory", <MdProductionQuantityLimits />),
  getItem("About", "/about", <FcAbout />),
 
  getItem("password", "sub1", <UserOutlined />, [
    getItem("User", "sub1", <UserOutlined />, [
      getItem("User", "sub2", <UserOutlined />),
      getItem("User", "sub3", <UserOutlined />),
    ]),
  ]),
  getItem("Team", "sub2", <TeamOutlined />, [
    getItem("Team 1", "6"),
    getItem("Team 2", "8"),
  ]),
  getItem("Login", "login", <UserOutlined />),
 
  getItem("Report", "/report", <PieChartOutlined />),
  getItem("Setting", "/setting", <DesktopOutlined />),
 
  getItem("model", "/models", <DesktopOutlined />),
  // getItem('InvoiceTable ', '/invoice', <DesktopOutlined />),

  // getItem('Menu', '/menu', <DesktopOutlined />),
  getItem("Profile", "/profile", <DesktopOutlined />),
  getItem("Footer", "/footer", <DesktopOutlined />),
  // getItem('Card', '/shoppingcart', <DesktopOutlined />),
  

  // getItem('Help', '/help', <FileOutlined />),
];
const MainLayout = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  // const {
  //   token: { colorBgContainer, borderRadiusLG },
  // } = theme.useToken();
  return (
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
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          onClick={(item) => navigate(item.key)}
        />
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          
        /> */}

        <div className="LayoutHeader flex justify-between">
          <Space className="flex-initial w-64">
            
            <div className="p-6">
              
            </div>
            <Input.Search placehoder="search" />
          </Space>

          <div>
            <Space>
              <div>
                <div className="txt-username flex-initial w-64 ">Hea Hom</div>
                <div>Admin</div>
              </div>
              <img
                src={Admin}
                alt=""
                className="layout-profile flex-initial w-64"
              />
            </Space>
          </div>
        </div>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          {/* <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
           
          </Breadcrumb> */}
          <div
          // style={{
          //   padding: 24,
          //   minHeight: 600,
          //   marginTop:10,
          //   background: colorBgContainer,
          //   borderRadius: borderRadiusLG,
          // }}
          >
            <Outlet />
          </div>
        </Content>
        {/* <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer> */}
      </Layout>
    </Layout>
  );
};
export default MainLayout;
