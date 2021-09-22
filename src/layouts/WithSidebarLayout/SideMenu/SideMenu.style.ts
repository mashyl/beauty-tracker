import { themeGet } from "@styled-system/theme-get";
import styled from "styled-components";
import { Menu } from "antd";

export const SideMenuWrapper = styled(Menu)`
  border: none;
  .ant-menu-item {
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
    padding-left: 25px;

    .ant-menu-title-content a {
      margin-left: 15px;
      color: ${themeGet("primary.darkBlue")};
    }
    svg {
      width: 20px;
    }

    :hover {
      .ant-menu-title-content a {
        margin-left: 15px;
        color: ${themeGet("primary.accentYellow")};
      }

      svg:not(.outlined-icon) > path {
        stroke: ${themeGet("primary.accentYellow")};
      }
      .outlined-icon > path {
        fill: ${themeGet("primary.accentYellow")};
      }
    }
  }

  .ant-menu-item-active {
    background-color: transparent;
    a {
      color: ${themeGet("primary.accentYellow")};
    }
  }
`;
