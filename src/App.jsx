/* eslint-disable react/jsx-no-target-blank */
import Footer from "./components/Footer";
import RouterProviderConfig from "./routes";
import { AppWrapper } from "./styles/GlobalStyle";
import { Button } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

function App() {
  const { mode, setMode } = useColorScheme()
  console.log('mode console::,', mode)
  return (
    <>
    {/* <Button
        onClick={() => {
          setMode( 'light' )
        }}
      >
        Turn light
      </Button>
      <Button
        onClick={() => {
          setMode('dark')
        }}
      >
         Turn dark
      </Button>
      <Button
        onClick={() => {
          setMode('system')
        }}
      >
        system
      </Button> */}
      <AppWrapper>
        <RouterProviderConfig />
        <Footer />
      </AppWrapper>
    </>
  );
}

export default App;
