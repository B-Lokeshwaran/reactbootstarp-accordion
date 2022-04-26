import React from 'react'
import {RiLock2Line} from 'react-icons/ri'
import { Button, Col, Row,Table,Form } from "react-bootstrap";

export const Providers =() => {
    return(
        <div className="providers">
          <p style={{'fontSize':"35px"}}>
              <span>
              <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')}alt='logo' style={{'marginRight':'10px', 'width':'40px','padding':'2px'}}/>
              Providers
              <Button variant="info" className="buttonapp3">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle3" />
              </span>
              <hr className="line4"/>
              </p>  
              <Table responsive="lg">
    <thead>
      <tr>
        
        <th >Name</th>
        <th>ID</th>
        
        <th>Secret</th>
       
       
        
      </tr>
      
    </thead>
    <tbody>
      <tr>
       
        <td>Provider Name</td>
        <td>8891</td>
        
        <td>Secret</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
       
        <td>Provider Name</td>
        <td>8891</td>
        
        <td>Secret</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
       
        <td>Provider Name</td>
        <td>8891</td>
        
        <td>Secret</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
       
        <td>Provider Name</td>
        <td>8891</td>
        
        <td>Secret</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
       
        <td>Provider Name</td>
        <td>8891</td>
        
        <td>Secret</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      <tr>
       
        <td>Provider Name</td>
        <td>8891</td>
        
        <td>Secret</td>
        <Button variant="outline-secondary">Edit</Button>
      </tr>
      </tbody>
    </Table>
            
        </div>
    );
};

export const AllProviders =() => {
    return(
        <div className="providers">
            <h1>All Providers</h1>
        </div>
    );
};

export const AddNewPro =() => {
    return(
        <div className="add-providers">
             <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')} style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
            Edit Provider
            <hr className="line4"/>
             </p>
             <Form>
  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1" style={{'width':'500px','margin-left':'200px','margin-top':'40px'}}>
    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Name</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Name</Form.Label>
    <Form.Control type="text"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the ID</Form.Label>
    <Form.Control type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Provider</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Provider ID</Form.Label>
    <Form.Control type="number"  />

    </Form.Group>
    </Form>


    <Button variant="outline-secondary" style={{'marginLeft':'500px','marginTop':'35px'}}> Cancel</Button>
  <Button variant="info" style={{'marginLeft':'621px','marginTop':'-65px'}}> save</Button>

        </div>
    );
};