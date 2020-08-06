import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import IconButton from "@material-ui/core/IconButton";
import { fade } from "@material-ui/core/styles/colorManipulator";
import Chip from "@material-ui/core/Chip";
const category = ["pulses", "rice", "oils"];
const styles = theme => ({
  root: {
    flexGrow: 1,
    width: "100%",
    height: "60px",
    backgroundColor: "#009933",
    display: "block"
  },
  grow: {
    fontSize: 15
  },
  chip: {
    margin: theme.spacing.unit,

    backgroundColor: fade(theme.palette.common.white, 0.3),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 1),
      color: "#009933"
    },
    color: "white"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,

    width: "12%",
    height: "40%",
    borderRadius: "10px",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.3)
    }
  }
});

class MenuAppBar extends React.Component {
  state = {
    auth: true,
    anchorEl: null
  };

  handleChange = event => {
    this.setState({ auth: event.target.checked });
  };

  handleMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div className={classes.root}>
        <div style={{ height: "70px" }} />
        <AppBar position="static" className={classes.root}>
          <Toolbar>
            <IconButton className={classes.menuButton}>
              <LocationOnIcon
                style={{
                  marginRight: "5%"
                }}
              />
              <Typography color="black" className={classes.grow}>
                <b>Delivery Pin {this.props.pin}</b>
              </Typography>
            </IconButton>
            {this.props.category &&
              this.props.category
                .slice(0, 11)
                .map(cat => (
                  <Chip
                    label={cat.product_catagory_name}
                    className={classes.chip}
                  />
                ))}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MenuAppBar);
