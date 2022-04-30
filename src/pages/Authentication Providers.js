import React from 'react'

import { Button,Table,Form,Nav } from "react-bootstrap";

export const AuthenticationProviders = () => {
    return(
        <div className="authenticationproviders">

<p style={{'fontSize':"35px"}}>
    <span>
    <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')}alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>Authentication Providers
    <Button variant="info" className="buttonapp2" href="/addnewauth">Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle2" />


    </span>
    <hr className="line3"/>
    </p>
    <Table responsive="lg">
    <thead>
      <tr>
        
      <th><u style={{'text-decoration-color': '#66D6FF'}} className="pt-3">Name</u></th>
        <th className="p-3">ID</th>
        <th className="p-3">Provider ID</th>
        <th className="p-3">Client ID</th>
        <th className="p-3">Client Secret</th>
        <th className="p-3">App ID</th>
        <th className="p-3">Global</th>
        <th className="p-3">State</th>
        
      </tr>
    </thead>
    <tbody>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="pt-3"><Nav.Link href='/authenticationproviders/viewauth' >Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">8876</td>
        <td className="p-3">True</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" href="/addnewauth" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
        
      <td style={{'font-weight':'bold'}}  className="pt-3"><Nav.Link href='/authenticationproviders/viewauth' >Application Name</Nav.Link></td>
      <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">8876</td>
        <td className="p-3">True</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
        
      <td style={{'font-weight':'bold'}} className="pt-3"><Nav.Link href='/authenticationproviders/viewauth' >Application Name</Nav.Link></td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">8876</td>
        <td className="p-3">False</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
      </tr>

      <tr>
        
      <td style={{'font-weight':'bold'}} className="pt-3"><Nav.Link href='/authenticationproviders/viewauth' >Application Name</Nav.Link></td>
      <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">8876</td>
        <td className="p-3">True</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
      </td>
      </tr>
      <tr>
        
      <td style={{'font-weight':'bold'}} className="pt-3"><Nav.Link href='/authenticationproviders/viewauth' >Application Name</Nav.Link></td>
      <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">8876</td>
        <td className="p-3">False</td>
        <td className="p-3">State</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
        </tr>
      <tr>
        
      <td style={{'font-weight':'bold'}} className="pt-3"><Nav.Link href='/authenticationproviders/viewauth' >Application Name</Nav.Link></td>
      <td className="p-3">8876</td>
        <td className="p-3" >8876</td>
        <td className="p-3">8876</td>
        <td className="p-3">https://umusic.com</td>
        <td className="p-3">8876</td>
        <td className="p-3">True</td>
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
            <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')}alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
            Edit Authentication Provider
            <hr style={{marginRight:'100px'}}/>
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
   


    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Is Global</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the State</Form.Label>
    {/* <Form.Check type="radio" label="True" />  */}
    
  {[ 'radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="True"
        name="group1"
        type={type}
        id={`inline-${type}-1`}
      />
      <Form.Check
        inline
        label="False"
        name="group1"
        type={type}
        id={`inline-${type}-2`}
        default checked
      />
      </div>
  ))}
    
      
      

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>State</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the State</Form.Label>
    <Form.Control size="sm" type="text"  />
  </Form.Group>
  </Form>


  <Button variant="outline-secondary" style={{'marginLeft':'500px','marginTop':'25px'}}> Cancel</Button>
  <Button variant="info" style={{'marginLeft':'621px','marginTop':'-55px'}}> save</Button>

        </div>
    );
};