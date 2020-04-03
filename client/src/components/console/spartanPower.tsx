import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spartanPowerCrew from "./../../media/spartanPowerCrew.png";
import { generateRandVal } from '../../dataGenerator';

import spartan_1 from "./../../media/Spartan_1.png"


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
    if (intervalRef.current != 0) {
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

    
      <div>


      <img src={spartan_1} style={{width:"100%",position:"absolute"}}/>  
        <svg width="1000" height="1000" style={{position:"absolute"}}>
        
            <rect x="20%" y="21.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="20.5%" y="23%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage2b}</text>
            <rect x="20%" y="24.5%" rx="5" ry="5" width="5%" height="2%" style={{fill:"#000000"}} />
            <text x="20.5%" y="26%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current2b}</text>
            <rect x="20%" y="28.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="20.5%" y="30%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array2b}</text>

            <rect x="20%" y="50.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="20.5%" y="51.5%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage4b}</text>
            <rect x="20%" y="53.5%" rx="5" ry="5" width="5%" height="2%" style={{fill:"#000000"}} />
            <text x="20.5%" y="55%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current4b}</text>
            <rect x="20%" y="57.5%" rx="5" ry="5" width="5%" height="2%" style={{fill:"#000000"}} />
            <text x="20.5%" y="58%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array4b}</text> 


            <rect x="34%" y="21.5%" rx="5" ry="5" width="7%" height="2%" style={{fill:"#000000"}} />
            <text x="34.5%" y="23%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage4b}</text>
            <rect x="34%" y="24.5%" rx="5" ry="5" width="7%" height="2%" style={{fill:"#000000"}} />
            <text x="34.5%" y="26%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current4b}</text>
            <rect x="34%" y="28.5%" rx="5" ry="5" width="7%" height="2%" style={{fill:"#000000"}} />
            <text x="34.5%" y="30%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array4b}</text>
            
            <rect x="34%" y="50.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="34.5%" y="51.5%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage2a}</text>
            <rect x="34%" y="53.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="34.5%" y="55%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current2a}</text>
            <rect x="34%" y="57.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="34.5%" y="58%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array2a}</text>
            

            <rect x="73%" y="21.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="73.5%" y="23%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage1a}</text>
            <rect x="73%" y="24.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="73.5%" y="26%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current1a}</text>
            <rect x="73%" y="28.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="73.5%" y="30%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array1a}</text> 
            
            <rect x="73%" y="50.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="73.5%" y="51.5%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage3a}</text>
            <rect x="73%" y="53.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="73.5%" y="55.5%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current3a}</text>
            <rect x="73%" y="57.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="73.5%" y="58%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array3a}</text>


            <rect x="87%" y="21.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="87.5%" y="23%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage3b}</text>
            <rect x="87%" y="24.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="87.5%" y="26%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current3b}</text>
            <rect x="87%" y="28.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="87.5%" y="30%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array3b}</text> 
            
            <rect x="87%" y="50.5%" rx="5" ry="5" width="6%" height="1.5%" style={{fill:"#000000"}} />
            <text x="87.5%" y="51.5%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.voltage1b}</text>
            <rect x="87%" y="53.5%" rx="5" ry="5" width="6%" height="2%" style={{fill:"#000000"}} />
            <text x="87.5%" y="55%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.current1b}</text>
            <rect x="87%" y="57.5%" rx="5" ry="5" width="6%" height="1.5%" style={{fill:"#000000"}} />
            <text x="87.5%" y="58%" fill="gold" font-size="17" font-family="Verdana">{values.Spartan.array1b}</text>   
       
       
        </svg>

      </div>
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
