import { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Cambiato da useHistory a useNavigate
import { Container, Navbar, Nav } from "react-bootstrap";
import { TextField, InputAdornment } from "@mui/material";
import {
  AppsRounded,
  ChatBubbleRounded,
  GroupRounded,
  HomeRounded,
  NotificationsRounded,
  Person2Rounded,  // Assicurati che sia importato
  Search,
  WorkRounded
} from "@mui/icons-material";

const NavComponent = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();  // Cambiato da useHistory a useNavigate

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="py-1">
        <Container fluid className="px-5">
          <Navbar.Brand href="#home" className="d-none d-lg-flex align-items-center">
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="logoLinkedin"
              style={{ width: "50px", height: "50px" }}
              className="me-2"
            />
          </Navbar.Brand>

          <Nav className="d-flex align-items-center d-lg-none">
            <Nav.Link href="#profile">
              <Person2Rounded fontSize="large" />
            </Nav.Link>
          </Nav>

          <div className="d-flex flex-grow-1 justify-content-center d-none d-lg-block">
            <TextField
              id="outlined-basic"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-50"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search onClick={handleSearch} />
                  </InputAdornment>
                ),
              }}
              style={{ width: "300px" }}
            />
          </div>

          <div className="d-flex flex-grow-1 justify-content-center d-lg-none">
            <TextField
              id="outlined-basic"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              className="w-75"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search onClick={handleSearch} />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* Altri elementi della navbar */}
        </Container>
      </Navbar>
    </>
  );
};

export default NavComponent;
