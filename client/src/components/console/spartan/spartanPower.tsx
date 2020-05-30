import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { generateRandVal } from '../../../dataGenerator';


interface SpartanPowerInt {
  className?: string;
};

const defaultValues = {
  Spartan: {
    voltage2b: 0,
    current2b: 0,
    array2b: 0,

    voltage4b: 0,
    current4b: 0,
    array4b: 0,

    voltage4a: 0,
    current4a: 0,
    array4a: 0,

    voltage2a: 0,
    current2a: 0,
    array2a: 0,

    voltage1a: 0,
    current1a: 0,
    array1a: 0,

    voltage3a: 0,
    current3a: 0,
    array3a: 0,

    voltage3b: 0,
    current3b: 0,
    array3b:0,

    voltage1b:  0,
    current1b:  0,
    array1b:  0
  }
}

const USpartanPower: React.FC<SpartanPowerInt> = ( props ) => {
  var [values, setValues] = useState(defaultValues)
  const intervalRef = useRef(0);
  useEffect(() => {
    if (intervalRef.current !== 0) {
      clearInterval(intervalRef.current);
    }
    const id = setInterval(() => {
      var newValues = {
        Spartan: {
          voltage2b: generateRandVal(158, 160).toFixed(2),
          current2b: generateRandVal(-45, -43).toFixed(2),
          array2b: generateRandVal(335, 340).toFixed(2),

          voltage4b: generateRandVal(161, 163).toFixed(2),
          current4b: generateRandVal(-37, -35).toFixed(2),
          array4b: generateRandVal(155, 160).toFixed(2),

          voltage4a: generateRandVal(160, 162).toFixed(2),
          current4a: generateRandVal(-37, -35).toFixed(2),
          array4a: generateRandVal(340, 345).toFixed(2),

          voltage2a: generateRandVal(150, 152).toFixed(2),
          current2a: generateRandVal(-26, -23).toFixed(2),
          array2a: generateRandVal(20, 25).toFixed(2),

          voltage1a: generateRandVal(161, 163).toFixed(2),
          current1a: generateRandVal(-29, -27).toFixed(2),
          array1a: generateRandVal(160, 165).toFixed(2),

          voltage3a:  generateRandVal(161, 163).toFixed(2),
          current3a: generateRandVal(-29, -27).toFixed(2),
          array3a: generateRandVal(160, 165).toFixed(2),

          voltage3b:  generateRandVal(161, 163).toFixed(2),
          current3b: generateRandVal(-29, -27).toFixed(2),
          array3b: generateRandVal(155, 160).toFixed(2),

          voltage1b:  generateRandVal(161, 163).toFixed(2),
          current1b:  generateRandVal(-51, -49).toFixed(2),
          array1b:  generateRandVal(210, 230).toFixed(2)
        }
      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  },[])

  return(
    <svg preserveAspectRatio='xMidYMid meet' viewBox='0 0 1300 990'>
      <image x={0} y={0} width={1300} height={990} href={'/media/Spartan_1.png'}></image>
      <rect x="21%" y="32%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="20.5%" y="34.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage2b}</text>
      <rect x="21%" y="37%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="20.5%" y="39.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current2b}</text>
      <rect x="21%" y="42%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="20.5%" y="44.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array2b}</text>

      <rect x="21%" y="72%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="20.5%" y="74.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage4b}</text>
      <rect x="21%" y="77%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="20.5%" y="79.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current4b}</text>
      <rect x="21%" y="82%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="20.5%" y="84.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array4b}</text> 


      <rect x="36%" y="32%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="35.8%" y="34.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage4b}</text>
      <rect x="36%" y="37%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="35.8%" y="39.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current4b}</text>
      <rect x="36%" y="42%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="35.8%" y="44.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array4b}</text>
      
      <rect x="36%" y="72%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="35.8%" y="74.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage2a}</text>
      <rect x="36%" y="77%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="35.8%" y="79.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current2a}</text>
      <rect x="36%" y="82%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="35.8%" y="84.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array2a}</text>
      

      <rect x="76.5%" y="32%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="76.5%" y="34.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage1a}</text>
      <rect x="76.5%" y="37%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="76.5%" y="39.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current1a}</text>
      <rect x="76.5%" y="42%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="76.5%" y="44.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array1a}</text> 
      
      <rect x="76.5%" y="72%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="76.5%" y="74.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage3a}</text>
      <rect x="76.5%" y="77%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="76.5%" y="79.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current3a}</text>
      <rect x="76.5%" y="82%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="76.5%" y="84.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array3a}</text>


      <rect x="92%" y="32%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="92%" y="34.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage3b}</text>
      <rect x="92%" y="37%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="92%" y="39.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current3b}</text>
      <rect x="92%" y="42%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="92%" y="44.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array3b}</text> 
      
      <rect x="92%" y="72%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="92%" y="74.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.voltage1b}</text>
      <rect x="92%" y="77%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="92%" y="79.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.current1b}</text>
      <rect x="92%" y="82%" rx="5" ry="5" width="8%" height="3%" style={{fill:"#000000"}} />
      <text x="92%" y="84.4%" fill="#d6ab62" fontSize="17" fontFamily="Verdana">{values.Spartan.array1b}</text>   
    </svg>
  );
}

export const SpartanPower = styled(USpartanPower)`
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
