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
    voltage4: 0
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
          voltage4: generateRandVal(161, 163).toFixed(2)
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
          <Col style={{border:"white solid 1px", color:"gold"}}> -45.74</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> -37.69</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> -29.65</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> -37.74</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Array Position (degrees)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 335.85</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> 340.75</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 160.16</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 159.83</Col>
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
          <Col style={{border:"white solid 1px", color:"gold"}}> 150.83</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> 160.99</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 160.27</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 160.22</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Current (A)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> -39.96</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> -26.36</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> -46.57</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> -51.18</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>Array Position (degrees)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 19.74</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> 20.45</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}>199.77</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}>199.73</Col>
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
