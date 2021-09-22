import React from "react";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "assets/styles/defaultTheme";
import GlobalStyles from "assets/styles/global";
import store from "services/store";
import Routing from "Routing";

function App() {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles />
        <Provider store={store}>
          <Routing />
        </Provider>
      </ThemeProvider>
    </>
  );
}

export default App;
