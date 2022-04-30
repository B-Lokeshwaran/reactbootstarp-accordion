import React,{useEffect,useState} from 'react'
import { Accordion, Card,Nav } from 'react-bootstrap'
import {useLocation} from 'react-router-dom'

export default function Sidebar() {
    
    const location = useLocation()
    useEffect(() => {highLighter(location.pathname)}, [location])
    const [selectedSection, setSelectedSection] = useState('0')
    const highLighter = (path) => {
    if(path === '/dashboard'){
        setSelectedSection('0')
    }
    if(path === '/applications'){
        setSelectedSection('1')
    }

    if(path === '/shopifystores'){
        setSelectedSection('2')
    }
    if(path === '/authenticationproviders'){
        setSelectedSection('3')
    }
    if(path === '/providers'){
        setSelectedSection('4')
    }
    
    if(path === '/addnewapp'){
        setSelectedSection('1')
    }
    if(path === '/addnewshop'){
        setSelectedSection('2')
    }
    if(path === '/addnewauth'){
        setSelectedSection('3')
    }
    if(path === '/addnewpro'){
        setSelectedSection('4')
    }
    if(path === '/applications/viewapp'){
        setSelectedSection('1')
    }
    if(path === '/shopifystores/viewshop'){
        setSelectedSection('2')
    }
    if(path === '/authenticationproviders/viewauth'){
        setSelectedSection('3')
    }
    if(path === '/providers/viewpro'){
        setSelectedSection('4')
    }

    
}
    
    



    return (
        <div className="sidebar">
            <Card style={{ 'width': '18rem', 'height': '821px', 'backgroundColor': '#000000', 'display': 'flex' }}>
                <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/umg_logo@2x.png')} alt='logo' className="logo"/>
                
                {/* <hr class="new4"></hr> */}
                <Accordion className="bsPrefix" activeKey={selectedSection}>
                {/* <Accordion className="bsPrefix" activeKey='0'> */}

                    <Accordion.Item eventKey='0' >
                    <Nav.Link href="/dashboard">
                        <Accordion.Header>
                            <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 197.png')} alt="icon" className="icon1"/>
                            
                            Dashboard
                            
                            </Accordion.Header>
                            </Nav.Link>
                    </Accordion.Item>


                    <Accordion.Item eventKey="1">
                    <Nav.Link href="/applications">
                        <Accordion.Header>
                            <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/Group 203.png')} alt="icon" className="icon2"/>
                            
                            Application
                            
                            </Accordion.Header>
                            </Nav.Link>
                        <Accordion.Body>
                            <Nav.Link href="/applications">
                            All Application
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href="/addnewapp">
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="2">
                    <Nav.Link href="/shopifystores">
                        <Accordion.Header>
                            <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/icon.png')} alt="icon" className="icon1"/>
                           
                            Shopify Stores
                           
                            </Accordion.Header>
                            </Nav.Link>
                             <Accordion.Body>
                            <Nav.Link href="/shopifystores">
                            All Shopify Stores
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href="/addnewshop">
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="3">
                    <Nav.Link href="/authenticationproviders">
                        <Accordion.Header>
                            {/* <img src={require('/src/Assets/Group 197.png')} alt="icon" className="icon1"/> */}
                            <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')}alt="icon" className="icon1" />
                            {/* <RiLock2Line/> */}
                            
                            Authentication Providers
                           
                            </Accordion.Header>
                            </Nav.Link>
                        <Accordion.Body>
                            <Nav.Link href="/authenticationproviders">
                            All Authentication Providers
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href="/addnewauth">
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>


                    <Accordion.Item eventKey="4">
                    <Nav.Link href="/providers">
                        <Accordion.Header>
                            {/* <img src={require('/src/Assets/Group 197.png')} alt="icon" className="icon1"/> */}
                            {/* <RiLock2Line/> */}
                            <img src={require('/Users/lokeshwaranbasha/Desktop/reactbootstrap sidebar/sidebar/src/Assests/lock.png')}alt="icon" className="icon1" />

                           
                            Providers
                            
                            </Accordion.Header>
                            </Nav.Link>
                        <Accordion.Body>
                            <Nav.Link href="/providers">
                            All Providers
                            </Nav.Link>
                        </Accordion.Body>
                        <Accordion.Body>
                            <Nav.Link href="/addnewpro">
                            Add New
                            </Nav.Link>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Card>

        </div>
    )
}