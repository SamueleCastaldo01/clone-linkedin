import * as React from "react";
import { useEffect } from "react";
import {
  Box,
  ListItemButton,
  ListItemIcon,
  Typography,
  Avatar,
  ListItemAvatar,
  ListItemText,
  Divider,
  ListItem,
  List,
} from "@mui/material";
import ModeIcon from "@mui/icons-material/Mode";
import { useParams, Link } from "react-router-dom";
import { fetchProfiles } from "../redux/actions/profileActions";
import { useSelector, useDispatch } from "react-redux";

const MySidebar = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);

  useEffect(() => {
    console.log("sono entrato 1");
    console.log(profiles);
    if (profiles.length < 1) {
      console.log("sono entrato 2");
      dispatch(fetchProfiles());
    }
  }, []);

  return (
    <>
      <Box
        borderRadius={2}
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className={"mb-2"}
      >
        <nav aria-label="main mailbox folders">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="Lingua del profilo"
                  secondary="Italiano"
                />
                <ListItemIcon>
                  <ModeIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  primary="Profilo pubblico e URL"
                  secondary="link personale linkedin"
                />
                <ListItemIcon>
                  <ModeIcon />
                </ListItemIcon>
              </ListItemButton>
            </ListItem>
          </List>
        </nav>
        <Divider />
      </Box>
      {/* qua verrà inserito il map delle persone che conosciamo */}
      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className="rounded-2 mb-2"
      >
        <ListItem disablePadding>
          <div id="news">
            <h4>Persone che potresti conoscere</h4>
            <p>Dalla tua scuola o università</p>
          </div>
        </ListItem>
        {profiles.map((profile) => {
          return (
            <div key={profile._id}>
              <Link
                to={`/profile/${profile._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/1.jpg"
                    />
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography
                        component="span"
                        variant="body1"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {profile.username}
                      </Typography>
                    }
                    secondary={
                      <React.Fragment>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.secondary", display: "inline" }}
                        >
                          {profile.name} {profile.surname}
                        </Typography>
                      </React.Fragment>
                    }
                  />
                </ListItem>
                <Divider variant="inset" component="li" />
              </Link>
            </div>
          );
        })}
      </List>
    </>
  );
};

export default MySidebar;
