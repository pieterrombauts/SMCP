import React from 'react';
import styled from 'styled-components';

interface StarProps {
  small_stars: string;
  medium_stars: string;
  big_stars: string;
  className?: string;
};

const UStars: React.FC<StarProps> = ({ className, small_stars, medium_stars, big_stars }) => {
  return (
    <div id="stars" className={className} >
      <div id="stars1"></div>
      <div id="stars2"></div>
      <div id="stars3"></div>
    </div>
  );
}

export const Stars = styled(UStars)`
  @keyframes animStar {
      from {
          transform: translateX(0px);
      }
      to {
          transform: translateX(-2000px);
      }
  }
  
  #stars1 {
    z-index: -1;
    width: 1px;
    height: 1px;
    background: transparent;
    box-shadow: ${props => props.small_stars};
    animation: animStar 200s linear infinite;

    &::after {
        content: " ";
        position: absolute;
        left: 2000px;
        width: 1px;
        height: 1px;
        background: transparent;
        box-shadow: ${props => props.small_stars};
    }
  }

  #stars2 {
    z-index: -1;
    width: 2px;
    height: 2px;
    background: transparent;
    box-shadow: ${props => props.medium_stars};
    animation: animStar 150s linear infinite;

    &::after {
        content: " ";
        position: absolute;
        left: 2000px;
        width: 2px;
        height: 2px;
        background: transparent;
        box-shadow: ${props => props.medium_stars};
    }
  }

  #stars3 {
    z-index: -1;
    width: 3px;
    height: 3px;
    background: transparent;
    box-shadow: ${props => props.big_stars};
    animation: animStar 100s linear infinite;

    &::after {
        content: " ";
        position: absolute;
        left: 2000px;
        width: 3px;
        height: 3px;
        background: transparent;
        box-shadow: ${props => props.big_stars};
    }
  }

  height: 100%;
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
  z-index: -1;
`;