import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { Box } from "@mui/system";

const MyHomeSIdebar = () => {
  return (
    <Box
      borderRadius={2}
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      className= "mb-2 cardOmbra rounded-4"
    >
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem disablePadding>
            <div id="news">
              <h4>LinkedIn Notizie</h4>
              <p>Storie principali</p>
            </div>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notizia 1" secondary="3 giorni fa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notizia 2" secondary="5 giorni fa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notizia 3" secondary="2 giorni fa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notizia 4" secondary="6 giorni fa" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Notizia5" secondary="4 giorni fa" />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
      <Divider />
    </Box>
  );
};
export default MyHomeSIdebar;
