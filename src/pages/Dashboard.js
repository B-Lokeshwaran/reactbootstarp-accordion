import React from 'react'
import { Button, Col, Row,Container } from "react-bootstrap";


function Dashboard() {
  return (
    <div className="dashboard ">
        <div>
        <p style={{'fontSize':"30px"}}>
   <span>
        <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 197.png')}alt='logo' style={{'marginRight':'10px', 'width':'40px','padding':'2px'}}/>Dashboard
        </span>
   <hr className="line" />
   </p>
        </div>
       
   
   
   <div >

      
       <Container >
           <div style={{'marginTop':'50px'}}>
      <Row xs={2} md={2} lg={8} style={{'backgroundColor':'white'}} >
       <Col>
   
    <span style={{'fontSize':'20px'}}>Application-Recent</span> 
    <Button variant="info" href="/allapplications" style={{'backgroundcolor':'#66D6FF','margin-left':'200px'}}>View all</Button>
    <hr style={{'width':'450px'}} />
    
  
    </Col>
    <Col><span style={{'fontSize':'20px'}}>Shopify Stores-Recent</span>
    <Button variant="info" href="/allshopifystores" style={{'backgroundcolor':'#66D6FF','margin-left':'200px'}}>View all</Button>
    <hr style={{'width':'483px'}} />
    </Col>
  </Row>

  <Row style={{'backgroundColor':'white'}}>
          <Col>
            Application Name
            <Button variant="outline-secondary" style={{'margin-left':'240px',width:'80px'}}> Edit </Button>
            <hr style={{'width':'450px'}}/>
          </Col>
          <Col>
            Store Name
            <Button variant="outline-secondary" style={{'margin-left':'313px',width:'80px'}}>Edit</Button>
            <hr style={{'width':'482px'}} />
          </Col>
        </Row>
        <Row style={{'backgroundColor':'white'}}>
          <Col>
            Application Name
            <Button variant="outline-secondary" style={{'margin-left':'240px',width:'80px'}}> Edit </Button>
            <hr style={{'width':'450px'}}/>
          </Col>
          <Col>
            Store Name
            <Button variant="outline-secondary" style={{'margin-left':'313px',width:'80px'}}>Edit</Button>
            <hr style={{'width':'482px'}} />
          </Col>
        </Row>
        <Row style={{'backgroundColor':'white'}}>
          <Col>
            Application Name
            <Button variant="outline-secondary" style={{'margin-left':'240px',width:'80px'}}> Edit </Button>
            <hr style={{'width':'450px'}}/>
          </Col>
          <Col>
            Store Name
            <Button variant="outline-secondary" style={{'margin-left':'313px',width:'80px'}}>Edit</Button>
            <hr style={{'width':'482px'}} />
          </Col>
        </Row>
        </div>

        <div> 
        <Row style={{'backgroundColor':'white'}}>
            <Col>
          <span style={{'fontSize':'20px'}}>Authentication Providers-Recent</span>
          <Button  variant="info" href="/allauthenticationproviders" style={{'backgroundcolor':'#66D6FF','margin-left':'85px'}}>View all</Button>
         <hr style={{'width':'455px'}} />
    </Col>
    <Col><span style={{'fontSize':'20px'}}>Providers-Recent</span>
    <Button variant="info" href="/allproviders" style={{'backgroundcolor':'#66D6FF','margin-left':'245px'}}>View all</Button>
    <hr style={{'width':'483px'}} />
    </Col>
  </Row>

  <Row style={{'backgroundColor':'white'}}>
          <Col>
            Authenticationprovider Name
            <Button variant="outline-secondary" style={{'margin-left':'157px',width:'80px'}}> Edit </Button>
            <hr style={{'width':'450px'}}/>
          </Col>
          <Col>
            Provider Name
            <Button variant="outline-secondary" style={{'margin-left':'290px',width:'80px'}}>Edit</Button>
            <hr style={{'width':'482px'}} />
          </Col>
        </Row>
        <Row style={{'backgroundColor':'white'}}>
          <Col>
            Authenticationprovider Name
            <Button variant="outline-secondary" style={{'margin-left':'157px',width:'80px'}}> Edit </Button>
            <hr style={{'width':'450px'}}/>
          </Col>
          <Col>
            Provider Name
            <Button variant="outline-secondary" style={{'margin-left':'290px',width:'80px'}}>Edit</Button>
            <hr style={{'width':'482px'}} />
          </Col>
        </Row>
        <Row style={{'backgroundColor':'white'}}>
          <Col>
            Authenticationprovider Name
            <Button variant="outline-secondary" style={{'margin-left':'157px',width:'80px'}}> Edit </Button>
            <hr style={{'width':'450px'}}/>
          </Col>
          <Col>
            Provider Name
            <Button variant="outline-secondary" style={{'margin-left':'290px',width:'80px'}}>Edit</Button>
            <hr style={{'width':'482px'}} />
          </Col>
        </Row>
        </div>
  
  </Container>

  </div>
  

   
    </div>


  )
}

export default Dashboard