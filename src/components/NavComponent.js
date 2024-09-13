import { Navbar, Nav } from "react-bootstrap";
import { TextField, InputAdornment } from "@mui/material";
import {
  AppsRounded,
  ChatBubbleRounded,
  GroupRounded,
  HomeRounded,
  NotificationsRounded,
  Person2Rounded,
  Search,
  WorkRounded,
} from "@mui/icons-material";
import { useNavigate } from "react-router";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavComponent = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const getUserIdFromToken = (token) => {
    const payload = token.split(".")[1];
    const decodedPayload = atob(payload);
    const jsonPayload = JSON.parse(decodedPayload);
    return jsonPayload._id;
  };

  const token =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NmRmZjUxM2FmNDM0YjAwMTU5ZDgzMzAiLCJpYXQiOjE3MjU5NTMyOTksImV4cCI6MTcyNzE2Mjg5OX0.n-M-g7ZghOBgKrcQWWZVAbMrGzHoBDjK8KPBUQay_9A";
  const userId = getUserIdFromToken(token);

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
          <Link to={"/"}>
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="logoLinkedin"
              style={{ width: "50px", height: "50px" }}
              className=""
            />
          </Link>
        </Navbar.Brand>

        {/* Icona del profilo visibile solo su mobile */}
        <Nav className="d-flex align-items-center d-lg-none">
          <Nav.Link href={`/profile/${userId}`}>
            <Person2Rounded fontSize="large" />
          </Nav.Link>
        </Nav>

        {/* Barra di ricerca visibile su desktop */}
        <div className="d-flex flex-grow-1 justify-content-center d-lg-block">
          <TextField
            id="outlined-basic"
            placeholder="Cerca"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
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
            style={{ width: "85%", backgroundColor: "#ebf4fd" }}
            variant="outlined" // Mantieni la variante outlined
          />
        </div>

        {/* Navbar completa visibile solo su desktop */}
        <Nav className="d-flex align-items-center d-none d-lg-flex">
          <Link to={"/"} className="text-decoration-none">
            <Nav.Link href="#home" className="text-center mx-2 ">
              <HomeRounded fontSize="medium" />
              <div className="navFs ">Home</div>
            </Nav.Link>
          </Link>
          <Nav.Link href="#features" className="text-center mx-2">
            <GroupRounded fontSize="medium" />
            <div className="navFs">Rete</div>
          </Nav.Link>
          <Link to={'/jobs/developer'} className="text-decoration-none">
            <Nav.Link href="#pricing" className="text-center mx-2">
              <WorkRounded fontSize="medium" />
              <div className="navFs">Lavoro</div>
            </Nav.Link>
          </Link>
          <Nav.Link href="#chat" className="text-center mx-2">
            <ChatBubbleRounded fontSize="medium" />
            <div className="navFs">Messaggistica</div>
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-center mx-2">
            <NotificationsRounded fontSize="medium" />
            <div className="navFs">Notifiche</div>
          </Nav.Link>
          <Nav.Link href={`/profile/${userId}`} className="text-center mx-2">
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
      <div className="d-lg-none fixed-bottom bg-light" style={{height:'55px'}}>
        <Nav className="d-flex justify-content-around  align-items-center p-0">
          <Link to={'/'} className="text-decoration-none">
            <Nav.Link href="#home" className="text-center">
              <HomeRounded fontSize="medium" />
              <div className="navFs">Home</div>
            </Nav.Link>
          </Link>
          <Nav.Link href="#features" className="text-center">
            <GroupRounded fontSize="medium" />
            <div className="navFs">La mia rete</div>
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-center">
            <NotificationsRounded fontSize="medium" />
            <div className="navFs">Notifiche</div>
          </Nav.Link>
          <Link to={'/jobs/developer'} className="text-decoration-none">
            <Nav.Link href="#pricing" className="text-center">
              <WorkRounded fontSize="medium" />
              <div className="navFs">Lavoro</div>
            </Nav.Link>
          </Link>
        </Nav>
      </div>
    </>
  );
};

export default NavComponent;
