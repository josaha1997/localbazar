import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import history from "./history";
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

class Master extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      confirmpassword: "",
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
              <text>Master Password</text>
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

              <TextField
                name="confirmpassword"
                type="password"
                label="Confirm Password"
                value={this.state.confirmpassword}
                onChange={event => this.handleUserInput(event)}
              />
              <br />
              <error>{this.state.passwordError}</error>
              <br />
              <br />

              <StyledButton
                disabled={!this.state.formValid}
                onClick={event => this.handlesetmaster(event)}
              >
                Submit
              </StyledButton>
              <br />
              <br />
              <Link to="/listbusiness">List Business</Link>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
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
      case "confirmpassword":
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
  handlesetmaster(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/masterpassword";

    var payload = {
      password: this.state.password
    };

    axios.post(apiBaseUrl, payload).then(function(response) {
      console.log(response);
      if (response.data.status === "true") {
        alert(response.data.message);
        history.push("/addproduct");
      } else if (response.data.status === "false") {
        console.log("Invalid password");
        alert(response.data.message);
      } else {
        console.log("Master password could not be set");
        alert("Master password could not be set");
      }
    });
  }
}
export default Master;
