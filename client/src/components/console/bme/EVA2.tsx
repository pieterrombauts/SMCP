import React from 'react';
import { bmeEVASuitDisplay } from '../customTypes'

interface EVA2Props {
    values: bmeEVASuitDisplay;
};

const EVA2: React.FC<EVA2Props> = (props) => {
    return (
        <g id="bme-EVA-suit-EVA2">
            <text x="72%" y="12%" fill="white" fontSize="50" fontFamily="Verdana">EVA 2</text>
            <text x="51%" y="26%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva2.helmetPressure}</text>
            <text x="51%" y="41%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva2.o2}</text>
            <text x="51%" y="58%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.water}</text>
            <text x="51%" y="72%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.batteryCharge}</text>
            <text x="51%" y="86%" fill="white" fontSize="25" fontFamily="Verdana">{props.values.eva1.pressure}</text>
            <text x="51%" y="97%" fill="#7ef56e" fontSize="25" fontFamily="Verdana"> ACTIVE</text>
            <image x="50%" y="18%" width={800} height={800} href='/media/Bme_EVA_Suit_2.png'></image>
        </g>
    )
};

export default EVA2;