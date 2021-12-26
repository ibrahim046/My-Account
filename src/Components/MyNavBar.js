import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { NavDropdown , Nav,Button, FormControl,Form,Container} from 'react-bootstrap'



class NavBar extends React.Component {
    render() {
        return(
       
            <div>     
            <Navbar bg="primary" expand="lg" variant="dark">
            <Container fluid>
                <Navbar.Brand href="/"> Acceuil </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll
                >
                    <Nav.Link href="/">Nos Voyages</Nav.Link>
                    <Nav.Link href="/">Nos Agences </Nav.Link>
                    <NavDropdown title="Hôtels" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="/">Le Zingana </NavDropdown.Item>
                    <NavDropdown.Item href="/">Le Mont Fébé </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/">
                        Le Mbô Hotel
                    </NavDropdown.Item>
                    </NavDropdown>
                    
                </Nav>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
                </Navbar.Collapse>
            </Container>
            </Navbar>
          
            </div>
       
        )
    }
}
export default NavBar 