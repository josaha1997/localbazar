import React, { Component } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import { fade } from "@material-ui/core/styles/colorManipulator";
import DropDown from "./dropdown";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  inputRoot: {
    color: "inherit",
    width: "100%"
  },
  break: {
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing.unit * 2,
      display: "flex"
    }
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      width: 200
    }
  },
  searchOver: {
    position: "relative",
    borderRadius: "25px",
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginTop: "25%",
    marginBottom: "25%",
    width: "50%",
    height: "20%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing.unit * 2,
      width: "40%",
      height: "20%"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing.unit * 2,
      width: "50%"
    }
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});

function searchingFor(term) {
  return function(x) {
    return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
  };
}

class Search extends Component {
  state = {
    term: "",
    category: ""
  };
  render() {
    const { term, category } = this.state;
    const { classes } = this.props;
    return (
      <Toolbar className={classes.searchOver}>
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput
            }}
            name="term"
            value={term}
            onChange={event => this.handleUserInput(event)}
          />
        </div>
        <DropDown
          value={this.props.value}
          className={classes.search}
          label="Category"
        />

        {/*
        <StyledSelect
          className={classes.break}
          inputProps={{
            name: "category",
            id: "category"
          }}
          value={category}
          onChange={event => this.handleUserInput(event)}
        >
          {this.props.value.map(data => (
            <MenuItem value={data}>{data}</MenuItem>
          ))}
          ;
          </StyledSelect>*/}
        {console.log(this.state.term)}
      </Toolbar>
    );
  }
  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    console.log({ [name]: value });
    this.setState({ [name]: value });
  }
}

export default withStyles(styles)(Search);
