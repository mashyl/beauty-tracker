import React, { ReactNode } from "react";
import { Layout as LayoutWrapper } from "antd";
import { Sidebar, ModuleHeader } from "./WithSidebarLayout.style";
import WhiteLogo from "assets/img/white_logo.png";
import { SideMenu } from "./SideMenu";
// import { CustomButton } from "components/Button";
import { useLocation } from "react-router";

interface ILayout {
  children?: ReactNode;
  location?: Location;
}

const { Header, Footer, Sider, Content } = LayoutWrapper;

export const WithSidebarLayout = ({ children }: ILayout) => {
  return (
    <LayoutWrapper>
      {/* <Sidebar>
        <img src={WhiteLogo} alt="Logo" />
        <p>you@company.com</p>
        <SideMenu />
      </Sidebar> */}
      <LayoutWrapper>
        <ModuleHeader>
          {/* <CustomButton width={160} height={52}> */}
            Request Content
          {/* </CustomButton> */}
        </ModuleHeader>
        <Content style={{ padding: "36px", height: "1000vh" }}>
          {children}
        </Content>
      </LayoutWrapper>
    </LayoutWrapper>
  );
};
