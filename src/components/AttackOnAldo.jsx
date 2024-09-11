import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useParams, Link } from "react-router-dom"; // Importa Link per la navigazione
import { useDispatch, useSelector } from "react-redux";
import { fetchProfiles } from "../redux/actions/profileActions";

const AttackOnAldo = () => {
  const { searchTerm } = useParams(); // Ottieni il parametro dalla route
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profile.profiles);

  React.useEffect(() => {
    if (searchTerm) {
      dispatch(fetchProfiles());
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
              className="rounded-2"
              key={profile._id}
            >
              {/* Rendi ogni profilo cliccabile */}
              <Link
                to={`/profile/${profile._id}`}
                style={{ textDecoration: "none", color: "inherit" }}
              >
                <ListItem alignItems="flex-start">
                  <ListItemAvatar>
                    <Avatar
                      alt={profile.username}
                      src={profile.image || "/static/images/avatar/1.jpg"}
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
                      <Typography
                        component="span"
                        variant="body2"
                        sx={{ color: "text.secondary", display: "inline" }}
                      >
                        {profile.name} {profile.surname}
                      </Typography>
                    }
                  />
                </ListItem>
              </Link>
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
