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
  });
}

function DeprecatedTypes(props) {
  const { classes } = props;

  return (
    <MuiThemeProvider theme={typographyV1Theme}>
      <div className={classes.root}>
<Typography component="h2" variant={this.props.text} gutterBottom>

        </Typography>
        </div>
    </MuiThemeProvider>
  );
}

DeprecatedTypes.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DeprecatedTypes);