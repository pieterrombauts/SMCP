import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spartanPowerCrew from "./../../media/spartanPowerCrew.png";
import { generateRandVal } from '../../dataGenerator';


interface SpartanPowerInt {
  className?: string;
};

const defaultValues = {
  Spartan: {
    voltage1: 0,
    voltage2: 0,
    voltage3: 0,
    voltage4: 0,
    current1: 0,
    current2: 0,
    current3: 0,
    current4: 0,
    array1: 0,
    array2: 0,
    array3: 0,
    array4: 0,

    voltage1b: 0,
    voltage2b: 0,
    voltage3b: 0,
    voltage4b: 0,
    current1b: 0,
    current2b: 0,
    current3b: 0,
    current4b: 0,
    array1b: 0,
    array2b: 0,
    array3b: 0,
    array4b: 0
    
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
          voltage1: generateRandVal(158, 160).toFixed(2),
          voltage2: generateRandVal(160, 162).toFixed(2),
          voltage3: generateRandVal(161, 163).toFixed(2),
          voltage4: generateRandVal(161, 163).toFixed(2),

          current1: generateRandVal(-45, -43).toFixed(2),
          current2: generateRandVal(-37, -35).toFixed(2),
          current3: generateRandVal(-29, -27).toFixed(2),
          current4: generateRandVal(-39, -37).toFixed(2),

          array1: generateRandVal(335, 340).toFixed(2),
          array2: generateRandVal(340, 345).toFixed(2),
          array3: generateRandVal(160, 165).toFixed(2),
          array4: generateRandVal(155, 160).toFixed(2),

          voltage1b: generateRandVal(150, 152).toFixed(2),
          voltage2b: generateRandVal(162, 162).toFixed(2),
          voltage3b: generateRandVal(161, 163).toFixed(2),
          voltage4b: generateRandVal(161, 163).toFixed(2),

          current1b: generateRandVal(-40, -38).toFixed(2),
          current2b: generateRandVal(-26, -23).toFixed(2),
          current3b: generateRandVal(-46, -44).toFixed(2),
          current4b: generateRandVal(-51, -49).toFixed(2),

          array1b: generateRandVal(20, 25).toFixed(2),
          array2b: generateRandVal(20, 25).toFixed(2),
          array3b: generateRandVal(200, 220).toFixed(2),
          array4b: generateRandVal(210, 230).toFixed(2)
        }
      }
      setValues(newValues);
    }, 5000);
    intervalRef.current = id;
  },[])

  return(
  
      <Container style={{paddingTop:"20%"}}>
        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Channel Name</Col>
          <Col style={{border:"white solid 1px", color:"white"}}>2B</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"white"}}>4A</Col>
          <Col style={{border:"white solid 1px", color:"white"}}>1A</Col>
          <Col style={{border:"white solid 1px", color:"white"}}>3B</Col>
        </Row>
        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Voltage (V)</Col>
          <Col id='voltage1' style={{border:"white solid 1px", color:"gold"}}>  {values.Spartan.voltage1}</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage2}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage3}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage4}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Current (A)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current1}</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current2}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current3}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current4}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Array Position (degrees)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.array1} </Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.array2}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.array3}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.array4}</Col>
        </Row>

        <Row>
          <img src={spartanPowerCrew} style={{width:"950px", height:"50px"}}/> 
        </Row>

        
      
        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Channel Name</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 4B</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}>2A</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 3A</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 1B</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Voltage (V)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage1b}</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage2b}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage3b}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.voltage4b}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Current (A)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current1b}</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current2b}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current3b}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.current4b}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Array Position (degrees)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.array1b}</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.array2b}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}>{values.Spartan.array3b}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}>{values.Spartan.array4b}</Col>
        </Row>

       </Container>
         
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
