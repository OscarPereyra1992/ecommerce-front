import { CartContextProvider } from "@/components/CartContext";
import { ThemeProvider, StyleSheetManager } from "styled-components";
import { GlobalStyles } from "@/styles/globalStyles";

export default function App({ Component, pageProps }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => prop !== "outlined"}>
      <ThemeProvider theme={{}}>
        <GlobalStyles />
        <CartContextProvider>
          <Component {...pageProps} />
        </CartContextProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
}
