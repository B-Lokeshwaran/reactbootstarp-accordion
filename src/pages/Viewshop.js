import React from 'react'
import { Button, Col, Row,Container } from "react-bootstrap";

export default function Viewshop () {
    return(
        <div className="viewshop" style={{'marginTop':'-800px','marginLeft':'400px'}}>
       
        <p style={{'fontSize':"35px"}}>
        <span>
       <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/icon.png')}alt='logo' style={{'marginRight':'30px', 'width':'45px','padding':'2px'}}/>
        View Store
   
         
    
        </span>
       <hr style={{'marginRight':'414px'}}/>
        </p>
    <Container>
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'40px'}}>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>Name</span>
    </Col>
   
    </Row>
    

   
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'10px'}}>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>Store Name</span></Col>
    
    <hr style={{'width':'60%'}}/>
  </Row>
    

  <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'40px'}}>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>ID</span>
    </Col>
    
    </Row>
    

   
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'10px'}}>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>8891</span></Col>
   
    <hr style={{'width':'60%'}}/>
  </Row>



  <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'40px'}}>
    <Col>
    <span style={{marginLeft:'-8px',fontWeight:'bold'}}>Secret</span>
    </Col>
    
    </Row>
    

   
    <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white',marginTop:'10px'}}>
    <Col><span style={{marginLeft:'-8px',fontSize:'30px',color:'#B6B6B6'}}>Secret</span></Col>
   
    <hr style={{'width':'60%'}}/>
  </Row>
    
    
 

    </Container>

      </div>
    )}
