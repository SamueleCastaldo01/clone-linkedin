import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../redux/actions/profileActions";

const AttackOnAldo = () => {
  const { searchTerm } = useParams(); // Ottieni il parametro dalla route
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);

  React.useEffect(() => {
    if (searchTerm) {
      dispatch(fetchProfiles(searchTerm));
    }
  }, [dispatch, searchTerm]);
  return (
    <div className="tabPro mt-2">
      <h2>Risultati della ricerca per "{searchTerm}"</h2>
      {profiles.length > 0 ? (
        <ul>
          {profiles.map((profile) => (
            <li key={profile._id}>
              {profile.username} - {profile.name} {profile.surname}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nessun profilo trovato.</p>
      )}

      <List
        sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        className="rounded-2 mb-2"
      >
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Aldo 1"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Studente
                </Typography>
                {" Ogni tanto fa finta di fare domande in classe"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Aldo 2"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Programmatore
                </Typography>
                {"Fa più danni che altro"}
              </React.Fragment>
            }
          />
        </ListItem>
        <Divider variant="inset" component="li" />
        <ListItem alignItems="flex-start">
          <ListItemAvatar>
            <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
          </ListItemAvatar>
          <ListItemText
            primary="Aldo 3"
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ color: "text.primary", display: "inline" }}
                >
                  Profilo Linkedln
                </Typography>
                {"Ha un foto che palesemente non è lui"}
              </React.Fragment>
            }
          />
        </ListItem>
      </List>
    </div>
  );
};
export default AttackOnAldo;
