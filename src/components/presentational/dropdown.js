import React from "react";
//import classNames from 'classnames';
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import { withStyles } from "@material-ui/core/styles";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
// Button from '@material-ui/core/Button';
import MenuItem from "@material-ui/core/MenuItem";
import { Input } from "@material-ui/core";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    marginTop: "-15px"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: "150%",
    [theme.breakpoints.up("xs")]: {
      marginLeft: theme.spacing.unit,
      width: "100%"
    }
  }
});

class DropDown extends React.Component {
  state = {
    value: ""
  };

  /*handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };*/
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="outlined-age-native-simple">
            {this.props.label}
          </InputLabel>
          <Select
            value={this.state.value}
            onChange={this.handleChange}
            input={<Input name="value" id="demo-controlled-open-select" />}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>

            {this.props.value &&
              this.props.value.map(option => (
                <MenuItem key={option._id} value={option.product_catagory_name}>
                  {option.product_catagory_name}
                </MenuItem>
              ))}
          </Select>
        </FormControl>
      </div>
    );
  }
}

DropDown.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DropDown);
