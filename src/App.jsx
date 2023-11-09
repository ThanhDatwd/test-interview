/* eslint-disable react/jsx-no-target-blank */
import Footer from "./components/Footer";
import RouterProviderConfig from "./routes";
import { AppWrapper } from "./styles/GlobalStyle";

function App() {
  return (
    <>
      <AppWrapper>
        <RouterProviderConfig />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
