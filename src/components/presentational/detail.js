import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';

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

class Detail extends Component {
    render(){
        const { classes } = this.props;
      
        return (
            <div>
          <MuiThemeProvider theme={typographyV1Theme}>
            <div className={classes.root}>
      <Typography variant="h4" color="primary" gutterBottom>
      {this.props.text} 
              </Typography>
              </div>
          </MuiThemeProvider>
     
      {this.props.value.map(item => (
              <div key={item.id}><h3>{item.title}</h3>
              <h3>{item.img}</h3>
              <h3>{item.price}</h3>
              <h3>{item.detail}</h3>
              </div>
            ))}
      </div>
  );
  }
  }
  Detail.propTypes = {
    classes: PropTypes.object.isRequired,
  };

  export default withStyles(styles)(Detail);