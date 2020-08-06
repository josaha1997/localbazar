import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import green from '@material-ui/core/colors/green';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';


const styles = theme => ({
  root: {
    color: green[600],
    
    '&$checked': {
      color: green[500],
    },
    display: 'flex',
  },
  
  formControl: {
    margin: theme.spacing.unit * 3,
  },
  group: {
    margin: `${theme.spacing.unit}px 0`,
  },
  checked: {},
});
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffc107"
    }
  }
});

class RadioButtonsGroup extends React.Component {
  state = {
    value: 'female',
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <FormControl component="fieldset" className={classes.formControl}>
          <FormLabel component="legend" >Gender</FormLabel>
          <RadioGroup
         // text-color="green"
            aria-label="Gender"
            name="gender1"
            className={classes.group}
            value={this.state.value}
            onChange={this.handleChange}
          >
            <FormControlLabel value="female" control={<Radio color="primary" />} label="Female" />
            <FormControlLabel value="male" control={<Radio color="primary" />} label="Male" />
            <FormControlLabel value="other" control={<Radio color="primary"/>} label="Other" />
          
          </RadioGroup>
        </FormControl>
        </MuiThemeProvider>
      </div>
    );
  }
}

RadioButtonsGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(RadioButtonsGroup);