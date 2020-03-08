import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/GlobalStyle';
import { StarBackground } from './components/StarBackground'
import Menu from './components/Menu'
import Spartan from './components/consoles/Spartan';

interface AppProps {};

const App: React.FC<AppProps> = () => {
  return(
    <>
      <GlobalStyle />
      <Spartan />
      {/* <Menu /> */}
      <StarBackground />
    </>
  )
};

export default App;