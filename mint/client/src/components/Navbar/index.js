import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { BsFillCartFill } from "react-icons/bs";
import Auth from '../../utils/auth'

function Navigation() {

  if (Auth.loggedIn()) {
    return (
      <Navbar sticky="top" 
    // expand="lg"
      style={{
        backgroundColor: "rgb(204, 221, 224)",
        height: "150px",
        fontSize: "25px",
        color: "white",
      }}
      >
      <Nav className="navbar">
      <Container>
        <Navbar.Brand href="/" className="p-4" style={{ fontSize: "50px", color: "rgb(128, 209, 128)" }}>Mint</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav.Link href="/login" onClick={() => Auth.logout()}>Logout</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/antiques">Antiques</NavDropdown.Item>
              <NavDropdown.Item href="/vinylrecords">Vinyl Records</NavDropdown.Item>
              <NavDropdown.Item href="/comicbooks">Comic Books</NavDropdown.Item>
              <NavDropdown.Item href="/vintageclothes">Vintage Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/tradingcards">Trading Cards</NavDropdown.Item>
              <NavDropdown.Item href="toysandfigures">Toys and Figurines</NavDropdown.Item>
              <NavDropdown.Item href="/stamps">Stamps</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Create Listing</Nav.Link>
            <Nav.Link href="/mylisting">My Listings</Nav.Link>
            <Nav.Link href="/wishlist">Wish List</Nav.Link>
            <Nav.Link href="">Cart <BsFillCartFill />
            </Nav.Link>
        {/* </Navbar.Collapse> */}
      </Container>
      </Nav>
      </Navbar>
  );
} else {
  return (
    <Navbar sticky="top" 
    // expand="lg"
      style={{
        backgroundColor: "rgb(204, 221, 224)",
        height: "150px",
        fontSize: "25px",
        color: "white",
      }}
      >
      <Nav className="navbar">
      <Container>
        <Navbar.Brand href="/" className="p-4" style={{ fontSize: "50px", color: "rgb(128, 209, 128)" }}>Mint</Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        {/* <Navbar.Collapse id="basic-navbar-nav"> */}
        <Nav.Link href="/login">Login/Signup</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              <NavDropdown.Item href="/antiques">Antiques</NavDropdown.Item>
              <NavDropdown.Item href="/vinylrecords">Vinyl Records</NavDropdown.Item>
              <NavDropdown.Item href="/comicbooks">Comic Books</NavDropdown.Item>
              <NavDropdown.Item href="/vintageclothes">Vintage Clothes</NavDropdown.Item>
              <NavDropdown.Item href="/tradingcards">Trading Cards</NavDropdown.Item>
              <NavDropdown.Item href="toysandfigures">Toys and Figurines</NavDropdown.Item>
              <NavDropdown.Item href="/stamps">Stamps</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="">Create Listing</Nav.Link>
            <Nav.Link href="/mylisting">My Listings</Nav.Link>
            <Nav.Link href="/wishlist">Wish List</Nav.Link>
            <Nav.Link href="">Cart <BsFillCartFill />
            </Nav.Link>
        {/* </Navbar.Collapse> */}
      </Container>
      </Nav>
      </Navbar>
  );
}
}

export default Navigation;
