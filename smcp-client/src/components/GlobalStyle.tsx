import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @keyframes slideUpFadeOut {
    from {
        opacity: 1;
        transform: translate(-50%, -50%);
        visibility: visible;
        z-index: 3;
    }
    to {
        opacity: 0;
        transform: translate(-50%, -250px);
        visibility: hidden;
        z-index: 0;
    }
  }

  @keyframes slideDownFadeIn {
      from {
          opacity: 0;
          transform: translate(-50%, -250px);
          visibility: hidden;
          z-index: 0;
      }
      to {
          opacity: 1;
          transform: translate(-50%, -50%);
          visibility: visible;
          z-index:3;
      }
  }

  @keyframes slideDownFadeOut {
      from {
          opacity: 1;
          transform: translate(-50%, -50%);
          visibility: visible;
          z-index: 3;
      }
      to {
          opacity: 0;
          transform: translate(-50%, 150px);
          visibility: hidden;
          z-index: 0;
      }
  }

  @keyframes slideUpFadeIn {
      from {
          opacity: 0;
          transform: translate(-50%, 150px);
          visibility: hidden;
          z-index: 0;
      }
      to {
          opacity: 1;
          transform: translate(-50%, -50%);
          visibility: visible;
          z-index: 3;
      }
  }

  .hide-up {
    animation: slideUpFadeOut ease-in 1s;
    animation-fill-mode: both;
  }
  .show-down {
      animation: slideDownFadeIn ease-out 1s;
      animation-fill-mode: both;
      animation-delay: 1s;
  }
  .hide-down {
      animation: slideDownFadeOut ease-in 1s;
      animation-fill-mode: both;
  }
  .show-up {
      animation: slideUpFadeIn ease-out 1s;
      animation-fill-mode: both;
      animation-delay: 1s;
  }
  
  #root, body, html {
    height: 100%;
    overflow: hidden;
  }
`;