// import React from 'react';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import { Link } from 'react-router-dom';


// function NavigationBar() {
//   return (
//     <>
//       <Navbar bg="dark" variant="dark">
//         <Container fluid>
//           <Navbar.Brand as={Link} to="/">
//             Liverpool Hong Kong Link
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll" className="flex justify-content-end whitespace-nowrap">
//             <Nav className="me-auto" navbarScroll>
//               <Nav.Link as={Link} to="/">Home</Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </>
//   );
// }

// export default NavigationBar;

//******************************************* */

import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container fluid>
          <Navbar.Brand as={Link} to="/">
            Liverpool Hong Kong Link
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll" className="justify-content-end">
            <Nav className="me-auto">
            </Nav>
            <Nav>
              <Nav.Link as={Link} to="/">Home</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavigationBar;