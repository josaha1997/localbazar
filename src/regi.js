import React, { Component } from "react";
import ReactDOM from "react-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import AppBar from "material-ui/AppBar";
import RaisedButton from "material-ui/RaisedButton";
import TextField from "material-ui/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import FormErrors from "./FormErrors";
import axios from "axios";
//import Login from "./Login";
class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      MobileNumber: "",
      AdharNumber: "",
      email: "",
      date: "",
      formErrors: {
        MobileNumber: "",
        email: "",
        name: "",
        date: "",
        AdharNumber: ""
      },
      MobileNumberValid: false,
      AdharNumberValid: false,
      // passwordValid: false,
      dateValid: false,
      nameValid: false,

      emailValid: false,
      formValid: false
    };
  }
  render() {
    return (
      <div align="center">
        <MuiThemeProvider>
          <div>
            <AppBar title="Register" />
            <TextField
              name="name"
              value={this.state.name}
              hintText="Enter your  Name"
              floatingLabelText="Name"
              onChange={event => this.handleUserInput(event)}
            />
            <br />
            <TextField
              name="MobileNumber"
              value={this.state.MobileNumber}
              type="integer"
              hintText="Enter Your Mobile Number"
              floatingLabelText="Mobile Number"
              onChange={event => this.handleUserInput(event)}
            />
            <br />
            <TextField
              name="date"
              value={this.state.date}
              type="integer"
              hintText="Enter Your date of birth"
              floatingLabelText="date of birth"
              onChange={event => this.handleUserInput(event)}
            />
            <br />

            <FormControl component="fieldset">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                //  onChange={this.setGender.bind(this)}
                aria-label="Gender"
                name="gender"
                value={this.state.value}
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <br />
            <TextField
              name="email"
              value={this.state.email}
              hintText="Enter your Email"
              type="email"
              floatingLabelText="Email"
              onChange={event => this.handleUserInput(event)}
            />
            <br />

            <TextField
              name="AdharNumbar"
              value={this.state.AdharNumbar}
              type="integer"
              hintText="Enter Your Adhar Number"
              floatingLabelText="AdharNumber"
              onChange={event => this.handleUserInput(event)}
            />
            <br />

            <RaisedButton
              disabled={!this.state.formValid}
              label="Register"
              primary={true}
              style={style}
              onClick={event => this.handleRegister(event)}
            />
          </div>
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
    let MobileNumberValid = this.state.MobileNumberValid;
    let AdharNumberValid = this.state.AdharNumberValid;
    //let passwordValid = this.state.passwordValid;
    let nameValid = this.state.nameValid;
    let dateValid = this.state.dateValid;
    let emailValid = this.state.emailValid;

    switch (fieldName) {
      case "MobileNumber":
        if (value.match(/^[789]\d{9}$/)) {
          MobileNumberValid = true;
          fieldValidationErrors.MobileNumber = "";
        } else fieldValidationErrors.MobileNumbere = "Invalid!";
        break;
      case "AdharNumber":
        if ((value.length = 12)) {
          AdharNumberValid = true;
          fieldValidationErrors.AdharNumber = "";
        } else fieldValidationErrors.AdharNumber = "Invalid!";
        break;
      /* case "password":
                 if (value.length >= 6) {
                     passwordValid = true;
                     fieldValidationErrors.password = "";
                 } else fieldValidationErrors.password = "too short!";
                 break;*/
      case "name":
        if (value.match(/^[A-Za-z]+ [a-zA-Z]+$/)) {
          nameValid = true;
          fieldValidationErrors.name = "";
        } else fieldValidationErrors.name = "Invalid!";
        break;
      case "date":
        if (
          value.match(
            /^(0[1-9]|[12][0-9]|3[01])[\- \/.](?:(0[1-9]|1[012])[\- \/.](19|20)[0-9]{2})$/
          )
        ) {
          dateValid = true;
          fieldValidationErrors.date = "";
        } else fieldValidationErrors.date = "Invalid!";
        break;
      case "email":
        if (value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
          emailValid = true;
          fieldValidationErrors.email = "";
        } else fieldValidationErrors.email = "Invalid!";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        MobileNumberValid: MobileNumberValid,
        AdharNumberValid: AdharNumberValid,
        //passwordValid: passwordValid,
        dateValid: dateValid,
        nameValid: nameValid,
        emailValid: emailValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.MobileNumberValid &&
        this.state.AdharNumberValid &&
        this.dateValid.dateValid &&
        this.state.nameValid &&
        this.state.emailValid
    });
  }

  handleRegister(event) {
    var apiBaseUrl = "https://canopus-poc2.herokuapp.com/api/registration";

    var payload = {
      //username: this.state.username,
      MobileNumber: this.state.MobileNumberValid,
      AdharNumber: this.state.AdharNumberValid,
      date: this.dateValid.dateValid,
      name: this.state.name,
      email: this.state.email
    };

    axios
      .post(apiBaseUrl, payload)
      .then(function(response) {
        console.log(response);
        if (response.data.status === "true") {
          alert("Registeration successfull");
          // ReactDOM.render(<Login />, document.getElementById("root"));
        } else if (response.data.status === "false") {
          console.log("User ALready Exists");
          alert("User Already exists");
        } else {
          console.log("Registeration unsuccessful");
          alert("Rejisteration unsuccessful");
        }
      })
      .catch(function(error) {
        console.log(apiBaseUrl);
      });
  }
}
const style = {
  margin: 15
};
export default Register;
