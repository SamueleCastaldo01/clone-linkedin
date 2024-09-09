import { Container, Navbar, Nav } from "react-bootstrap"
import { TextField, InputAdornment } from '@mui/material';  // Importa TextField e InputAdornment
import { Search } from '@mui/icons-material';  // Importa l'icona di ricerca

const NavComponent = () => {
  return (
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="logoLinkedin"
          />
        </Navbar.Brand>
        <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />  {/* Aggiungi l'icona qui */}
          </InputAdornment>
        ),
      }}
    />
        <Nav className="mx-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
