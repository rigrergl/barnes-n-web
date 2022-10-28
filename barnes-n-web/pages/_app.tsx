import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import "./css/registration.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
