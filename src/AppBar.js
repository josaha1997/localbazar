import React from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { withStyles } from "@material-ui/core/styles";
import axios from "axios";
import ReactDom from "react-dom";
import MenuAppBar from "./components/presentational/navbar";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MoreIcon from "@material-ui/icons/MoreVert";
import Search from "./components/presentational/search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import history from "./history";
import { Router, Link } from "react-router-dom";
import AddBusiness from "./addBusiness";
const styles = theme => ({
  root: {
    width: "100%",
    backgroundColor: "#009933"
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "block"
    }
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("xs")]: {
      display: "flex"
    }
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("xs")]: {
      display: "none"
    }
  }
});

class PrimarySearchAppBar extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    response: {}
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };
  handleClick = () => {
    history.push("/addbusiness");
  };
  handleSignUp = () => {
    history.push("/");
  };
  handleHome = () => {
    history.push("/home");
  };
  handleLogout = () => {
    localStorage.removeItem("id");
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    history.push("/home");
    ReactDom.render(<PrimarySearchAppBar />, document.getElementById("root"));
  };
  componentDidMount() {
    const self = this;
    axios

      .get(
        "https://canopus-api.herokuapp.com/api/home/header/ketankatore@gmail.com"
      )
      .then(function(response) {
        self.setState({ response: response.data.userinfo });
        console.log(self.state.response);
      });
  }

  render() {
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleClick}>Merchant</MenuItem>
        <MenuItem onClick={this.handleLogout}>Logout</MenuItem>
      </Menu>
    );

    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        open={isMobileMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMobileMenuClose}>
          <IconButton color="inherit">
            <Badge
              badgeContent={this.state.response.cartcount}
              color="secondary"
            >
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </MenuItem>

        <MenuItem onClick={this.handleProfileMenuOpen}>
          <IconButton color="inherit">
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );

    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          style={{ backgroundColor: "#009933", height: "80px" }}
        >
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              color="inherit"
              aria-label="Open drawer"
              onClick={this.handleProfileMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="long-menu"
              anchorEl={anchorEl}
              onClose={this.handleMenuClose}
              PaperProps={{
                style: {
                  width: 200
                }
              }}
            >
              <MenuItem onClick={this.handleClick}>Merchant</MenuItem>
            </Menu>

            <IconButton color="inherit" onClick={this.handleHome}>
              <div style={{ fontSize: "25px", marginLeft: "8px" }}>
                Local Bazar
              </div>
            </IconButton>

            <Search value={this.state.response.catagories} />
            <Typography
              className={classes.title}
              variant="h6"
              color="inherit"
              noWrap
              style={{ marginLeft: "10%" }}
            >
              Welcome!
            </Typography>
            {!localStorage.getItem("fname") && !localStorage.getItem("lname") && (
              <IconButton color="inherit" onClick={this.handleSignUp}>
                <div style={{ fontSize: "20px", marginLeft: "8px" }}>
                  SignUp!
                </div>
              </IconButton>
            )}
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton color="inherit">
                <Badge
                  badgeContent={this.state.response.cartcount}
                  color="secondary"
                >
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              {localStorage.getItem("fname") &&
                localStorage.getItem("lname") && (
                  <p>
                    {localStorage.getItem("fname") +
                      " " +
                      localStorage.getItem("lname")}
                  </p>
                )}
              <IconButton
                aria-owns={isMenuOpen ? "material-appbar" : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle style={{ marginLeft: "5px" }} />
              </IconButton>
            </div>
            <div className={classes.sectionMobile}>
              <IconButton
                aria-haspopup="true"
                onClick={this.handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {renderMenu}
        {renderMobileMenu}
        <MenuAppBar
          pin={this.state.response.pin_code}
          category={this.state.response.catagories}
        />
      </div>
    );
  }
}

PrimarySearchAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PrimarySearchAppBar);
