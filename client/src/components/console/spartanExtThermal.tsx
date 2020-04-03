import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spartan_2 from "./../../media/Spartan_2.png";
import spartanExtDiagram from "./../../media/spartanExtDiagram.png";
import { generateRandVal } from '../../dataGenerator';

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
    if (intervalRef.current != 0) {
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
  
      <Container style={{paddingTop:"20%"}}>
        <Row>
          <Col ></Col>
          <Col style={{border:"white solid 1px", color:"white"}}>Loop A</Col>
          <Col style={{border:"white solid 1px", color:"white"}}>Loop B</Col>
        </Row>
        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>NH3 Flowrate (kg/hr)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.NH3Flow1} </Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.NH3Flow2}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>NH3 Outlet Pressure (kPa)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.NH3Out1}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.NH3Out2}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}> NH3 Outlet Temperature (*C)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.NH3OutTemp1}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.NH3OutTemp2}</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}> Rotating Radiator Position (deg)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.rotDeg1}</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> {values.Spartan.rotDeg2}</Col>
        </Row>
      
         <img src={spartanExtDiagram} style={{width:"100%"}}/> 

       </Container>


         
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




// import React from 'react';
// import GridLayout from 'react-grid-layout';
// import spartan_2 from "./../../media/Spartan_2.png";
// import spartan_1 from "./../../media/Spartan_1.png";
// import ethos_3 from "./../../media/Ethos_3.png"

// import _ from "lodash";
// import RGL, { WidthProvider } from "react-grid-layout";
// const ReactGridLayout = WidthProvider(RGL);

// class myFirstGrid extends React.Component {
//   render() {
//     // layout is an array of objects, see the demo for more complete usage
//     const layout = [
//       {i: 'a', x: 0, y: 0, w: 3, h: 1 },
//       {i: 'b', x: 1, y: 0, w: 3, h: 1},
//       {i: 'c', x: 4, y: 0, w: 3, h: 1}
//     ];
//     return (
//       <GridLayout className="layout" layout={layout} cols={12} rowHeight={200} width={1200}>
//         {/* <div key="a"> <img src={spartan_1} style={{width:"200px"}}/> </div>
//         <div key="b"> <img src={spartan_2} style={{width:"200px"}}/> </div>
//         <div key="c"> <img src={ethos_3} style={{width:"200px"}}/></div> */}

//         <div style={{border:"1px white solid",width:"200px"}} key="a"> 
//           <img src={spartan_1} style={{width:"200px"}}/> 
//         </div>
//         <div style={{border:"1px white solid"}} key="b"> 
//           <img src={spartan_2} style={{width:"200px"}}/>
//          </div>
//         <div style={{border:"1px white solid"}} key="c"> <img src={ethos_3} style={{width:"200px"}}/> </div>
//       </GridLayout>
//     )
//   }
// }

// export const MyFirstGrid = myFirstGrid;