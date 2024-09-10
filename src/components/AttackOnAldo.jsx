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
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
              }}
              className="rounded-2 "
            >
              <ListItem alignItems="flex-start" key={profile._id}>
                <ListItemAvatar>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary="User"
                  secondary={
                    <React.Fragment>
                      <Typography
                        component="span"
                        variant="body"
                        sx={{ color: "text.primary", display: "inline" }}
                      >
                        {profile.username} - {profile.name} {profile.surname}
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </List>
          ))}
        </ul>
      ) : (
        <p>Nessun profilo trovato.</p>
      )}
    </div>
  );
};
export default AttackOnAldo;
