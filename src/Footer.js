import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import Icon from "@material-ui/core/Icon";
import RestoreIcon from "@material-ui/icons/Restore";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LocationOnIcon from "@material-ui/icons/LocationOn";
const styles = {
  root: {
    width: "100%",
    backgroundColor: "black",
    bottom: 0,
    height: "50px",
    position: ""
  }
};
class SimpleBottomNavigation extends React.Component {
  state = {
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
      <div>
        <div style={{ width: "100%", height: "60px" }} />
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          className={classes.root}
        >
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Recents"
            value="recents"
            icon={<RestoreIcon style={{ color: "white" }} />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon style={{ color: "white" }} />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon style={{ color: "white" }} />}
          />
          <BottomNavigationAction
            style={{ color: "white" }}
            label="Folder"
            value="folder"
            icon={<Icon style={{ color: "white" }}>folder</Icon>}
          />
        </BottomNavigation>
      </div>
    );
  }
}

SimpleBottomNavigation.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleBottomNavigation);
