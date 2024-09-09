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
    <Navbar bg="light" data-bs-theme="light" className="">
      <Container className="nav d-flex justify-content-between align-items-center">
        <Navbar.Brand href="#home" className="d-flex align-items-center">
          <img
            src="https://img.icons8.com/?size=100&id=13930&format=png&color=000000"
            alt="logoLinkedin"
            style={{ width: '50px', height: '50px' }}
          />
        </Navbar.Brand>

        <TextField
          className="mx-3"
          id="outlined-basic"
          placeholder="Search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
          style={{ width: '300px' }}
        />

        
        <Nav className="d-flex align-items-center">
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

        <Nav className="d-flex align-items-center ms-auto">
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
  );
};

export default NavComponent;
