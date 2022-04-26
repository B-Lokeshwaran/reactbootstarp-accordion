import React from 'react'
import { Button, Col, Row,Table,Container,Form } from "react-bootstrap";



export const Applications1 = () => {
    return(
        <div className="applications">
<div>
<p style={{'fontSize':"35px"}}>
    <span>
    <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 203.png')}alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>Applications
    <Button variant="info" className="buttonapp">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle" />
  
    
    </span>
    <hr className="line1"/>
    </p>
    </div>
    <Table responsive="lg">
    <thead>
      <tr>
        
        <th>Name</th>
        <th>ID</th>
        <th>Client ID</th>
        <th>Client Secret</th>
        <th>Redirected URIs</th>
        <th>State</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td>Application Name</td>
        <td>8891</td>
        <td>8891</td>
        <td>8891</td>
        <td>https://umusic.com</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
        <td>Application Name</td>
        <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
        <td>Application Name</td>
        <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>State</td>
        <Button variant="outline-secondary"> Edit</Button>
      </tr>
      <tr>
        
        <td>Application Name</td>
        <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
        <td>Application Name</td>
        <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
        <td>Application Name</td>
        <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
    </tbody>
  </Table>

   
 
        
   
    
            
            
        </div>
    );
};

export const AllApplications = () => {
    return(
        <div className="all-applications">
            {/* <h1>All Applications</h1> */}
            
        </div>
    );
};

export const AddNewApp = () => {
    return(
        <div className="add-new-app">
            <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 203.png')} style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
            Edit Application
            <hr className="line1" /></p>
            <Form>
  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1" style={{'width':'500px','margin-left':'200px','margin-top':'40px'}}>
    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Name</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Name</Form.Label>
    <Form.Control type="text"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the ID</Form.Label>
    <Form.Control type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Client ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Client ID</Form.Label>
    <Form.Control type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Client Secret</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Client Secret</Form.Label>
    <Form.Control type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Redirected URIs</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Redirected URIs</Form.Label>
    <Form.Control type="text"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>State</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the State</Form.Label>
    <Form.Control type="text"  />
  </Form.Group>
  </Form>


  <Button variant="outline-secondary" style={{'marginLeft':'500px','marginTop':'35px'}}> Cancel</Button>
  <Button variant="info" style={{'marginLeft':'621px','marginTop':'-65px'}}> save</Button>

        </div>
    );
};