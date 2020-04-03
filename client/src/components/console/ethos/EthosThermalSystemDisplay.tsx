import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import DestinyLab from './DestinyLab'
import HarmonyNode from './HarmonyNode'
import TranquilityNode from './TranquilityNode'
import { generateRandVal } from '../../../dataGenerator';

interface EthosTSDProps {
  className?: string;
};
const defaultValues = {
  destinyLab: {
    lowTLoop: 0,
    moderateTLoop: 0,
    lowTemp: 0,
    moderateTemp: 0
  },
  harmonyNode: {
    lowTLoop: 0,
    moderateTLoop: 0,
    lowTemp: 0,
    moderateTemp: 0
  },
  tranquilityNode: {
    lowTLoop: 0,
    moderateTLoop: 0,
    lowTemp: 0,
    moderateTemp: 0
  }

}

const UEthosThermalSystemDisplay: React.FC<EthosTSDProps> = (props) => {
  var [values, setValues] = useState(defaultValues)
  const intervalRef = useRef(0);

  useEffect(() => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      var newValues = {
        destinyLab: {
          lowTLoop: generateRandVal(60.34, 61.34).toFixed(2),
          moderateTLoop: generateRandVal(83.54, 83.74).toFixed(2),
          lowTemp: generateRandVal(6.31, 9.25).toFixed(2),
          moderateTemp: generateRandVal(17.04, 17.23).toFixed(2)
        },
        harmonyNode: {
          lowTLoop: generateRandVal(25.9, 27.1).toFixed(2),
          moderateTLoop: generateRandVal(39, 39.4).toFixed(2),
          lowTemp: generateRandVal(8.4, 8.99).toFixed(2),
          moderateTemp: generateRandVal(16.4, 16.98).toFixed(2)
        },
        tranquilityNode: {
          lowTLoop: generateRandVal(70.5, 70.9).toFixed(2),
          moderateTLoop: generateRandVal(74.54, 75.38).toFixed(2),
          lowTemp: generateRandVal(6.31, 9.25).toFixed(2),
          moderateTemp: generateRandVal(5.87, 9.45).toFixed(2)
        }

      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  }, [])
  return (
    <div className={props.className}>
      <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
        <image x={0} y={0} width={1300} height={990} href={'/media/Ethos_2.png'}></image>
        <rect x={45} y={635} rx="5" ry="5" width="1205" height="305" style={{ fill: "#36485b", stroke: "#2a3a3f", strokeWidth: "5" }} />

        <text x="25%" y="68%" fill="white" font-size="20" font-family="Verdana">Low T Loop</text>
        <text x="23%" y="70%" fill="white" font-size="20" font-family="Verdana">Coolant Quality</text>
        <text x="27.25%" y="72%" fill="white" font-size="20" font-family="Verdana">(%)</text>

        <text x="44%" y="68%" fill="white" font-size="20" font-family="Verdana">Moderate T Loop</text>
        <text x="44%" y="70%" fill="white" font-size="20" font-family="Verdana">Coolant Quality</text>
        <text x="48.25%" y="72%" fill="white" font-size="20" font-family="Verdana">(%)</text>

        <text x="65%" y="68%" fill="white" font-size="20" font-family="Verdana">Low Temp</text>
        <text x="65.5%" y="70%" fill="white" font-size="20" font-family="Verdana">Loop (°C)</text>

        <text x="80%" y="68%" fill="white" font-size="20" font-family="Verdana">Moderate Temp</text>
        <text x="81.5%" y="70%" fill="white" font-size="20" font-family="Verdana">Loop (°C)</text>

        <DestinyLab origin={[45, 60]} values={values} />
        <HarmonyNode origin={[50, 70]} values={values} />
        <TranquilityNode origin={[70, 80]} values={values} />

      </svg>
    </div>
  )
};

const EthosThermalSystemDisplay = styled(UEthosThermalSystemDisplay)`
  svg {
    width: 100%;
    height: 100%;
  }
  /* border: 1px solid white; */
`;

export default EthosThermalSystemDisplay;