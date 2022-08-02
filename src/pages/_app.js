/**
 * Este componente foi modificado para
 * que fosse acrescentado o provider do redux
 */
import "../styles/globals.css";
import { Provider } from "react-redux";
import store from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;