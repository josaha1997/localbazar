import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
//import ReactDOM from "react-dom";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import history from "./history";
import InputLabel from "@material-ui/core/InputLabel";

const StyledButton = withStyles({
  root: {
    background: "#f9e79f",
    borderRadius: 3,
    border: 0,
    color: "#EF6C00",
    height: 40,
    padding: "0 20px",
    boxShadow: "0 3px 5px 2px grey",
    "&:hover": {
      background: "#FFA726",
      color: "black"
    }
  },

  label: {
    textTransform: "capitalize",
    paddingLeft: 5
  }
})(Button);
const theme = createMuiTheme({
  typography: {
    useNextVariants: true
  },
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

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product_file: "",
      formValid: false
    };
  }

  render() {
    return (
      <div align="center">
        <MuiThemeProvider theme={theme}>
          <Paper className="Paper1" elevation={1}>
            <Paper className="Header" elevation={0}>
              <text>Add Product List</text>
            </Paper>
            <br />
            <br />
            <br />

            <InputLabel>Download predefined Product List</InputLabel>
            <br />
            <StyledButton
              disabled={this.state.formValid}
              onClick={event => this.handleDownload(event)}
            >
              Download
            </StyledButton>

            <br />
            <br />
            <InputLabel htmlFor="product_file">
              Upload your Product List
            </InputLabel>
            <br />
            <div style={{ overflowX: "auto" }}>
              <StyledButton>
                <input
                  name="product_file"
                  type="file"
                  accept=".xls,.xlsx"
                  onChange={event => this.handleChoose(event)}
                />
              </StyledButton>
            </div>
            <br />
            <br />
            <StyledButton
              disabled={!this.state.formValid}
              onClick={event => this.handleUpload(event)}
            >
              Upload
            </StyledButton>
            <br />
            <br />
          </Paper>
        </MuiThemeProvider>
      </div>
    );
  }

  handleChoose(e) {
    const name = e.target.name;
    const value = e.target.value;
    this.setState({ product_file: e.target.files[0] }, () => {
      this.validateField(name, value);
    });
  }

  validateField(fieldName, value) {
    let formValid = this.state.formValid;
    switch (fieldName) {
      case "product_file":
        if (value) {
          console.log(this.state.product_file);
          formValid = true;
        }
        break;
      default:
        break;
    }
    this.setState({
      formValid: formValid
    });
  }
  handleDownload(event) {
    const FileDownload = require("js-file-download");

    axios
      .get(`https://canopus-api.herokuapp.com/api/addproduct/download`, {
        responseType: "arraybuffer"
      })
      .then(response => {
        FileDownload(response.data, "ProductList.xlsx");
      });
  }
  handleUpload(event) {
    event.preventDefault(); // Stop form submit
    this.fileUpload(this.state.product_file);
  }
  fileUpload(file) {
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/addproduct/upload";
    var data = new FormData();
    data.append("file", file);
    localStorage.getItem("id");
    data.append("email_id", localStorage.getItem("id"));
    var config = {
      headers: {
        "content-type": "multipart/form-data"
      },
      onUploadProgress: function(progressEvent) {
        Math.round((progressEvent.loaded * 100) / progressEvent.total);
      }
    };
    return axios
      .post(apiBaseUrl, data, config)
      .then(function(response) {
        if (response.data.status === "true") {
          alert("file uploaded");
          history.push("/listproduct");
        } else {
          alert("File not uploaded");
        }
        console.log(response);
      })
      .catch(function(err) {
        alert(err.message);
      });
  }
}

export default AddProduct;
