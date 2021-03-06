import React from 'react';
import Home from './Home'
import Join from './Join'
import Lobby from './Lobby'
import TutorLogin from './TutorLogin'
import { animateCSS } from '../../animation'
import { CSSTransition } from 'react-transition-group'
import { RootState } from '../../reducers';
import { animateMenus } from '../../slices/menuAnimationSlice'
import { connect, ConnectedProps } from 'react-redux';

interface MenuProps {};

const mapState = (state: RootState ) => ({
  homeState: state.menuAnimationReducer.home,
  tutorloginState: state.menuAnimationReducer.tutorlogin,
  joinState: state.menuAnimationReducer.join,
  lobbyState: state.menuAnimationReducer.lobby
})

const connector = connect(mapState, { animateMenus })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & MenuProps

const Menu: React.FC<Props> = ( props ) => {  
  return (
    <div id="menu-container">
      <CSSTransition 
        in={props.homeState === "show"}
        timeout={1000}
        classNames="home"
        unmountOnExit
        onEnter={() => {animateCSS("#home-container", "fadeIn", ["delay-1s"])}}
        onExit={() => {animateCSS("#home-container", "fadeOut")}}
      >
        <Home />
      </CSSTransition>
      <CSSTransition
        in={props.tutorloginState === "show"}
        timeout={1000}
        classNames="tutor-login"
        unmountOnExit
        onEnter={() => {animateCSS("#tutor-login-container", "fadeIn", ["delay-1s"])}}
        onExit={() => {animateCSS("#tutor-login-container", "fadeOut")}}
      >
        <TutorLogin />
      </CSSTransition>
      <CSSTransition
        in={props.joinState === "show"}
        timeout={1000}
        classNames="join"
        unmountOnExit
        onEnter={() => {animateCSS("#join-container", "fadeIn", ["delay-1s"])}}
        onExit={() => {animateCSS("#join-container", "fadeOut")}}
      >
        <Join />
      </CSSTransition>
      <CSSTransition
        in={props.lobbyState === "show"}
        timeout={1000}
        classNames="lobby"
        unmountOnExit
        onEnter={() => {animateCSS("#lobby-container", "fadeIn", ["delay-1s"])}}
        onExit={() => {animateCSS("#lobby-container", "fadeOut")}}
      >
        <Lobby />
      </CSSTransition>
    </div>
  );
}

export default connector(Menu);