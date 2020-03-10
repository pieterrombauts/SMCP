import React from 'react';
import { Stars } from './Stars';

interface StarBackgroundProps {
  className?: string;
};

export const StarBackground: React.FC<StarBackgroundProps> = ({ className }) => {
  function multiple_box_shadow(n: number) {
    let value: string = `${Math.ceil(Math.random()*2000)}px ${Math.ceil(Math.random()*2000)}px #FFF`
    for(let i = 1; i < n; i++) {
      value = `${value} , ${Math.ceil(Math.random()*2000)}px ${Math.ceil(Math.random()*2000)}px #FFF`
    }
    return value;
  }
  const small_stars: string = multiple_box_shadow(700);
  const medium_stars: string = multiple_box_shadow(200);
  const big_stars: string = multiple_box_shadow(100);
  return (
    <Stars small_stars={small_stars} medium_stars={medium_stars} big_stars={big_stars} />
  );
}