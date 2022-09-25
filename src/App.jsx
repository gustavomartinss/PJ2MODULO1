import { GlobalStyles } from "./styles/global";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./styles/themes/theme";

import { Header } from "./components/Header";
import { Container } from "./components/Container";

import AppRoutes from "./routes";
import { AuthProvider } from "./contexts/AuthContext";
import { useState } from "react"

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-loading-skeleton/dist/skeleton.css";

import "moment/locale/pt-br";

function App() {
  const [isDarkModeOn, setIsDarkModeOn] = useState(false);

  return (
    <ThemeProvider theme={isDarkModeOn ? darkTheme : lightTheme}>
      <AuthProvider>
        <GlobalStyles />
        <ToastContainer />
        <Header isDarkModeOn={isDarkModeOn} setIsDarkModeOn={setIsDarkModeOn} />
        <Container>
          <AppRoutes />
        </Container>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
