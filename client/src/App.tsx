import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/GlobalStyle';
import { StarBackground } from './components/StarBackground'
import Menu from './components/menu/Menu'
import { Console } from './components/console/console'


interface AppProps {};

const App: React.FC<AppProps> = () => {
  return(
    <>
      <GlobalStyle />
      <Console />
      {/* <Menu /> */}
      <StarBackground />
    </>
  )
};

export default App;