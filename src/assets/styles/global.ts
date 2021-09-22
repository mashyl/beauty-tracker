import { createGlobalStyle } from "styled-components";
import { themeGet } from "@styled-system/theme-get";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    -ms-overflow-style: scrollbar;
  }

  html,
  html a,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  a,
  p,
  li,
  dl,
  th,
  dt,
  input,
  textarea,
  span,
  div, button {
    font-family: 'Poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.004);
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    -webkit-tap-highlight-color: transparent;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${themeGet("color.1", "#ffffff")};
    main.ant-layout-content {
      background: linear-gradient(180deg, #B9FBFF 0%, #C4E4F9 46.88%, #D1C9F1 100%);
      height: 100vh !important;
      flex: auto;
      overflow-y: scroll;
      display: flex;
      align-items: center;
      backdrop-filter: blur(4px);
    }
  }

  .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background-color: ${themeGet("primary.accentYellow2")};
    .ant-menu-title-content a {
        margin-left: 15px;
        color: ${themeGet("primary.accentYellow")};
      }
      svg:not(.outlined-icon) > path {
        stroke: ${themeGet("primary.accentYellow")};
      }
      svg.outlined-icon > path {
        fill: ${themeGet("primary.accentYellow")};
      }
  }

  p {
    font-size: 14px;
  }

  .ant-input,
  .ant-picker,
  .ant-input-number,
  .ant-input-password {
    font-size: 18px;
    line-height: 27px;
    width: 100%;
    min-height: 35px;
    border: none;
    border-bottom: 1px solid #d3d8dd;
    border-color: ${themeGet("border.3", "#E6E6E6")};
    margin-bottom: 17px;
    padding: 0;

    &:focus,
    &:hover,
    &.ant-input-focused,
    &.ant-picker-focused,
    &.ant-input-number-focused,
    &.ant-input-password-focused {
      box-shadow: none;
      border-bottom: 1px solid #d3d8dd;

      .field-label {
        color: ${themeGet("primary.accentYellow")}
      }

      svg {
        fill: ${themeGet("primary.accentYellow")}
      }
    }
  }
  .ant-input-affix-wrapper {
    font-size: 18px;
    line-height: 27px;
    width: 100%;
    min-height: 35px;
    border: none;
    border-bottom: 1px solid #d3d8dd;
    border-color: ${themeGet("border.3", "#E6E6E6")};
    margin-bottom: 17px;
    padding: 0;
    &:focus, &:hover {
        box-shadow: none;
        border: none;
        border-bottom: 1px solid #d3d8dd;
    }
    .ant-input,
  .ant-picker,
  .ant-input-number,
  .ant-input-password {
    margin-bottom: 0;
  }
  }
  .ant-input-affix-wrapper:not(.ant-input-affix-wrapper-disabled):hover, .ant-input-affix-wrapper-focused {
    box-shadow: none;
        border: none;
        border-bottom: 1px solid #d3d8dd;
  }

  .form-control {
    width: 100%;
    &:focus-within {
      label {
        color: ${themeGet("primary.accentYellow", "#FEC400")};
      }
    }
  }

    .ant-col-lg-24 {
        display: block;
        flex: 0 0 100%;
        max-width: 100%;
    }
    .ant-col-lg-12 {
        display: block;
        flex: 0 0 50%;
        max-width: 100%;
    }

    .ant-input-suffix {
      fill: #5A5855;
    }
`;

export default GlobalStyle;
