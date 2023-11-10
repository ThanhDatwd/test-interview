/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import Footer from "./components/Footer";
import Header from "./components/Header";
import RouterProviderConfig from "./routes";
import { AppWrapper } from "./styles/GlobalStyle";
function App({ children }) {
  return (
    <>
      <AppWrapper>
        <RouterProviderConfig>
          <Header />
          {children}
        </RouterProviderConfig>
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
