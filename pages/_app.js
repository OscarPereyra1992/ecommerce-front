import { createGlobalStyle, ThemeProvider, StyleSheetManager } from "styled-components";

// Definir el objeto de tema personalizado
const theme = {
  colors: {
    primary: "#FF0000",
    secondary: "#00FF00",
  },
};

const GlobalStyles = createGlobalStyle`
body{
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
 }
`;


export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "outlined"}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </StyleSheetManager>
  );
}

