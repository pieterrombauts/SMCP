import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './components/GlobalStyle';
import { StarBackground } from './components/StarBackground'
import { RootState } from './reducers';
import Menu from './components/menu/Menu'
import { animateCSS } from './animation'
import { CSSTransition } from 'react-transition-group'
import { animateMenus } from './slices/menuAnimationSlice'
import Console from './components/console/console'
import { connect, ConnectedProps } from 'react-redux';


interface AppProps {};

const mapState = (state: RootState ) => ({
  gameState: state.menuAnimationReducer.game,
})

const connector = connect(mapState, { animateMenus })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & AppProps

const App: React.FC<Props> = ( props ) => {
  return(
    <>
      <GlobalStyle />
      <CSSTransition 
        in={props.gameState !== "show"}
        timeout={1000}
        classNames="menu"
        unmountOnExit
        onEnter={() => {animateCSS("#menu-container", "fadeIn", ["delay-1s"])}}
        onExit={() => {animateCSS("#menu-container", "fadeOut")}}
      >
        <Menu />
      </CSSTransition>
      <CSSTransition 
        in={props.gameState === "show"}
        timeout={1000}
        classNames="game"
        unmountOnExit
        onEnter={() => {animateCSS("#game-container", "fadeIn", ["delay-1s"])}}
        onExit={() => {animateCSS("#game-container", "fadeOut")}}
      >
        <Console />
      </CSSTransition>
      <StarBackground />
    </>
  )
};

export default connector(App);