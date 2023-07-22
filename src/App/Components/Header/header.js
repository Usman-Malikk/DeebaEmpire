import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { CardMedia } from "@mui/material";
import { Images } from "../../Assets/Images";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import HelpCenterIcon from '@mui/icons-material/HelpCenter';


export default function Header() {
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate()


  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {[
          {
            name: "Home",
            path: "/",
            icon: <HomeIcon sx={{ color: "white" }} />
          }, {
            name: "Faqs",
            path: "/faqs",
            icon: <HelpCenterIcon sx={{ color: "white" }} />
          },

        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton sx={{ color: "white" }} onClick={() => { navigate(text.path) }}>
              <ListItemIcon>
                {text.icon}
              </ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

    </Box>
  );

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "30px ",
      }}
    >
      <Box>
        <CardMedia component={'img'} image={Images.Logo} />
      </Box>

      <Box>
        <Box sx={{ display: { xs: "block", md: "none" } }}>
          {["left"].map((anchor) => (
            <React.Fragment key={anchor}>
              <Button
                onClick={toggleDrawer(anchor, true)}
                sx={{ color: "white" }}
              >
                {<MenuIcon />}
              </Button>
              <Drawer
                sx={{
                  '.css-4t3x6l-MuiPaper-root-MuiDrawer-paper': {
                    background: "#151719"
                  }
                }}
                anchor={anchor}
                open={state[anchor]}
                onClose={toggleDrawer(anchor, false)}
              >
                {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}
        </Box>

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "20px" }}>
          <p onClick={() => { navigate('/') }} style={{ color: "white", padding: "10px", cursor: "pointer" }}>
            Home
          </p>
          <p href='#getInTouch' style={{ color: "white", padding: "10px", }}>
            Testimonial
          </p>
          <p onClick={() => { navigate('/faqs') }} style={{ color: "white", padding: "10px", cursor: "pointer" }}>
            Faq's
          </p>

          <Button href='#getInTouch' sx={{ background: "rgb(93 93 255 )", color: "white", padding: "10px", fontWeight: "600" }}>
            Contact us
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
