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
import { useNavigate } from "react-router";
import { useState } from "react";

const NavComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Cambiato da useHistory a useNavigate

  const handleSearch = () => {
    if (searchTerm.trim()) {
      navigate(`/search/${searchTerm}`);
    }
  };

  return (
    <>
      {/* Navbar per desktop e mobile */}
      <Navbar
        expand="lg"
        className="py-1"
        style={{ height: "55px", backgroundColor: "white" }}
      >
        {/* Logo visibile solo su desktop */}
        <Navbar.Brand
          href="#home"
          className="d-none d-lg-flex align-items-center"
        >
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="logoLinkedin"
            style={{ width: "50px", height: "50px" }}
            className=""
          />
        </Navbar.Brand>

        {/* Icona del profilo visibile solo su mobile */}
        <Nav className="d-flex align-items-center d-lg-none">
          <Nav.Link href="#profile">
            <Person2Rounded fontSize="large" />
          </Nav.Link>
        </Nav>

        {/* Barra di ricerca visibile su desktop */}
        <div className="d-flex flex-grow-1 justify-content-center d-none d-lg-block">
          <TextField
            id="outlined-basic"
            placeholder="Cerca"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            className="w-50"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search onClick={handleSearch} />
                </InputAdornment>
              ),
              style: { height: "32px" }, // Mantieni l'altezza desiderata
              sx: {
                "& .MuiOutlinedInput-notchedOutline": {
                  border: "none", // Rimuovi il bordo
                },
              },
            }}
            inputProps={{
              style: { padding: "5px 10px" }, // Mantieni il padding interno
            }}
            style={{ width: "300px", backgroundColor: "#ebf4fd" }}
            variant="outlined" // Mantieni la variante outlined
          />
        </div>

        {/* Barra di ricerca visibile su mobile */}
        <div className="d-flex flex-grow-1 justify-content-center d-lg-none">
          <TextField
            id="outlined-basic"
            placeholder="Search"
            className="w-75"
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              },
            }}
          />
        </div>

        {/* Navbar completa visibile solo su desktop */}
        <Nav className="d-flex align-items-center d-none d-lg-flex">
          <Nav.Link href="#home" className="text-center mx-2">
            <HomeRounded fontSize="medium" />
            <div className="navFs">Home</div>
          </Nav.Link>
          <Nav.Link href="#features" className="text-center mx-2">
            <GroupRounded fontSize="medium" />
            <div className="navFs">Rete</div>
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-center mx-2">
            <WorkRounded fontSize="medium" />
            <div className="navFs">Lavoro</div>
          </Nav.Link>
          <Nav.Link href="#chat" className="text-center mx-2">
            <ChatBubbleRounded fontSize="medium" />
            <div className="navFs">Messaggistica</div>
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-center mx-2">
            <NotificationsRounded fontSize="medium" />
            <div className="navFs">Notifiche</div>
          </Nav.Link>
          <Nav.Link href="#profile" className="text-center mx-2">
            <Person2Rounded fontSize="medium" />
            <div className="navFs">Tu</div>
          </Nav.Link>
        </Nav>

        {/* Profilo e messaggi visibili solo su mobile */}
        <Nav className="d-flex align-items-center d-lg-none">
          <Nav.Link href="#chat">
            <ChatBubbleRounded fontSize="medium" />
          </Nav.Link>
        </Nav>

        {/* Navbar secondaria su desktop */}
        <Nav className="d-flex align-items-center ms-1 d-none d-lg-flex">
          <Nav.Link href="#apps" className="text-center pe-0">
            <AppsRounded fontSize="medium" />
            <div className="navFs">Per le aziende</div>
          </Nav.Link>
        </Nav>
      </Navbar>

      {/* Footer con i tasti Home, Rete, Notifiche, Lavoro visibili su mobile */}
      <div className="d-lg-none fixed-bottom bg-light">
        <Nav className="d-flex justify-content-around  align-items-center">
          <Nav.Link href="#home" className="text-center">
            <HomeRounded fontSize="medium" />
          </Nav.Link>
          <Nav.Link href="#features" className="text-center">
            <GroupRounded fontSize="medium" />
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-center">
            <NotificationsRounded fontSize="medium" />
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-center">
            <WorkRounded fontSize="medium" />
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default NavComponent;
