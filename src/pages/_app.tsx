import { Provider } from "../components/ui/provider";
import { AppProps } from "next/app";
import { SessionProvider } from "../contexts/SessionContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <SessionProvider>
        <Component {...pageProps} />
      </SessionProvider>
    </Provider>
  );
}
