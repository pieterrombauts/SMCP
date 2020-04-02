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
    if (intervalRef.current != 0) {
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
          pressure: generateRandVal(),
          temp: generateRandVal(),
          ppO2: generateRandVal(),
          ppN2: generateRandVal(),
          ppCO2: generateRandVal()
        },
        harmony: {
          pressure: generateRandVal(),
          coolant_temp: generateRandVal()
        },
        quest: {
          pressure: generateRandVal(),
          crewlock_pressure: generateRandVal(),
          EVA_O2: generateRandVal(),
          N2: generateRandVal(),
          O2: generateRandVal()
        }
      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  },[])
  return(
    <div id="ethos-life-support-display-background" className={props.className}>
      <svg>
        <Tranquility origin={[45,45]} values={values}/>

        <rect x={935} y={5} rx="5" ry="5" width="295" height="330" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        <text x={950} y={45} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Kibo (JAXA)</text>

        <rect x={60} y={410} rx="5" ry="5" width="250" height="270" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        <text x={75} y={450} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Unity Node</text>

        <Destiny origin={[350,410]} values={values}/>
        <Harmony origin={[900,410]} values={values}/>
        <QuestAirlock origin={[45,720]} values={values}/>

        <rect x={955} y={750} rx="5" ry="5" width="250" height="200" style={{fill:"#333333", stroke:"#393939", strokeWidth:5, opacity:0.5}} />
        <text x={970} y={790} style={{fill: "white", fontSize: "30", fontWeight: "bold"}}>Columbus (ESA)</text>
      </svg>
    </div>
  )
};

const EthosLifeSupportDisplay = styled(UEthosLifeSupportDisplay)`
  background-image: url("/media/ISSLayout.png");
  background-repeat: no-repeat;
  z-index: 1;
  
  svg {
    width: 100%;
    height: 1050px;
  }
  /* border: 1px solid white; */
`;

export default EthosLifeSupportDisplay;