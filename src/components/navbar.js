import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import logo from "../images/logo.png";
import { ShoppingCart } from "@material-ui/icons";
import { Badge } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "7rem",
  },
  AppBar: {
    backgroundColor: "#9b6233",
    boxShadow: "none",
  },
  grow: {
    flexGrow: 1,
  },
  button: {
    marginLeft: theme.spacing(2),
  },
  image: {
    marginRight: "10px",
    height: "3rem",
  },
}));

export default function Navbar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.AppBar}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <img src={logo} className={classes.image} />
          </IconButton>
          <div className={classes.grow} />
          <Typography variant="h6" color="textPrimary" component="p">
            Bienvenido!
          </Typography>
          <IconButton aria-label="show cart items" color="white">
              <Badge badgeContent={0} color="secondary">
                  <ShoppingCart fontsize="large"></ShoppingCart>
              </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
