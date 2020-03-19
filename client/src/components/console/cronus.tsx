import React from 'react';
import styled from 'styled-components';
import Nav from 'react-bootstrap/Nav'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import cronus_1 from "./../../media/Cronus_1.png"
import cronus_2 from "./../../media/Cronus_2.png"
import cronus_3 from "./../../media/Cronus_3.png"
import cronus_4 from "./../../media/Cronus_4.png"
import cronus_5 from "./../../media/Cronus_5.png"

interface AppProps {
  className?: string;
};

const cronus: React.FC<AppProps> = (props) => {
  return (
    <Tab.Container id="cronus-tabs" defaultActiveKey="comp-net">
      <Row className={props.className}>
        <Col id="cronus-content" sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="comp-net">
              <img src={cronus_1} style={{ width: "1200px" }} />
            </Tab.Pane>
            <Tab.Pane eventKey="uhf-comms">
            <img src={cronus_2} style={{width:"1200px",position:"absolute"}}/>  
              <svg width="1000" height="1000" style={{position:"absolute"}}>
                
                <rect x="50" y="350" rx="5" ry="5" width="460" height="182" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
                
                <text x="6%" y="38%" fill="white" font-size="25" font-family="Verdana">Space to Space Station</text>

                <text x="8%" y="43%" fill="white" font-size="20" font-family="Verdana">Radio1 Power</text>
                <text x="25%" y="43%" fill="#d6ab62" font-size="20" font-family="Verdana">Off</text>

                <text x="8%" y="46%" fill="white" font-size="20" font-family="Verdana">Radio1 Power</text>
                <text x="25%" y="46%" fill="#d6ab62" font-size="20" font-family="Verdana">Off</text>

                <text x="6%" y="51%" fill="white" font-size="25" font-family="Verdana">UHF Sync Lcok</text>
                <text x="28%" y="51%" fill="#d6ab62" font-size="20" font-family="Verdana">Frame Sync</text>
                
              </svg>

              <svg width="100%" height="100%" style={{position:"absolute"}}>
                
                <rect x="740" y="370" rx="5" ry="5" width="390" height="135" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
                
                <text x="62%" y="46%" fill="white" font-size="20" font-family="Verdana">IAC1 Power</text>
                <text x="75%" y="46%" fill="#d6ab62" font-size="20" font-family="Verdana">Active</text>

                <text x="62%" y="49%" fill="white" font-size="20" font-family="Verdana">IAC2 Power</text>
                <text x="75%" y="49%" fill="#d6ab62" font-size="20" font-family="Verdana">Active</text>

              </svg>
            </Tab.Pane>
            
            <Tab.Pane eventKey="s-band-comms">
            <img src={cronus_3} style={{width:"1200px",position:"absolute"}}/>  
              <svg width="1000" height="1000" style={{position:"absolute"}}>
                
                <rect x="415" y="265" rx="5" ry="5" width="415" height="385" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}} />
                
                <text x="42.5%" y="31.5%" fill="white" font-size="45" font-family="Verdana">S-Band Status</text>

                <text x="42.5%" y="35%" fill="white" font-size="20" font-family="Verdana">Active S-Band</text>
                <text x="65%" y="35%" fill="#d6ab62" font-size="20" font-family="Verdana">1</text>

                <text x="42.5%" y="38%" fill="white" font-size="20" font-family="Verdana">S-Band1 Power</text>
                <text x="65%" y="38%" fill="#d6ab62" font-size="20" font-family="Verdana">On</text>

                <text x="42.5%" y="41%" fill="white" font-size="20" font-family="Verdana">Elevation Gimbal</text>
                <text x="65%" y="41%" fill="#d6ab62" font-size="20" font-family="Verdana">59.14</text>
                <text x="72%" y="41%" fill="white" font-size="20" font-family="Verdana">°</text>

                <text x="42.5%" y="44%" fill="white" font-size="20" font-family="Verdana">Azimuth Gimbal</text>
                <text x="65%" y="44%" fill="#d6ab62" font-size="20" font-family="Verdana">1.59</text>
                <text x="72%" y="44%" fill="white" font-size="20" font-family="Verdana">°</text>


                <text x="42.5%" y="47%" fill="white" font-size="20" font-family="Verdana">S-Band2 Power</text>
                <text x="65%" y="47%" fill="#d6ab62" font-size="20" font-family="Verdana">Off</text>

                <text x="42.5%" y="50%" fill="white" font-size="20" font-family="Verdana">Elevation Gimbal</text>
                <text x="65%" y="50%" fill="#d6ab62" font-size="20" font-family="Verdana">0.00</text>
                <text x="72%" y="50%" fill="white" font-size="20" font-family="Verdana">°</text>


                <text x="42.5%" y="53%" fill="white" font-size="20" font-family="Verdana">Azimuth Gimbal</text>
                <text x="65%" y="53%" fill="#d6ab62" font-size="20" font-family="Verdana">0.00</text>
                <text x="72%" y="53%" fill="white" font-size="20" font-family="Verdana">°</text>
              </svg>
              
            </Tab.Pane>

            <Tab.Pane eventKey="vid-comms-1">
              <img src={cronus_4} style={{ position:"absolute", width: "1200px" }} />
              <svg width="1000" height="1000" style={{position:"absolute"}}>
                
                <rect x="415" y="265" rx="5" ry="5" width="405" height="375" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}}/>
                
                <text x="42.5%" y="31.5%" fill="white" font-size="45" font-family="Verdana">Ku-Band Status</text>

                <text x="42.5%" y="35%" fill="white" font-size="20" font-family="Verdana">Downlink 1 Status</text>
                <text x="65%" y="35%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>

                <text x="42.5%" y="38%" fill="white" font-size="20" font-family="Verdana">Downlink 2 Status</text>
                <text x="65%" y="38%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>

                <text x="42.5%" y="41%" fill="white" font-size="20" font-family="Verdana">Downlink 3 Status</text>
                <text x="65%" y="41%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>

                <text x="42.5%" y="44%" fill="white" font-size="20" font-family="Verdana">Downlink 4 Status</text>
                <text x="65%" y="44%" fill="#d6ab62" font-size="20" font-family="Verdana">ACTIVE</text>


                <text x="42.5%" y="55%" fill="white" font-size="20" font-family="Verdana">Elevation Gimbal</text>
                <text x="67%" y="55%" fill="#d6ab62" font-size="20" font-family="Verdana">-48.85</text>
                <text x="75%" y="55%" fill="white" font-size="20" font-family="Verdana">°</text>

                <text x="42.5%" y="58%" fill="white" font-size="20" font-family="Verdana">Cross-Elevation Gimbal</text>
                <text x="67%" y="58%" fill="#d6ab62" font-size="20" font-family="Verdana">36.39</text>
                <text x="75%" y="58%" fill="white" font-size="20" font-family="Verdana">°</text>
              </svg>

            </Tab.Pane>
            
            
            <Tab.Pane eventKey="vid-comms-2">
            <img src={cronus_5} style={{ position:"absolute", width: "1200px" }} />
              <svg width="1000" height="1000" style={{position:"absolute"}}>
                
                <rect x="570" y="550" rx="5" ry="5" width="370" height="160" style={{fill:"#36485b",stroke:"#2a3a3f",strokeWidth:"5"}}/>
                
                <text x="58%" y="58%" fill="white" font-size="17" font-family="Verdana">1)</text>
                <text x="61%" y="58%" fill="#d6ab62" font-size="20" font-family="Verdana">P1 Upper Outboard (P1UPOB)</text>

                <text x="58%" y="62%" fill="white" font-size="17" font-family="Verdana">1)</text>
                <text x="61%" y="62%" fill="#d6ab62" font-size="20" font-family="Verdana">P1 Lower Outboard (P1LOOB)</text>

                <text x="58%" y="66%" fill="white" font-size="17" font-family="Verdana">1)</text>
                <text x="61%" y="66%" fill="#d6ab62" font-size="20" font-family="Verdana">Labs Starboard (LABS)</text>

                <text x="58%" y="70%" fill="white" font-size="17" font-family="Verdana">1)</text>
                <text x="61%" y="70%" fill="#d6ab62" font-size="20" font-family="Verdana">0E</text>

                
                
              </svg>
            </Tab.Pane>
          
          </Tab.Content>
        </Col>
        <Col id="cronus-buttons" sm={2}>
          <Nav variant="pills" className="flex-column">
            <Nav.Item>
              <Nav.Link eventKey="comp-net">COMPUTER NETWORK</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="uhf-comms">UHF COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="s-band-comms">S-BAND COMMS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid-comms-1">VIDEO COMMS 1</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="vid-comms-2">VIDEO COMMS 2</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
    </Tab.Container>

    //  <Tabs  defaultActiveKey="Cronus_console" id="uncontrolled-tab-example" style={{ float: "right"}} >

    //   <Tab eventKey="CRONUS_1" title="Computer Network">
    //     <img src={cronus_1} style={{width:"300px"}}/> 
    //   </Tab>

    //   <Tab eventKey="CRONUS_2" title="UHF Communication">
    //     <img src={cronus_2} style={{width:"300px"}}/> 
    //   </Tab>

    //   <Tab eventKey="CRONUS_3" title="S-Band Communication">
    //     <img src={cronus_3} style={{width:"300px"}}/> 
    //   </Tab>

    //   <Tab eventKey="CRONUS_4" title="Video Communication">
    //     <img src={cronus_4} style={{width:"300px"}}/> 
    //   </Tab>

    //   <Tab eventKey="CRONUS_5" title="Video Communication 2">
    //     <img src={cronus_5} style={{width:"300px"}}/> 
    //   </Tab>


    // </Tabs>
  );
}

export const Cronus = styled(cronus)`
  width: 100%;
  height: 100%;
  position: absolute;

  #cronus-buttons {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  #cronus-buttons .nav {
    margin-left: 20px;
    max-width: 300px;
    background-color: #f8f9fa;
    border-radius: 3px;
  }

  #cronus-buttons .nav-item a {
    padding: 20px 30px;
  }

`;