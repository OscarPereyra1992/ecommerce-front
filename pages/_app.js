import { CartContextProvider } from "@/components/CartContext";
import { createGlobalStyle, ThemeProvider, StyleSheetManager } from "styled-components";



const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');
body{
  padding: 0;
  margin: 0;
  font-family: 'Poppins', sans-serif;
  background-color: #eeee;
 }
`;


export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "outlined"}>
      
        <GlobalStyles />
        <CartContextProvider>
        <Component {...pageProps} />
        </CartContextProvider>
      
    </StyleSheetManager>
  );
}

