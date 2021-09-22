import Head from "next/head";
import NavBar from "../components/NavBar";

import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      {/* Explicitly declare to load our icon image in all the pages */}
      <Head>
        <link rel="icon" href="/icons/favicon.ico" />
      </Head>
      <header>
        <NavBar />
      </header>

      <Component {...pageProps} />
    </>
  );
}

export default App;
