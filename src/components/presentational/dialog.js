import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
});
const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#ffc107"
      }
    }
  });


class AlertDialog extends React.Component {
  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  renderSwitch(type) {
    switch(type)  {
  case "Error":
      return "red";
  case "Warning":
      return "Orange";
  default:
      return "white";
  }
}
  render() {
    const { classes } = this.props;
    return (
      <div>

           <MuiThemeProvider theme={theme}>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Open alert dialog
        </Button>
        <Dialog
          borderColor={this.renderSwitch(this.props.type)}
          className={classes.container}
          open={this.state.open}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">{this.props.text}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
            {this.props.value}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Disagree
            </Button>
            <Button onClick={this.handleClose} color="primary" autoFocus>
              Agree
            </Button>
          </DialogActions>
        </Dialog>
        </MuiThemeProvider>
      </div>
    );
  }
}

AlertDialog.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AlertDialog);