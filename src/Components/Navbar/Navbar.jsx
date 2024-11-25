import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'
export default function Navbar2(){
    return<>
   <Navbar bg="transparent" expand="lg" >
      <Container className="justify-content-between">
      <Navbar.Brand href="#home">
      <img src='./Images/icon1.png'width="21"height="13"className="d-inline-block align-center  "alt="Logo"/> <span className='MB-title'>Food Hunt</span> 
    </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto bar" >
        <Nav.Link href="#link1" >Breakfast</Nav.Link>
        <Nav.Link href="#link2">Launch</Nav.Link>
        <Nav.Link href="#link3">Dinner</Nav.Link>
        </Nav>
<img src='./Images/lock.png'width="24" height="24" className="d-inline-block align-top"alt="Right Image"/>
</Navbar.Collapse>


 </Container>
</Navbar>
    
    </>
}