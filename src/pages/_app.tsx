import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styles/global";
import theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#06092B" />
        <meta
          name="description"
          content="Descubra locais incríveis para se visitar em cidades maravilhosas de Santa Catarina."
        />
      </Head>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
