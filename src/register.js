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
var pin = [
  111045,
  410038,
  411000,
  411001,
  411002,
  411003,
  411004,
  411005,
  411006,
  411007,
  411008,
  411009,
  411011,
  411012,
  411013,
  411014,
  411015,
  411016,
  411020,
  411021,
  411022,
  411023,
  411024,
  411025,
  411028,
  411029,
  411030,
  411031,
  411032,
  411036,
  411037,
  411038,
  411040,
  411041,
  411042,
  411043,
  411045,
  411046,
  411047,
  411048,
  411051,
  411052,
  411053,
  411055,
  411058,
  411060,
  411066,
  411067,
  411078,
  411230,
  412029,
  412047,
  412105,
  412115,
  412207,
  412307,
  412308,
  413337
];

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
      aadhar_number: "",
      date_of_birth: "",
      password: "",
      address_line_1: "",
      address_line_2: "",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pin_code: "",
      gender: "female",
      pin_codeError: "*Select a pin code*",
      address_line_1Error: "*Do not use any symbols*",
      email_idError: "*Enter a valid e-mail id*",
      first_nameError: "*Enter your first name*",
      last_nameError: "*Enter your last name*",
      passwordError: "*Password length must be more than 6*",
      mobile_numberError: "*Enter a valid mobile number*",
      aadhar_numberError: "*Enter a valid adhar number*",
      date_of_birthError: "Enter a valid date ",
      address_line_1Valid: false,
      user_idValid: false,
      passwordValid: false,
      mobile_numberValid: false,
      aadhar_numberValid: false,
      date_of_birthValid: false,
      first_nameValid: false,
      last_nameValid: false,
      pin_codeValid: false,
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

                      <TextField
                        name="address_line_1"
                        type="text"
                        label="Address Line 1"
                        value={this.state.address_line_1}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.address_line_1Error}</error>
                      <br />
                      <br />
                      <InputLabel htmlFor="country">Country</InputLabel>
                      <br />
                      <StyledSelect
                        inputProps={{
                          name: "country",
                          id: "country"
                        }}
                        value={this.state.country}
                        onChange={event => this.handleUserInput(event)}
                      >
                        <MenuItem value={"India"}>India</MenuItem>
                      </StyledSelect>
                      <br />
                      <br />
                      <InputLabel htmlFor="city">City</InputLabel>
                      <br />
                      <StyledSelect
                        inputProps={{
                          name: "city",
                          id: "city"
                        }}
                        value={this.state.city}
                        onChange={event => this.handleUserInput(event)}
                      >
                        <MenuItem value={"Pune"}>Pune</MenuItem>
                      </StyledSelect>
                      <br />
                      <br />
                      <InputLabel htmlFor="date_of_birth">
                        Date Of Birth
                      </InputLabel>
                      <br />
                      <TextField
                        name="date_of_birth"
                        id="date_of_birth"
                        type="date"
                        value={this.state.date_of_birth}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <error>{this.state.date_of_birthError}</error>
                      <br />
                    </TableCell>
                    <TableCell>
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
                        name="aadhar_number"
                        type="integer"
                        value={this.state.aadhar_number}
                        label="Adhar Number"
                        onChange={event => this.handleUserInput(event)}
                      />

                      <br />
                      <error>{this.state.aadhar_numberError}</error>
                      <br />
                      <br />
                      <TextField
                        name="address_line_2"
                        type="text"
                        label="Address Line 2"
                        value={this.state.address_line_2}
                        onChange={event => this.handleUserInput(event)}
                      />
                      <br />
                      <br />
                      <br />
                      <InputLabel htmlFor="state">State</InputLabel>
                      <br />
                      <StyledSelect
                        inputProps={{
                          name: "state",
                          id: "state"
                        }}
                        value={this.state.state}
                        onChange={event => this.handleUserInput(event)}
                      >
                        <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
                      </StyledSelect>
                      <br />
                      <br />
                      <InputLabel htmlFor="pin_code">Pin Code</InputLabel>
                      <br />
                      <StyledSelect
                        inputProps={{
                          name: "pin_code",
                          id: "pin_code"
                        }}
                        value={this.state.pin_code}
                        onChange={event => this.handleUserInput(event)}
                      >
                        {pin.map(data => (
                          <MenuItem value={data}>{data}</MenuItem>
                        ))}
                        ;
                      </StyledSelect>

                      <br />
                      <br />
                      <br />
                      <br />
                      <br />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
              <br />
              <div align="left">
                <FormControl align="center">
                  <FormLabel>Gender</FormLabel>
                  <RadioGroup
                    aria-label="Gender"
                    align="left"
                    name="gender"
                    value={this.state.gender}
                    onChange={this.handleChange}
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
                      label="Transgender"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <br />
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
              <StyledButton onClick={event => this.handleClick(event)}>
                Login
              </StyledButton>
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
    let aadhar_numberValid = this.state.aadhar_numberValid;
    let last_nameValid = this.state.last_nameValid;
    let first_nameValid = this.state.first_nameValid;
    let date_of_birthValid = this.state.date_of_birthValid;
    let address_line_1Valid = this.state.address_line_1Valid;
    let pin_codeValid = this.state.pin_codeValid;

    switch (fieldName) {
      case "email_id":
        if (value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
          email_idValid = true;
          this.setState({ email_idError: "" });
        } else this.setState({ email_idError: "Invalid Username!" });
        break;
      case "password":
        if (value.length >= 6) {
          passwordValid = true;
          this.setState({ passwordError: "" });
        } else this.setState({ passowrdError: "Password too short!" });
        break;
      case "mobile_number":
        if (value.match(/^[789]\d{9}$/)) {
          mobile_numberValid = true;
          this.setState({ mobile_numberError: "" });
        } else this.setState({ mobile_numberError: "Invalid mobile number!" });
        break;
      case "aadhar_number":
        if (value.match(/^[0-9]+$/) && value.length == 12) {
          aadhar_numberValid = true;
          this.setState({ aadhar_numberError: "" });
        } else this.setState({ aadhar_numberError: "Invalid Adhar number!" });
        break;
      case "address_line_1":
        if (value.match(/^[A-Z a-z 0-9 - /]+$/) && value != null) {
          address_line_1Valid = true;
          this.setState({ address_line_1Error: "" });
        } else
          this.setState({
            address_line_1Error: "Address field does not contain any symbols!"
          });
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
      case "date_of_birth":
        if (value != null) {
          date_of_birthValid = true;
          this.setState({ date_of_birthError: "" });
        } else this.setState({ date_of_birthError: "Invalid date!" });
        break;
      case "pin_code":
        if (value != null) {
          pin_codeValid = true;
          this.setState({ pin_codeError: "" });
        } else this.setState({ pin_codeError: "Pin code can't be empty" });
        break;
      default:
        break;
    }
    this.setState(
      {
        mobile_numberValid: mobile_numberValid,
        aadhar_numberValid: aadhar_numberValid,
        date_of_birthValid: date_of_birthValid,
        first_nameValid: first_nameValid,
        last_nameValid: last_nameValid,
        address_line_1Valid: address_line_1Valid,
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
        this.state.aadhar_numberValid &&
        this.state.address_line_1Valid &&
        this.state.date_of_birthValid &&
        this.state.first_nameValid &&
        this.state.last_nameValid
    });
  }
  handleClick(event) {
    history.push("/login");
  }
  handleRegister(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/register";

    var payload = {
      email_id: this.state.email_id,
      password: this.state.password,
      mobile_number: this.state.mobile_number,
      aadhar_number: this.state.aadhar_number,
      address_line_1: this.state.address_line_1,
      date_of_birth: this.state.date_of_birth,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      gender: this.state.gender,
      address_line_2: this.state.address_line_2,
      state: this.state.state,
      country: this.state.country,
      city: this.state.city,
      pin_code: this.state.pin_code
    };
    axios
      .post(apiBaseUrl, payload)
      .then(function(response) {
        console.log(response);
        if (response.data.status === "true") {
          alert(response.data.message);
          // Router.push({ path: "/login" });
          //ReactDom.render(<Login />, document.getElementById("root"));
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
