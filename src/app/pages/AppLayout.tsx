import React, {useState} from 'react';
import {Layout, Menu, MenuProps} from "antd";
import {
    AppstoreOutlined,
    DesktopOutlined,
    DoubleRightOutlined,
    FileDoneOutlined,
    OpenAIOutlined
} from "@ant-design/icons";
import {Outlet} from "react-router-dom";

const {Content, Footer, Sider} = Layout;

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    getItem(<a href="/applications">Applications</a>, '1', <AppstoreOutlined/>),
    getItem(<a href="/specifications">Specifications</a>, '2', <FileDoneOutlined/>),
    getItem(<a href="/executions">Executions</a>, '3', <DoubleRightOutlined/>),
    getItem(<a href="/environments">Environments</a>, '4', <DesktopOutlined/>),
    getItem(<a href="/expert">Expert</a>, '5', <OpenAIOutlined/>)
];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
    } as MenuItem;
}

const AppLayout: React.FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="demo-logo-vertical"/>
                <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items}/>
            </Sider>
            <Layout>
                <Content style={{margin: '16px 16px'}}>
                    <Outlet/>
                </Content>
                <Footer style={{textAlign: 'center'}}>
                    Exam Web ©{new Date().getFullYear()} Created by MetallFoX
                </Footer>
            </Layout>
        </Layout>
    )
}

export default AppLayout;