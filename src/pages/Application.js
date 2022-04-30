import React from 'react'
import { Button,Table,Form, Nav } from "react-bootstrap";




export const Applications1 = () => {
    return(
        <div className="applications">
<div>
<p style={{'fontSize':"35px"}}>
    <span>
    <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 203.png')}alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>Applications
    <Button variant="info" className="buttonapp" href="/addnewapp"> Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle" />
         
    
    </span>
    <hr className="line1"/>
    </p>
    </div>

    
    <Table responsive="lg" >
    <thead >
      <tr >
        
        <th className="p-3"><u style={{'text-decoration-color': '#66D6FF'}}>Name</u></th>
        <th className="p-3">ID</th>
        <th className="p-3">Client ID</th>
        <th className="p-3">Client Secret</th>
        <th className="p-3">Redirected URIs</th>
        <th className="p-3">State</th>
        
      </tr>
    </thead>
    <tbody>
      
     
      <tr >
          
        <td style={{fontWeight:'bold',color:'black'}} className="pt-3"><Nav.Link href='/applications/viewapp'>Application Name</Nav.Link> </td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" href="/addnewapp" style={{width:'80px'}}>Edit</Button>
        </td>
        
      </tr>
      
     
      <tr>
       <td style={{'font-weight':'bold',color:'black'}} className="pt-3"><Nav.Link href='/applications/viewapp'>Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3"> State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
        
        <td style={{'font-weight':'bold',color:'black'}} className="pt-3"><Nav.Link href='/applications/viewapp'>Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}> Edit</Button>
        </td>
      </tr>
      <tr>
        
        <td style={{'font-weight':'bold',color:'black'}} className="pt-3"><Nav.Link href='/applications/viewapp'>Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
        
        <td style={{'font-weight':'bold',color:'black'}}className="pt-3"><Nav.Link href='/applications/viewapp'>Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
        
        <td style={{'font-weight':'bold',color:'black'}} className="pt-3"><Nav.Link href='/applications/viewapp'>Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
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
            <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 203.png')}alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
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