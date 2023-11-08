/* eslint-disable react/jsx-no-target-blank */
// import { Button } from '@mui/material'
// import { useColorScheme } from '@mui/material/styles'
// import { BoxFlex } from './styles/GlobalStyle'
import RouterProviderConfig from "./routes";
import { AppWrapper } from "./styles/GlobalStyle";

function App() {
  // const { mode, setMode } = useColorScheme()
  // console.log('mode console::,', mode)
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
      </Button>
      <BoxFlex>xin chào</BoxFlex> */}
      <AppWrapper>
        <RouterProviderConfig />
      </AppWrapper>
    </>
  );
}

export default App;
