import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    root: {
        display: 'flex',
        //flexWrap: 'wrap',
      },
      margin: {
        margin: theme.spacing.unit,
      },
      formControl: {
        margin: theme.spacing.unit * 3,
      },
      group: {
        margin: `${theme.spacing.unit}px 0`,
      },
      withoutLabel: {
        marginTop: theme.spacing.unit * 3,
      },
      
        
      textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        flexBasis: 200,
      },
});
const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ffc107"
      }
    }
  });

class OutlinedTextFields extends Component {
  state = {
    multiline: " ",
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes } = this.props;

    return (
        <MuiThemeProvider theme={theme}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="outlined-multiline-flexible"
         label={this.props.label}
         multiline rowsMax="4"
          value={this.state.multiline}
          onChange={this.handleChange('multiline')}
          className={classes.textField}
          margin="normal"
          variant="outlined"
        />
        </form>
        </MuiThemeProvider>
    );
  }
}

OutlinedTextFields.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedTextFields);