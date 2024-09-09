import { Container, Navbar, Nav } from "react-bootstrap";
import { TextField, InputAdornment } from "@mui/material"; // Importa TextField e InputAdornment
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
    <Navbar bg="light" data-bs-theme="light">
      <Container fluid className="px-5">
        <Navbar.Brand href="#home">
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="logoLinkedin"
          />
        </Navbar.Brand>
        {/* <TextField
      variant="outlined"
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
      }}
    /> */}
        <TextField
          placeholder="Search"
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
        <Nav className="mx-auto">
          <Nav.Link href="#home">
            <HomeRounded fontSize="large" />
            <div className="fs-6">Home</div>
          </Nav.Link>
          <Nav.Link href="#features">
            <GroupRounded fontSize="large" />
            <div className="fs-6">Rete</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <WorkRounded fontSize="large" />
            <div className="fs-6">Lavoro</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <ChatBubbleRounded fontSize="large" />
            <div className="fs-6">Messagistica</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <NotificationsRounded fontSize="large" />
            <div className="fs-6">Notifiche</div>
          </Nav.Link>
        </Nav>
      </Container>
      <Container fluid>
        <Nav className="ms-auto">
          <Nav.Link href="#pricing">
            <Person2Rounded fontSize="large" />
            <div className="fs-6">Tu</div>
          </Nav.Link>
          <Nav.Link href="#pricing">
            <AppsRounded fontSize="large" />
            <div className="fs-6">Per le aziende</div>
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComponent;
