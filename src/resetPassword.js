import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
//import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
//import Register from "./Register";
const StyledButton = withStyles({
  root: {
    background: "#EF6C00",
    borderRadius: 3,
    border: 0,
    color: "black",
    height: 40,
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px grey",
    "&:hover": {
      background: "black",
      color: "#EF6C00"
    }
  },

  label: {
    textTransform: "capitalize",
    paddingLeft: 5
  }
})(Button);
const theme = createMuiTheme({
  overrides: {
    MuiInput: {
      underline: {
        borderBottom: "2px solid white",
        "&:after": {
          borderBottom: "2px solid #ffa500"
        }
      }
    }
  },
  palette: {
    primary: {
      main: "#EF6C00"
    }
  }
});
class ResetPassword extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reset_token: "",
      password: "",
      confirm_password: "",
      passwordError: "*Password length must be more than 6*",
      passwordValid: false,
      formValid: false
    };
  }

  render() {
    return (
      <div align="center">
        <MuiThemeProvider theme={theme}>
          <Paper className="Paper2" elevation={1}>
            <Paper className="Header" elevation={24}>
              <text>ResetPassword</text>
            </Paper>
            <br />
            <br />
            <div>
              <TextField
                name="password"
                type="password"
                label="Password"
                value={this.state.password}
                onChange={event => this.handleUserInput(event)}
              />
              <br />
              <br />
              <TextField
                name="confirm_password"
                type="password"
                label="Confirm Password"
                value={this.state.confirm_password}
                onChange={event => this.handleUserInput(event)}
              />
              <br />
              <error>{this.state.passwordError}</error>
              <br />
              <br />
              <StyledButton
                disabled={!this.state.formValid}
                onClick={event => this.handleResetPassword(event)}
              >
                Reset
              </StyledButton>
              <br />
              <br />
              <Link to="/login">Login</Link>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
  handleResetPassword(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/resetpassword";

    var payload = {
      password: this.password,
      reset_token: this.reset_token
    };

    axios.post(apiBaseUrl, payload).then(function(response) {
      if (response.data.status === "true") {
        alert(response.data.message);
      } else {
        alert(response.data.message);
      }
    });
  }

  handleUserInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ [name]: value }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "password":
        if (value.length >= 6) {
          this.setState({ passwordError: "" });
        } else this.setState({ passwordError: "Password too short!" });
        break;
      case "confirm_password":
        if (value === this.state.password) {
          passwordValid = true;
          this.setState({ passwordError: "" });
        } else this.setState({ passwordError: "Password does not match!" });
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.passwordValid
    });
  }
}

export default ResetPassword;
