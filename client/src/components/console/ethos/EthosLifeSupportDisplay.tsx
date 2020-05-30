import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Tranquility from './Tranquility';
import Destiny from './Destiny';
import Harmony from './Harmony';
import QuestAirlock from './QuestAirlock';
import { generateRandVal } from '../../../dataGenerator';

interface EthosLSDProps {
  className?: string;
};

const defaultValues = {
  tranquility: {
    pressure: 0,
    temp: 0,
    ppO2: 0,
    ppN2: 0,
    ppCO2: 0
  },
  destiny: {
    pressure: 0,
    temp: 0,
    ppO2: 0,
    ppN2: 0,
    ppCO2: 0
  },
  harmony: {
    pressure: 0,
    coolant_temp: 0
  },
  quest: {
    pressure: 0,
    crewlock_pressure: 0,
    EVA_O2: 0,
    N2: 0,
    O2: 0
  }
}

const UEthosLifeSupportDisplay: React.FC<EthosLSDProps> = ( props ) => {
  var [values, setValues] = useState(defaultValues)
  const intervalRef = useRef(0);

  useEffect(() => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      var newValues = {
        tranquility: {
          pressure: generateRandVal(737, 743).toFixed(2),
          temp: generateRandVal(21.8,22.2).toFixed(2),
          ppO2: generateRandVal(162.50,162.50).toFixed(2),
          ppN2: generateRandVal(565.35, 565.35).toFixed(2),
          ppCO2: generateRandVal(3.48, 3.48).toFixed(2)
        },
        destiny: {
          pressure: generateRandVal(737, 743).toFixed(2),
          temp: generateRandVal(21.8,22.2).toFixed(2),
          ppO2: generateRandVal(162.50,162.50).toFixed(2),
          ppN2: generateRandVal(565.35, 565.35).toFixed(2),
          ppCO2: generateRandVal(3.48, 3.48).toFixed(2)
        },
        harmony: {
          pressure: generateRandVal(737, 743).toFixed(2),
          coolant_temp: generateRandVal(8.8, 9.2).toFixed(2),
        },
        quest: {
          pressure: generateRandVal(737, 743).toFixed(2),
          crewlock_pressure: generateRandVal(732, 738).toFixed(2),
          EVA_O2: generateRandVal(10070, 10090).toFixed(2),
          N2: generateRandVal(9010, 9030).toFixed(2),
          O2: generateRandVal(7640, 7660).toFixed(2),
        }
      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  },[])
  return(
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1400 1000'>
        <image x={0} y={0} width={1300} height={990} href={'/media/ISSLayout.png'}></image>
        <Tranquility origin={[45,60]} values={values}/>

        <rect x={945} y={15} rx="5" ry="5" width="295" height="330" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        <text x={960} y={55} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Kibo (JAXA)</text>

        <rect x={65} y={430} rx="5" ry="5" width="250" height="270" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        <text x={80} y={470} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Unity Node</text>

        <Destiny origin={[360,430]} values={values}/>
        <Harmony origin={[905,430]} values={values}/>
        <QuestAirlock origin={[45,730]} values={values}/>

        <rect x={965} y={770} rx="5" ry="5" width="250" height="200" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        <text x={980} y={810} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Columbus (ESA)</text>
      </svg>
    </div>
  )
};

const EthosLifeSupportDisplay = styled(UEthosLifeSupportDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
  /* border: 1px solid white; */
`;

export default EthosLifeSupportDisplay;