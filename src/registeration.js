import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";

import history from "./history";
//import ReactDOM from "react-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import ReactDom from "react-dom";
import Login from "./Login";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";

//import Login from "./Login";
//import { HardwareRouter } from "material-ui/svg-icons";

const StyledSelect = withStyles({
  root: {
    minWidth: 200
  }
})(Select);

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

class Register extends Component {
  previousLocation = this.props.location;

  /*componentWillUpdate(nextProps) {
    let { location } = this.props;

    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== "POP" &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location;
    }
  }  */
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email_id: "",
      mobile_number: "",
      password: "",
      confirm_password: "",
      confirm_passwordError: "",
      email_idError: "*Enter a valid e-mail id*",
      first_nameError: "*Enter your first name*",
      last_nameError: "*Enter your last name*",
      passwordError: "*Password length must be more than 6*",
      mobile_numberError: "*Enter a valid mobile number*",
      user_idValid: false,
      passwordValid: false,
      mobile_numberValid: false,
      first_nameValid: false,
      last_nameValid: false,
      formValid: false
    };
  }
  handleChange = event => {
    this.setState({ gender: event.target.value });
  };
  render() {
    return (
      <div align="center">
        <MuiThemeProvider theme={theme}>
          <Paper align="center" className="Paper1" elevation={1}>
            <Paper className="Header" elevation={24}>
              <text>Registration</text>
            </Paper>
            <br />
            <form>
              <Table style={{ width: "90%" }}>
                <TableBody>
                  <TableRow>
                    <TableCell>
                      <br />
                      <TextField
                        name="first_name"
                        type="text"
                        label="First Name"
                        value={this.state.first_name}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.first_nameError}</error>
                      <br />
                      <TextField
                        name="email_id"
                        type="email"
                        label="Email-ID"
                        value={this.state.email_}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.email_idError}</error>
                      <br />
                      <TextField
                        name="password"
                        type="password"
                        label="Password"
                        value={this.state.password}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.passwordError}</error>
                      <br />
                    </TableCell>
                    <TableCell>
                      <br />
                      <TextField
                        name="last_name"
                        type="text"
                        label="Last Name"
                        value={this.state.last_name}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.last_nameError}</error>
                      <br />
                      <TextField
                        name="mobile_number"
                        type="integer"
                        label="Mobile Number"
                        value={this.state.mobile_number}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.mobile_numberError}</error>
                      <br />
                      <TextField
                        name="confirm_password"
                        type="password"
                        label="Confirm Password"
                        value={this.state.confirm_password}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.confirm_passwordError}</error>
                      <br />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br />
              <StyledButton
                disabled={!this.state.formValid}
                onClick={event => this.handleRegister(event)}
              >
                Register
              </StyledButton>
              <br />
              <br />
              Already have an account?
              <Link to="/login">Login</Link>
            </form>
          </Paper>
          <br />
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
    let email_idValid = this.state.email_idValid;
    let passwordValid = this.state.passwordValid;
    let mobile_numberValid = this.state.mobile_numberValid;

    let last_nameValid = this.state.last_nameValid;
    let first_nameValid = this.state.first_nameValid;

    switch (fieldName) {
      case "email_id":
        if (value.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
          email_idValid = true;
          this.setState({ email_idError: "" });
        } else this.setState({ email_idError: "Invalid email-id!" });
        break;
      case "password":
        if (value.length >= 6) {
          this.setState({ passwordError: "" });
        } else this.setState({ passowrdError: "Password too short!" });
        break;
      case "mobile_number":
        if (value.match(/^[789]\d{9}$/)) {
          mobile_numberValid = true;
          this.setState({ mobile_numberError: "" });
        } else this.setState({ mobile_numberError: "Invalid mobile number!" });
        break;

      case "first_name":
        if (value.match(/^[A-Z a-z]+$/) && value != null) {
          first_nameValid = true;
          this.setState({ first_nameError: "" });
        } else
          this.setState({
            first_nameError: " First Name can't be empty or numbers!"
          });
        break;
      case "last_name":
        if (value.match(/^[A-Z a-z]+$/) && value != null) {
          last_nameValid = true;
          this.setState({ last_nameError: "" });
        } else
          this.setState({
            last_nameError: "Last Name can't be empty or numbers!"
          });
        break;
      case "confirm_password":
        if (value === this.state.password) {
          passwordValid = true;
          this.setState({ confirm_passwordError: "" });
        } else
          this.setState({ confirm_passwordError: "Password does not match!" });
        break;
      default:
        break;
    }
    this.setState(
      {
        mobile_numberValid: mobile_numberValid,
        first_nameValid: first_nameValid,
        last_nameValid: last_nameValid,
        email_idValid: email_idValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.email_idValid &&
        this.state.passwordValid &&
        this.state.mobile_numberValid &&
        this.state.first_nameValid &&
        this.state.last_nameValid
    });
  }
  handleRegister(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/register";

    var payload = {
      email_id: this.state.email_id,
      password: this.state.password,
      mobile_number: this.state.mobile_number,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };
    axios
      .post(apiBaseUrl, payload)
      .then(function(response) {
        console.log(response);
        if (response.data.status === "true") {
          alert(response.data.message);
          localStorage.setItem("fname", payload.first_name);
          localStorage.setItem("lname", payload.last_name);
          localStorage.setItem("email_id", payload.email_id);
          // Router.push({ path: "/login" });
          history.push("/login");
        } else if (response.data.status === "false") {
          alert(response.data.message);
          //Router.push({ path: "/login" });
        } else {
          alert("Sorry! WE ran into some problem.Please try later.");
        }
      })
      .catch(function(error) {
        console.log(apiBaseUrl);
      });
  }
}

export default Register;
