import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';

const styles = {
    root: {
      width: '100%',
      maxWidth: 500,
    },
  };
  function typographyV1Theme(theme) {
    return createMuiTheme({
      ...theme,
      typography: {
        useNextVariants: false,
      },
      palette: {
        primary: {
          main: "#ffc107"
        }
      },
    })
  };

class Headings extends React.Component {
    render(){
        const { classes } = this.props;
      
        return (
          <MuiThemeProvider theme={typographyV1Theme}>
            <div className={classes.root}>
      <Typography variant="h4" color="primary" gutterBottom>
      {this.props.text} 
              </Typography>
              </div>
          </MuiThemeProvider>
        );
      }

    }
  
  Headings.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(Headings);


