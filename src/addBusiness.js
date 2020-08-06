import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Login.css";
//import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import Grid from "@material-ui/core/Grid";

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
const StyledSelect = withStyles({
  root: {
    minWidth: 200
  }
})(Select);

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
class AddBusiness extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email_id: "",
      mobile_number: "",
      phone_number: "",
      business_name: "",
      business_type: "Product",
      business_category: "",
      address_line_1: "",
      address_line_2: "",
      city: "Pune",
      state: "Maharashtra",
      country: "India",
      pin_code: "",
      pin_codeError: "*Select a pin code*",
      address_line_1Error: "*Please Enter shop address*",
      email_idError: "*Enter  valid e-mail id*",
      mobile_numberError: "*Enter valid mobile number*",
      phone_numberError: "*Enter shop's valid phone number*",
      business_categoryError: "*Eg.Grocery,Electronics,etc*",
      business_nameError: "*Enter your business name*",
      business_nameValid: false,
      business_categoryValid: false,
      phone_numberValid: false,
      address_line_1Valid: false,
      email_idValid: false,
      mobile_numberValid: false,
      pin_codeValid: false,
      formValid: false
    };
  }

  render() {
    return (
      <div align="center">
        <MuiThemeProvider theme={theme}>
          <Grid item xs={6}>
            <Paper className="Paper4">
              <Paper className="Header" elevation={24}>
                <text>Add Business and Shopkeeper</text>
              </Paper>
              <br />
              <div
                style={{ display: "block", width: "90%", overflowX: "auto" }}
              >
                <Table>
                  <TableBody>
                    <TableRow className="table">
                      <TableCell
                        style={{
                          width: "50%",
                          background: "black"
                        }}
                      >
                        <h7
                          style={{
                            color: "#EF6C00"
                          }}
                        >
                          Business Details
                        </h7>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <InputLabel htmlFor="business_type">
                          Business Type
                        </InputLabel>
                        <StyledSelect
                          inputProps={{
                            name: "business_type",
                            id: "business_type"
                          }}
                          value={this.state.business_type}
                          onChange={event => this.handleUserInput(event)}
                        >
                          <MenuItem value={"Product"}>Product</MenuItem>
                        </StyledSelect>
                        <br />
                        <br />
                        <TextField
                          name="business_name"
                          type="text"
                          label="Business Name"
                          value={this.state.business_name}
                          onChange={event => this.handleUserInput(event)}
                        />
                        <br />
                        <error>{this.state.business_nameError}</error>
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
                      </TableCell>
                      <TableCell>
                        <br />
                        <br />
                        <br />
                        <br />
                        <TextField
                          name="business_category"
                          type="text"
                          label="Business Category"
                          value={this.state.business_category}
                          onChange={event => this.handleUserInput(event)}
                        />
                        <br />
                        <error>{this.state.business_categoryError}</error>
                        <br />
                        <TextField
                          name="phone_number"
                          type="integer"
                          label="Business Phone Number"
                          value={this.state.phone_number}
                          onChange={event => this.handleUserInput(event)}
                        />
                        <br />
                        <error>{this.state.phone_numberError}</error>
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
                        <error>{this.state.pin_codeError}</error>
                        <br />
                        <br />
                        <br />
                        <br />
                      </TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell style={{ background: "black" }}>
                        <h7 style={{ color: "#EF6C00" }}>Shopkeeper Details</h7>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>
                        <TextField
                          name="email_id"
                          type="text"
                          label="Email-Id"
                          value={this.state.email_id}
                          onChange={event => this.handleUserInput(event)}
                        />

                        <br />
                        <error>{this.state.email_idError}</error>
                        <br />
                        <br />
                      </TableCell>
                      <TableCell>
                        <TextField
                          name="mobile_number"
                          type="integer"
                          label=" Mobile Number"
                          value={this.state.password}
                          onChange={event => this.handleUserInput(event)}
                        />
                        <br />
                        <error>{this.state.mobile_numberError}</error>
                        <br />
                        <br />
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </div>
            </Paper>
          </Grid>
          <br />
          <StyledButton
            disabled={!this.state.formValid}
            onClick={event => this.handleAddShopkeeper(event)}
          >
            Add
          </StyledButton>
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
    let email_idValid = this.state.email_idValid;
    let mobile_numberValid = this.state.mobile_numberValid;
    let phone_numberValid = this.state.phone_numberValid;
    let business_nameValid = this.state.business_nameValid;
    let business_categoryValid = this.state.business_categoryValid;
    let address_line_1Valid = this.state.address_line_1Valid;
    let pin_codeValid = this.state.pin_codeValid;

    switch (fieldName) {
      case "email_id":
        if (value.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)) {
          email_idValid = true;
          this.setState({ email_idError: "" });
        } else this.setState({ email_idError: "Invalid Email_Id!" });
        break;
      case "mobile_number":
        if (value.length == 10 && value.match(/^[0-9]+$/)) {
          mobile_numberValid = true;
          this.setState({ mobile_numberError: "" });
        } else this.setState({ mobile_numberError: "Invalid Mobile Number!" });
        break;
      case "phone_number":
        if (
          value.length <= 10 &&
          value.length >= 6 &&
          value.match(/^[0-9]+$/)
        ) {
          phone_numberValid = true;
          this.setState({ phone_numberError: "" });
        } else this.setState({ phone_numberError: "Invalid Phone Number!" });
        break;
      case "business_name":
        if (value.length > 0 && value.match(/^[a-z A-Z 0-9]+$/)) {
          business_nameValid = true;
          this.setState({ business_nameError: "" });
        } else
          this.setState({
            business_nameError: "Business Name can't be empty!"
          });
        break;
      case "business_category":
        if (value.length > 0 && value.match(/^[a-z A-Z 0-9]+$/)) {
          business_categoryValid = true;
          this.setState({ business_categoryError: "" });
        } else
          this.setState({
            business_categoryError: "Business Category can't be empty!"
          });
        break;
      case "address_line_1":
        if (value != null && value.match(/^[a-z A-Z 0-9 / -]+$/)) {
          address_line_1Valid = true;
          this.setState({ address_line_1Error: "" });
        } else
          this.setState({
            address_line_1Error: "Address can't be empty!"
          });
        break;
      case "pin_code":
        if (value != null) {
          pin_codeValid = true;
          this.setState({ pin_codeError: "" });
        } else this.setState({ pin_codeError: "Pin code is compulsory!" });
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        email_idValid: email_idValid,
        mobile_numberValid: mobile_numberValid,
        phone_numberValid: phone_numberValid,
        business_categoryValid: business_categoryValid,
        business_nameValid: business_nameValid,
        address_line_1Valid: address_line_1Valid,
        pin_codeValid: pin_codeValid
      },
      this.validateForm
    );
  }

  validateForm() {
    this.setState({
      formValid:
        this.state.email_idValid &&
        this.state.mobile_numberValid &&
        this.state.phone_numberValid &&
        this.state.business_nameValid &&
        this.state.business_categoryValid &&
        this.state.address_line_1Valid &&
        this.state.pin_codeValid
    });
  }

  handleAddShopkeeper(event) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/addbusiness";

    var payload = {
      email_id: this.state.email_id,
      mobile_number: this.state.mobile_number,
      phone_number: this.state.phone_number,
      business_name: this.state.business_name,
      business_type: this.state.business_type,
      business_category_name: this.state.business_category,
      address_line_1: this.state.address_line_1,
      address_line_2: this.state.address_line_2,
      city: this.state.city,
      state: this.state.state,

      pin_code: this.state.pin_code
    };

    axios
      .post(apiBaseUrl, payload)
      .then(function(response) {
        console.log(response);
        console.log(payload);
        if (response.data.status === "true") {
          alert(response.data.message);
        } else if (response.data.status === "false") {
          console.log(response.data.message);
          alert(response.data.message);
        }
      })
      .catch(function(error) {
        console.log(apiBaseUrl);
      });
  }
}

export default AddBusiness;
