import {
  Box,
  //   Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  //   ListItemIcon,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
// import InboxIcon from "@mui/icons-material/InputSharp";
// import DraftIcon from "@mui/icons-material/DraftsSharp";

export default function NavListDrawer({ navArrayLinks, setOpen }) {
  return (
    <Box sx={{ width: 250 }}>
      {/* {/* <nav>
        <List>
          <ListItem>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <DraftIcon />
            </ListItemIcon>
            <ListItemText primary="Drafts" />
          </ListItem>
        </List> 
      </nav> */}

      {/* //   <Divider /> */}
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton
                component={NavLink}
                to={item.path}
                onClick={() => setOpen(false)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>

                <ListItemText>{item.title}</ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
    </Box>
  );
}
