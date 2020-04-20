import React from 'react';
import { bmeEVASuitDisplay } from '../customTypes'

interface EVA1Props {
  values: bmeEVASuitDisplay;
};

const EVA1: React.FC<EVA1Props> = (props) => {
  return (
    <g id="bme-EVA-suit-EVA1">
      <text x="13%" y="12%" fill="white" fontSize="50" fontFamily="Verdana">EVA 1</text>

      <text x="38%" y="26%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.helmetPressure}</text>
      <text x="38%" y="41%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.o2}</text>
      <text x="38%" y="58%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.water}</text>
      <text x="38%" y="72%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.batteryCharge}</text>
      <text x="38%" y="86%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.pressure}</text>
      <text x="36%" y="97%" fill="#7ef56e" fontSize="25" fontFamily="Verdana"> ACTIVE</text>

      <image x="-13%" y="18%" width={800} height={800} href='/media/Bme_EVA_Suit_1.png'></image>

    </g>
  )
};

export default EVA1;