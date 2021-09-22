import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Divider, Menu } from "antd";
import { SideMenuWrapper } from "./SideMenu.style";
import { ROUTES } from "constants/Routes";

export const SideMenu = () => {
  const { pathname } = useLocation();
  return (
    <SideMenuWrapper selectedKeys={[pathname]}>
      <Menu.Item key={ROUTES.BASE.DASHBOARD}>
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.DASHBOARD)}
          to={ROUTES.BASE.DASHBOARD}
        >
          Dashboard
        </NavLink>
      </Menu.Item>
      <Menu.Item key={ROUTES.BASE.MANAGE_CONTENT}>
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.MANAGE_CONTENT)}
          to={ROUTES.BASE.MANAGE_CONTENT}
        >
          Manage Content
        </NavLink>
      </Menu.Item>
      <Menu.Item key={ROUTES.BASE.UPLOAD_CONTENT} >
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.UPLOAD_CONTENT)}
          to={ROUTES.BASE.UPLOAD_CONTENT}
        >
          Upload Content
        </NavLink>
      </Menu.Item>
      <Menu.Item key={ROUTES.BASE.REQUEST_CONTENT} >
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.REQUEST_CONTENT)}
          to={ROUTES.BASE.REQUEST_CONTENT}
        >
          Request Content
        </NavLink>
      </Menu.Item>
      <Menu.Item key={ROUTES.BASE.DESIGN_WIDGET} >
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.DESIGN_WIDGET)}
          to={ROUTES.BASE.DESIGN_WIDGET}
        >
          Design Widget
        </NavLink>
      </Menu.Item>
      <Menu.Item key={ROUTES.BASE.SHARE_WIDGET} >
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.SHARE_WIDGET)}
          to={ROUTES.BASE.SHARE_WIDGET}
        >
          Share Widget
        </NavLink>
      </Menu.Item>
      <Divider />
      <Menu.Item key={ROUTES.BASE.SETTINGS} >
        <NavLink
          isActive={() => pathname.includes(ROUTES.BASE.SETTINGS)}
          to={ROUTES.BASE.SETTINGS}
        >
          Settings
        </NavLink>
      </Menu.Item>
      <Menu.Item key={ROUTES.BASE.SETTINGS} >
        Log Out
      </Menu.Item>
    </SideMenuWrapper>
  );
};
