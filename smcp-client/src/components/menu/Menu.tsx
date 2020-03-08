import React from 'react';
import Home from './Home'
import Join from './Join'
import Lobby from './Lobby'
import socket from './Socket';
import { CSSTransition } from 'react-transition-group'
import { RootState } from '../reducers';
import { animateMenus } from '../slices/menuAnimationSlice'
import { connect, ConnectedProps } from 'react-redux';

interface MenuProps {};

const mapState = (state: RootState ) => ({
  homeState: state.menuAnimationReducer.home,
  joinState: state.menuAnimationReducer.join,
  lobbyState: state.menuAnimationReducer.lobby
})

const connector = connect(mapState, { animateMenus })
type PropsFromRedux = ConnectedProps<typeof connector>
type Props = PropsFromRedux & MenuProps

const Menu: React.FC<Props> = ( props ) => {  
  function animateCSS(element: string, animationName: string, animationModifiers?: string[]) {
    const node = document.querySelector(element);
    if (node) {
      node.classList.add("animated", animationName)
      if (animationModifiers) { node.classList.add(...animationModifiers) };
    }
    
    function handleAnimationEnd() {
      if (node) {
        node.classList.remove('animated', animationName);
        if (animationModifiers) { node.classList.remove(...animationModifiers) }
        node.removeEventListener('animationend', handleAnimationEnd);
      }
    }

    if (node) {
      node.addEventListener('animationend', handleAnimationEnd)
    }
  }
  
  return (
    <>
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
    </>
  );
}

export default connector(Menu);