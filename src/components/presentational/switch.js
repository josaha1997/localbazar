import React from 'react';
//import { createMuiTheme, createMuiTheme  } from '@material-ui/core/styles';
import { MuiThemeProvider, createMuiTheme} from "@material-ui/core/styles";
//import blue from '@material-ui/core/colors/blue';
//import green from '@material-ui/core/colors/green';
import Switch from '@material-ui/core/Switch';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#ffc107"
    }
  }
});

class Switches extends React.Component {
  state = {
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (
      <div>
        <MuiThemeProvider theme={theme}>
        <Switch
          checked={this.state.checkedB}
          onChange={this.handleChange('checkedB')}
          value="checkedB"
          color="primary"
        />
        </MuiThemeProvider>
      </div>
    );
  }
}

export default Switches;