import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  leftIcon: {
    marginRight: theme.spacing.unit*3,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit*3,
  },
  iconSmall: {
    fontSize: 20,
  },
});
const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ffc107"
      }
    }
  });

  class IconLabelButtons extends React.Component {
    render(){
        const { classes } = this.props;
      
        return (
    <div>
        <MuiThemeProvider theme={theme}>
      <Button variant="contained" color="default" className={classes.button}>
        {this.props.text}
        <CloudUploadIcon className={classes.rightIcon} />
      </Button>
      </MuiThemeProvider>
    
    </div>
  );
}
}

IconLabelButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IconLabelButtons);