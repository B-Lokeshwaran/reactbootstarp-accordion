import React from 'react'
import { Button, Col, Row,Container } from "react-bootstrap";

export default function Viewapp () {
    return(
        <div className="viewapp" style={{'marginTop':'-800px','marginLeft':'400px'}}>
       
        <p style={{'fontSize':"35px"}}>
        <span>
       <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 203.png')}alt='logo' style={{'marginRight':'30px', 'width':'45px','padding':'2px'}}/>
        View Applications
   
         
    
        </span>
       <hr style={{'marginRight':'135px'}}/>
        </p>
    <Container>
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'40px'}}>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>Name</span>
    </Col>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>ID</span>
    </Col>
    </Row>
    

   
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'10px'}}>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',fontWeight:'normal',color:'#B6B6B6'}}>Application Name</span></Col>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>8876</span></Col>
    <hr style={{'width':'87%'}}/>
  </Row>
    

  <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'40px'}}>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>Client ID</span>
    </Col>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>Client Secret</span>
    </Col>
    </Row>
    

   
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'10px'}}>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>8876</span></Col>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>8876</span></Col>
    <hr style={{'width':'87%'}}/>
  </Row>



  <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'40px'}}>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>Redirected URIs</span>
    </Col>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>State</span>
    </Col>
    </Row>
    

   
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'10px'}}>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>https://umusic.com</span></Col>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>State</span></Col>
    <hr style={{'width':'87%'}}/>
  </Row>
    
    
 

    </Container>

      </div>
    )}
