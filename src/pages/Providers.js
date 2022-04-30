import React from 'react'

import { Button,Table,Form,Nav } from "react-bootstrap";

export const Providers =() => {
    return(
        <div className="providers">
          <p style={{'fontSize':"35px"}}>
              <span>
              <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')}alt='logo' style={{'marginRight':'10px', 'width':'40px','padding':'2px'}}/>
              Providers
              <Button variant="info" className="buttonapp3" href="/addnewpro">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle3" />
              </span>
              <hr className="line4"/>
              </p>  
              <Table responsive="lg">
    <thead>
      <tr>
        
      <th className="p-3"><u style={{'text-decoration-color': '#66D6FF'}}>Name</u></th>
        <th className="p-3">ID</th>
        
        <th className="p-3">Secret</th>
       
       
        
      </tr>
      
    </thead>
    <tbody>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/providers/viewpro'>Provider Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" href="/addnewpro" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/providers/viewpro'>Provider Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/providers/viewpro'>Provider Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/providers/viewpro'>Provider Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/providers/viewpro'>Provider Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/providers/viewpro'>Provider Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
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
             <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')} alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
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