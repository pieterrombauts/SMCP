import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spartan_2 from "./../../media/Spartan_2.png";
import spartanExtDiagram from "./../../media/spartanExtDiagram.png";

interface AppProps {
  className?: string;
};

const spartanExtThermal: React.FC<AppProps> = ( props ) => {
  return(
  
      // <img src={spartan_2} style={{width:"200px"}}/> 

      <Container style={{paddingTop:"20%"}}>
        <Row>
          <Col ></Col>
          <Col style={{border:"white solid 1px", color:"white"}}>Loop A</Col>
          <Col style={{border:"white solid 1px", color:"white"}}>Loop B</Col>
        </Row>
        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>NH3 Flowrate (kg/hr)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 3489.20 </Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 4367.55</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}>NH3 Outlet Pressure (kPa)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 2107.94</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 2171.32</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}> NH3 Outlet Temperature (*C)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 4.14</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 4.52</Col>
        </Row>

        <Row>
          <Col style={{border:"white solid 1px", color:"white"}}> Rotating Radiator Position (deg)</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 25.09</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> -39.95</Col>
        </Row>
      
         <img src={spartanExtDiagram} style={{width:"950px"}}/> 

       </Container>


         
  );
}

export const SpartanExtThermal = styled(spartanExtThermal)`
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