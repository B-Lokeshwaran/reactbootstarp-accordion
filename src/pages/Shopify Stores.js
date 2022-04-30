import React from 'react'
import { Button,Table,Form,Nav } from "react-bootstrap";

export const ShopifyStores = () => {
    return(
        <div className="shopifystores">
            <div>
            <p style={{'fontSize':"35px"}}>
                <span>
                <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/icon.png')} alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>Shopify Stores
                <Button variant="info" className="buttonapp1" href="/addnewshop" style={{'marginLeft':'10px'}}>Add new</Button>
          <input type="search" placeholder="Search" className="inputstyle1" />
          </span>
          <hr className="line2"/>
          </p>
          </div>
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
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/shopifystores/viewshop'>Store Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" href="/addnewshop"style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/shopifystores/viewshop'>Store Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/shopifystores/viewshop'>Store Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/shopifystores/viewshop'>Store Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/shopifystores/viewshop'>Store Name</Nav.Link></td>
        <td className="p-3">8891</td>
        
        <td className="p-3">Secret</td>
        <td className="p-3">
        <Button variant="outline-secondary" style={{width:'80px'}}>Edit</Button>
        </td>
      </tr>
      <tr>
       
        <td style={{'font-weight':'bold'}} className="p-3"><Nav.Link href='/shopifystores/viewshop'>Store Name</Nav.Link></td>
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

export const AllShopifyStores = () => {
    return(
        <div className="all-shopifystores">
            <h1>All Shopify Stores</h1>
        </div>
    );
};

export const AddNewShop = () => {
    return(
        <div className="add-new-shop">
             <p style={{'fontSize':"35px"}}><img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/icon.png')}alt='logo' style={{'marginRight':'10px', 'width':'45px','padding':'2px'}}/>
            Edit Shopify Stores
            <hr className="line2" />
            </p>

            <Form>
  <Form.Group className="mb-2" controlId="exampleForm.ControlInput1" style={{'width':'500px','margin-left':'200px','margin-top':'40px'}}>
    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Name</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Name</Form.Label>
    <Form.Control type="text"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>ID</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the ID</Form.Label>
    <Form.Control type="number"  />

    <Form.Label style={{'fontSize':'25px','font-weight':'bold'}}>Secret</Form.Label>
    <Form.Label style={{'font-size':'15px','margin-left':'20px'}}>Enter the Secret</Form.Label>
    <Form.Control type="number"  />

    </Form.Group>
    </Form>


    <Button variant="outline-secondary" style={{'marginLeft':'500px','marginTop':'35px'}}> Cancel</Button>
  <Button variant="info" style={{'marginLeft':'621px','marginTop':'-65px'}}> save</Button>


        </div>
    );
};