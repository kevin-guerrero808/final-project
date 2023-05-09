import { Button, Layout } from 'antd';
import React, { useState } from 'react';
import { MenuSlider } from '../components/MenuSlider/MenuSlider';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import { GithubOutlined } from '@ant-design/icons';
import { MenuTop } from '../components/MenuTop/MenuTop';

import './Layout.scss';

export const AppLayout = props => {
    const { children } = props;
	const [menuCollapsed, setMenuCollapsed] = useState(false);
    return (
        <Layout>
            <MenuSlider menuCollapsed={menuCollapsed}></MenuSlider>
            <Layout 
            className='layout-general'
            style={{
                marginLeft: menuCollapsed ? '80px' : '200px'
            }}>
                <Header className='layout-general_header'>
                    <MenuTop
                        menuCollapsed={menuCollapsed}
                        setMenuCollapsed={setMenuCollapsed}></MenuTop>
                </Header>
                <Content>
                    {children}
                </Content>
                <Footer>
                    <Button type="link" onClick={() => console.log('Go to github')}><GithubOutlined style={{
                        fontSize: "20px"
                    }}></GithubOutlined></Button>
                </Footer>
            </Layout>
            <h2>Footer</h2>
        </Layout>
    );
};
