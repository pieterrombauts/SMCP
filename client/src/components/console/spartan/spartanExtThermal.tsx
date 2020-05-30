import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { generateRandVal } from '../../../dataGenerator';

interface AppProps {
  className?: string;
};

const defaultValues = {
  Spartan: {
    NH3Flow1: 0,
    NH3Flow2: 0,

    NH3Out1: 0,
    NH3Out2: 0,

    NH3OutTemp1: 0,
    NH3OutTemp2: 0,

    rotDeg1: 0,
    rotDeg2: 0
  }
}

const USpartanExtThermal: React.FC<AppProps> = ( props ) => {

  var [values, setValues] = useState(defaultValues)
  const intervalRef = useRef(0);
  useEffect(() => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      var newValues = {
        Spartan: {
          NH3Flow1: generateRandVal(3489, 3500).toFixed(2),
          NH3Flow2: generateRandVal(4400, 4500).toFixed(2),

          NH3Out1: generateRandVal(2100, 2200).toFixed(2),
          NH3Out2: generateRandVal(2200, 2300).toFixed(2),

          NH3OutTemp1: generateRandVal(4, 4.5).toFixed(2),
          NH3OutTemp2: generateRandVal(4.5, 5).toFixed(2),

          rotDeg1: generateRandVal(25, 30).toFixed(2),
          rotDeg2: generateRandVal(-40, -35).toFixed(2),

        }
      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  },[])

  return(
    <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
      <image x={0} y={0} width={1300} height={990} href={'/media/Spartan_2.png'}></image>
      <rect x="45%" y="22%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="46%" y="24%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.NH3Flow1}</text>
      <rect x="55%" y="22%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="56%" y="24%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.NH3Flow2}</text>

      <rect x="45%" y="25.75%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="46%" y="27.75%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.NH3Out1}</text>
      <rect x="55%" y="25.75%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="56%" y="27.75%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.NH3Out2}</text>

      <rect x="45%" y="29.5%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="46%" y="31.5%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.NH3OutTemp1}</text>
      <rect x="55%" y="29.5%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="56%" y="31.5%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.NH3OutTemp2}</text>
      
      <rect x="45%" y="33.25%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="46%" y="35.25%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.rotDeg1}</text>
      <rect x="55%" y="33.25%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#1C4B5D"}} />
      <text x="56%" y="35.25%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.rotDeg2}</text>  
    </svg>
  );
}

export const SpartanExtThermal = styled(USpartanExtThermal)`
  width: 100%;
  height: 100%;
  position: absolute;

  #spartan-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #spartan-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #spartan-buttons .nav-item a {
    padding: 20px 30px;
  }
`;