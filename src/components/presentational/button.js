import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit*3,
  },
  input: {
    display: 'none',
  },
});
const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ffc107"
      }
    }
  });

function OutlinedButtons(props) {
  const { classes } = props;
  return (
    <div>
        <MuiThemeProvider theme={theme}>
      <Button variant="outlined" color="primary" className={classes.button}>
        Button
      </Button>
      </MuiThemeProvider>
    </div>
  );
}

OutlinedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(OutlinedButtons);