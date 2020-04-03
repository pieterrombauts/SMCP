import React from 'react';
import { ethosThermalSystemDisplay } from '../customTypes'

interface DestinyLabProps {
  origin: number[];
  values: ethosThermalSystemDisplay;
};

const DestinyLab: React.FC<DestinyLabProps> = (props) => {
  var [originX, originY] = props.origin;
  return (
    <g id="ethos-thermal-system-display-density-lab">
      <text x="5%" y="78%" fill="white" font-size="20" font-family="Verdana">Density Lab</text>
      <text x="27.25%" y="78%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.destinyLab.lowTLoop}</text>
      <text x="48.25%" y="78%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.destinyLab.moderateTLoop}</text>
      <text x="67.5%" y="78%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.destinyLab.lowTemp}</text>
      <text x="83%" y="78%" fill="#d6ab62" font-size="20" font-family="Verdana">{props.values.destinyLab.moderateTemp}</text>
    </g>
  )
};

export default DestinyLab;
