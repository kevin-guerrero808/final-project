import React from 'react';
import Logo from "../../logo.svg";
import { Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import { MenuFoldOutlined } from '@ant-design/icons';

import './MenuTop.scss';

//Menu top recibe las propiedades y se las comárte a menu sider
//las propiedades las recibe de GeneralLayout
//propiedad: Saber si el menu esta extendido o no
export const MenuTop = (props) => {
    const { menuCollapsed, setMenuCollapsed } = props;
  return (
      <div className='menu-top'>
          <div className='menu-top__left' >
              <Button  type='link' onClick={() => setMenuCollapsed(!menuCollapsed)}> {menuCollapsed ? <MenuFoldOutlined /> : <MenuOutlined /> }</Button>
              <img src={Logo} alt='Logo empresa' style={{width: '20px', height: '20px'}} className='menu-top__left__logo'></img>
          </div>
    </div>
  )
}
