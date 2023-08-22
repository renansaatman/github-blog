import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { ApiContextProvider } from "./contexts/apiContext";

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <ApiContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApiContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
