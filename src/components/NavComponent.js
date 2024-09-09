import { Container, Navbar, Nav } from "react-bootstrap";
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

const NavComponent = () => {
  return (
    <>
      {/* Navbar per desktop e mobile */}
      <Navbar bg="light" expand="lg" className="py-1">
        <Container fluid className="px-5">
          {/* Logo visibile solo su desktop */}
          <Navbar.Brand
            href="#home"
            className="d-none d-lg-flex align-items-center"
          >
            <img
              src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
              alt="logoLinkedin"
              style={{ width: "50px", height: "50px" }}
              className="me-2"
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
              placeholder="Search"
              className="w-50"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
              style={{ width: "300px" }}
            />
          </div>

          {/* Barra di ricerca visibile su mobile */}
          <div className="d-flex flex-grow-1 justify-content-center d-lg-none">
            <TextField
              id="outlined-basic"
              placeholder="Search"
              className="w-75"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Search />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          {/* Navbar completa visibile solo su desktop */}
          <Nav className="d-flex align-items-center d-none d-lg-flex">
            <Nav.Link href="#home" className="text-center">
              <HomeRounded fontSize="large" />
              <div className="fs-6">Home</div>
            </Nav.Link>
            <Nav.Link href="#features" className="text-center">
              <GroupRounded fontSize="large" />
              <div className="fs-6">Rete</div>
            </Nav.Link>
            <Nav.Link href="#pricing" className="text-center">
              <WorkRounded fontSize="large" />
              <div className="fs-6">Lavoro</div>
            </Nav.Link>
            <Nav.Link href="#chat" className="text-center">
              <ChatBubbleRounded fontSize="large" />
              <div className="fs-6">Messaggistica</div>
            </Nav.Link>
            <Nav.Link href="#notifications" className="text-center">
              <NotificationsRounded fontSize="large" />
              <div className="fs-6">Notifiche</div>
            </Nav.Link>
          </Nav>

          {/* Profilo e messaggi visibili solo su mobile */}
          <Nav className="d-flex align-items-center d-lg-none">
            <Nav.Link href="#chat">
              <ChatBubbleRounded fontSize="large" />
            </Nav.Link>
          </Nav>

          {/* Navbar secondaria su desktop */}
          <Nav className="d-flex align-items-center ms-auto d-none d-lg-flex">
            <Nav.Link href="#profile" className="text-center">
              <Person2Rounded fontSize="large" />
              <div className="fs-6">Tu</div>
            </Nav.Link>
            <Nav.Link href="#apps" className="text-center">
              <AppsRounded fontSize="large" />
              <div className="fs-6">Per le aziende</div>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      {/* Footer con i tasti Home, Rete, Notifiche, Lavoro visibili su mobile */}
      <div className="d-lg-none fixed-bottom bg-light">
        <Nav className="d-flex justify-content-around  align-items-center">
          <Nav.Link href="#home" className="text-center">
            <HomeRounded fontSize="large" />
          </Nav.Link>
          <Nav.Link href="#features" className="text-center">
            <GroupRounded fontSize="large" />
          </Nav.Link>
          <Nav.Link href="#notifications" className="text-center">
            <NotificationsRounded fontSize="large" />
          </Nav.Link>
          <Nav.Link href="#pricing" className="text-center">
            <WorkRounded fontSize="large" />
          </Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default NavComponent;
