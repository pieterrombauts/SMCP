import React from 'react';
import { ethosThermalSystemDisplay } from '../customTypes'

interface DestinyLabProps {
  values: ethosThermalSystemDisplay;
};

const DestinyLab: React.FC<DestinyLabProps> = (props) => {
  return (
    <g id="ethos-thermal-system-display-density-lab">
      <text x="5%" y="78%" fill="white" fontSize="20" fontFamily="Verdana">Destiny Lab</text>
      <text x="27.25%" y="78%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.destinyLab.lowTLoop}</text>
      <text x="48.25%" y="78%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.destinyLab.moderateTLoop}</text>
      <text x="67.5%" y="78%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.destinyLab.lowTemp}</text>
      <text x="83%" y="78%" fill="#d6ab62" fontSize="20" fontFamily="Verdana">{props.values.destinyLab.moderateTemp}</text>
    </g>
  )
};

export default DestinyLab;
