
import React, { useState } from 'react';
import logo from  "../../assets/Picture/hea.jpg";
import profile from  "../../assets/Picture/hom.jpg";
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
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, Space, theme,Input } from 'antd';
import { Outlet, useNavigate } from 'react-router';
import { List } from 'antd/es/form/Form';
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
  getItem('Dashaboard', '/', <MdAssignment />),
  getItem('Customer', '/customer', <FaUser />),
  getItem('Product ', '/product', <MdProductionQuantityLimits />),
  getItem('About', '/about', <FcAbout />),
  getItem("Role", "role", <UserOutlined/>),
  getItem('password', 'sub1', <UserOutlined />, [
    getItem("User", "sub1", <UserOutlined/>,[
      getItem("User", "sub2", <UserOutlined/>),
      getItem("User", "sub3", <UserOutlined/>),
    ]),
     
    
  
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Login', 'login', <UserOutlined/>),
  getItem('Model', '/model', <FileOutlined />),
  getItem('Report', '/report', <PieChartOutlined />),
  getItem('Setting', '/setting', <DesktopOutlined />),
  getItem('regis', '/regis', <DesktopOutlined />),
  getItem('model', '/models', <DesktopOutlined />),
  getItem('print', '/print', <DesktopOutlined />),
  getItem('Menu', '/menu', <DesktopOutlined />),
  getItem('Profile', '/profile', <DesktopOutlined />),




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
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" 
        items={items}  
        onClick={(item)=>navigate(item.key)}/>
      </Sider>
      <Layout>
        {/* <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
          
        /> */}
       
            
                <div className='LayoutHeader flex justify-between'>
                 <Space className='flex-initial w-64'>
                 <img src={logo} alt='' className='layout-logo rounded-lg h-40 min-w-24 m-5' />
                  <div className='p-6'>
                    <div className="txt-brandname">Hea Hom</div>
                    <div>Programmer</div>
                  </div>
                  <Input.Search placehoder="search"/> 
                 </Space>
                 
                  <div>
                    <Space>
                    <div>
                    <div className="txt-username flex-initial w-64 ">Hea Hom</div>
                    <div>Admin</div>
                    </div>
                    <img src={profile} alt='' className='layout-profile flex-initial w-64'/>
                   
                    </Space>

                  </div>
                 
                </div>
        <Content
          style={{
            margin: '0 16px',
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
           <Outlet/>
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
