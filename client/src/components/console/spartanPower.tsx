import React from 'react';
import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import spartanPowerCrew from "./../../media/spartanPowerCrew.png";

interface AppProps {
  className?: string;
};

const spartanPower: React.FC<AppProps> = ( props ) => {
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
          <Col style={{border:"white solid 1px", color:"gold"}}> 158.63</Col>
          <Col xs={5} style={{border:"white solid 1px", color:"gold"}}> 160.47</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 161.14</Col>
          <Col style={{border:"white solid 1px", color:"gold"}}> 160.99</Col>
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

export const SpartanPower = styled(spartanPower)`
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
