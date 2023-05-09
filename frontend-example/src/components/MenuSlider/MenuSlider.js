import { UserOutlined } from '@ant-design/icons'
import { WalletOutlined } from '@ant-design/icons/lib/icons'
import { Layout, Menu } from 'antd'
import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './MenuSlider.scss'

export const MenuSlider = (props) => {
    const menuClick = (event) => {
        console.log(event);
        // navigate(path);
    }
    const menuItems = [
        {
            key: '/admin/users',
            icon: <UserOutlined />,
            label: <span className='nav-text'>Users</span>
        },
        {
            key: '/admin/products',
            icon: <WalletOutlined />,
            label: <span className='nav-text'>Products</span>
        }
    ];
    const { Sider } = Layout;
    const location = useLocation();
    const navigate = useNavigate();
    return (
        <Sider className="menu-slider" collapsed={props.menuCollapsed}>
            <Menu 
                theme="aliceblue" 
                mode="inline" 
                defaultSelectedKeys={[location]} 
                items={menuItems}
                onClick={menuClick}
            ></Menu>
        </Sider>
    )
}
