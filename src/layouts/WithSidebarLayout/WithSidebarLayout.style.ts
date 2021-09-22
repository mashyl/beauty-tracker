import styled from "styled-components";
import { Layout as LayoutWrapper } from "antd";
const { Header, Sider } = LayoutWrapper;

export const Sidebar = styled(Sider)`
  background-color: #ffff;
  position: fixed;
  flex: 0 0 256px !important;
  min-width: 256px !important;
  max-width: 256px !important;
  width: 256px !important;
  height: 100vh;
  box-shadow: 6px 0 18px 0 rgba(0, 0, 0, 0.06);
  text-align: center;
  z-index: 10;

  img {
    width: 150px;
    margin: 25px 53px 8px 53px;
  }
`;

export const ModuleHeader = styled(Header)`
  background-color: rgba(255, 255, 255, 0.3);
  height: 102px;
  width: 100vw;
  border-radius: 40px;
  padding: 0 35px;
  display: flex;
  justify-content: space-between;
  align-content: center;
  position: fixed;
  bottom: 0;
  z-index: 9;
  border: 2px solid transparent;
  backdrop-filter: blur(4px);
  
  border-image-source: linear-gradient(165.4deg, #FFFFFF -10.07%, rgba(255, 255, 255, 0) 89.61%);
  button {
    align-self: center;
  }
`;
