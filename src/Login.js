import React from "react";
import axios from "axios";
import PrimarySearchAppBar from "./AppBar";
import "./Login.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactDom from "react-dom";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Home from "./components/presentational/home";
import Register from "./registeration";
import AddBusiness from "./addBusiness";
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
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_id: "",
      password: "",
      email_idError: "*Enter a valid e-mail id*",
      passwordError: "*Password length must be more than 6*",
      email_idValid: false,
      passwordValid: false,
      formValid: false,
      open: false
    };
  }

  render() {
    return (
      <div align="center">
        <MuiThemeProvider theme={theme}>
          <Paper className="Paper" elevation={1}>
            <Paper className="Header" elevation={24}>
              <text>Login</text>
            </Paper>
            <br />
            <br />
            <div>
              <TextField
                name="email_id"
                type="text"
                label="UserId"
                value={this.state.email_id}
                onChange={event => this.handleUserInput(event)}
              />
              <br />
              <error align="left">{this.state.email_idError}</error>
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
              <br />
              <span>
                <label onClick={this.handleClickOpen}>Forgot Password?</label>
              </span>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="form-dialog-title"
              >
                <DialogTitle id="form-dialog-title">Password Reset</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    To get a password reset mail, please enter your registeted
                    email-id.
                  </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    name="email_id"
                    label="Email Address"
                    type="email"
                    value={this.state.email_id}
                    onChange={event => this.handleUserInput(event)}
                    fullWidth
                  />
                  <br />
                  <error align="left">{this.state.email_idError}</error>
                  <br />
                </DialogContent>
                <DialogActions>
                  <StyledButton onClick={this.handleClose}>Cancel</StyledButton>
                  <StyledButton
                    onClick={event => this.handleForgotPassowrd(event)}
                  >
                    Submit
                  </StyledButton>
                </DialogActions>
              </Dialog>
              <br />
              <br />
              <br />
              <StyledButton
                disabled={!this.state.formValid}
                onClick={event => this.handleLogin(event)}
              >
                Login
              </StyledButton>
              <br />
              <br />
              <br />
              <Link to="/">Create New Account</Link>
            </div>
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };
  handleForgotPassowrd(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/forgetpassword";

    var payload = {
      email_id: this.state.email_id
    };

    axios.post(apiBaseUrl, payload).then(function(response) {
      if (response.data.status === "true") {
        alert("Password Reset mail has been sent to your registered mail id!");
      } else {
        alert("Sorry! There was a problem sending mail.Try again later.");
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
    let email_idValid = this.state.email_idValid;
    let passwordValid = this.state.passwordValid;

    switch (fieldName) {
      case "email_id":
        if (value.match(/^[a-zA-Z0-9._]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
          email_idValid = true;
          this.setState({ email_idError: "" });
        } else this.setState({ email_idError: "Invalid email_id!" });
        break;
      case "password":
        if (value.length >= 6) {
          passwordValid = true;
          this.setState({ passwordError: "" });
        } else this.setState({ passowrdError: "Password too short!" });
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        email_idValid: email_idValid,
        passwordValid: passwordValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid: this.state.email_idValid && this.state.passwordValid
    });
  }

  handleLogin(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/login";
    var payload = {
      email_id: this.state.email_id,
      password: this.state.password
    };

    axios
      .post(apiBaseUrl, payload)
      .then(function(response) {
        console.log(response);
        if (response.data.status === "true") {
          alert(response.data.message);
          localStorage.setItem("id", payload.email_id);
          history.push("/home");
          ReactDom.render(
            <PrimarySearchAppBar />,
            document.getElementById("root")
          );
          // ReactDom.render(<Home />, document.getElementById("root"));
          //this.props.history.push("/home");
          //this.context.router.history.push("/home");
        } else if (response.data.status === "false") {
          alert(response.data.message);
        }
      })
      .catch(function(error) {
        alert(error);
      });
  }
}

export default Login;
