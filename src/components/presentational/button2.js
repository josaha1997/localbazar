import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
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
  class ContainedButtons extends React.Component {
    render(){
        const { classes } = this.props;
      
        return (
    <div>
     <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="primary" className={classes.button}>
      {this.props.text} 
      </Button>
      </MuiThemeProvider>
    </div>
  );
}
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);