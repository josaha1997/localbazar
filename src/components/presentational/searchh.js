import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
import {SearchIcon} from '@material-ui-icons';
import InputBase from '@material-ui/core/InputBase';

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
    rightIcon: {
      marginLeft: theme.spacing.unit,
    },
    iconSmall: {
      fontSize: 20,
    },
    search: {
      position: 'relative',
      borderRadius: theme.shape.borderRadius,
      //backgroundColor: fade(theme.palette.common.white, 0.15),
      '&:hover': {
       // backgroundColor: fade(theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  const theme = createMuiTheme({
      palette: {
        primary: {
          main: "#ffc107"
        }
      }
    });
  
class Search extends React.Component {
 state = {
   find: '',
 }

 handleInputChange = () => {
   this.setState({
     find: this.search.value
   })
 }

 render() {
  const { classes } = this.props;
   return (
         
         <div className={classes.search}>
          <MuiThemeProvider theme={theme}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
            />
            </MuiThemeProvider>
          </div>
   )
 }
}
Search.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Search);
