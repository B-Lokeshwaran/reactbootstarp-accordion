import React from 'react'

import { Button, Col, Row,Table,Form } from "react-bootstrap";

export const AuthenticationProviders = () => {
    return(
        <div className="authenticationproviders">

<p style={{'fontSize':"35px"}}>
    <span>
    <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')} style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>Authentication Providers
    <Button variant="info" className="buttonapp2">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle2" />


    </span>
    <hr className="line3"/>
    </p>
    <Table responsive="lg">
    <thead>
      <tr>
        
        <th>Name</th>
        <th>ID</th>
        <th>Provider ID</th>
        <th>Client ID</th>
        <th>Client Secret</th>
        <th>App ID</th>
        <th>Global</th>
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
        <td>True</td>
        <td>State</td>
        <Button variant="outline-secondary"v>Edit</Button>
      </tr>
      <tr>
        
      <td>Application Name</td>
      <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>True</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
      <td>Application Name</td>
        <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>False</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
      <td>Application Name</td>
      <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>True</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
      <td>Application Name</td>
      <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>False</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
        
      <td>Application Name</td>
      <td>8876</td>
        <td>8876</td>
        <td>8876</td>
        <td>https://umusic.com</td>
        <td>True</td>
        <td>State</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
    </tbody>
  </Table>
            
        </div>
    );
};

export const AllAuthenticationProviders = () => {
    return(
        <div className="all-authenticationproviders">
            <h1>All Authentication Providers</h1>
        </div>
    );
};

export const AddNewAuth = () => {
    return(
        <div className="add-new-auth">
            <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')} style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
            Edit Authentication Provider
            <hr />
            </p>
 
            <Form>
  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1" style={{'width':'500px','margin-left':'200px','margin-top':'-10px'}}>
    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Name</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Name</Form.Label>
    <Form.Control size="sm" type="text"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the ID</Form.Label>
    <Form.Control size="sm" type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Provider ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Provider ID</Form.Label>
    <Form.Control size="sm" type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Client ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Client ID</Form.Label>
    <Form.Control size="sm" type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Client Secret</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Client Secret</Form.Label>
    <Form.Control size="sm" type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Application IDs</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Application IDs</Form.Label>
    <Form.Control size="sm" type="number"  />
   


    {/* <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Is Global</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the State</Form.Label>
    <Form.Control type="number"  />  */}
    
      
      

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>State</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the State</Form.Label>
    <Form.Control size="sm" type="text"  />
  </Form.Group>
  </Form>


  <Button variant="outline-secondary" style={{'marginLeft':'500px','marginTop':'35px'}}> Cancel</Button>
  <Button variant="info" style={{'marginLeft':'621px','marginTop':'-65px'}}> save</Button>

        </div>
    );
};