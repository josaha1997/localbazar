import React from "react";
import axios from "axios";
import "./Login.css";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

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
const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: "#FFA726",
    color: "white"
  },
  body: {
    fontSize: 12
  }
}))(TableCell);
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#EF6C00"
    }
  }
});

class ListBusiness extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shop_list: [
        {
          business_name: "",
          business_type: "",
          business_category_name: "",
          shopkeeper_id: {
            first_name: "",
            last_name: "",
            mobile_number: ""
          },
          address_line_1: "",
          address_line_2: "",
          city: "",
          state: "",
          pin_code: ""
        }
      ],
      loading: "true"
    };
  }
  componentDidMount() {
    var self = this;
    var apiBaseUrl = "https://canopus-api.herokuapp.com/api/listbusiness";
    var list = this.state.shop_list.slice();
    var i = 0;
    axios.get(apiBaseUrl).then(function(response) {
      console.log(response);
      response.data.shop_list.forEach(element => {
        list[i] = {
          business_type: element.business_type,
          business_category_name: element.business_category_name,
          business_name: element.business_name,
          first_name: element.shopkeeper_id.first_name,
          last_name: element.shopkeeper_id.last_name,
          mobile_number: element.shopkeeper_id.mobile_number,
          address_line_1: element.address_line_1,
          address_line_2: element.address_line_2,
          city: element.city,
          state: element.state,
          pin_code: element.pin_code
        };
        i++;
      });
      list.forEach(element => {
        self.state.shop_list.push(element);
        // self.forceUpdate();
      });
      self.forceUpdate();
      console.log(self.state.shop_list);
    });
  }
  render() {
    if (this.state.loading) {
      return (
        <div align="center">
          <MuiThemeProvider theme={theme}>
            <Paper className="Paper3" elevation={1}>
              <Paper className="Header" elevation={24}>
                <text>List of Businesses and Shopkeepers</text>
              </Paper>
              <br />
              <Table
                style={{
                  width: "90%",
                  alignSelf: "center",
                  background: "#FFFDE7"
                }}
              >
                <TableHead>
                  <TableRow>
                    <StyledTableCell>Business Type</StyledTableCell>
                    <StyledTableCell>Business Category</StyledTableCell>
                    <StyledTableCell>Business Name</StyledTableCell>
                    <StyledTableCell>Business Address</StyledTableCell>
                    <StyledTableCell>Shopkeeper Name</StyledTableCell>
                    <StyledTableCell>Shopkeeper Contact</StyledTableCell>
                  </TableRow>
                </TableHead>

                {this.state.shop_list.map(element => {
                  return (
                    <TableRow style={{ fontSize: 14 }}>
                      <StyledTableCell>{element.business_type}</StyledTableCell>
                      <StyledTableCell>
                        {element.business_category_name}
                      </StyledTableCell>
                      <StyledTableCell>{element.business_name}</StyledTableCell>
                      <StyledTableCell>
                        {element.address_line_1} {element.address_line_2}{" "}
                        {element.city} {element.state} {element.pin_code}
                      </StyledTableCell>

                      <StyledTableCell>
                        {element.first_name} {element.last_name}
                      </StyledTableCell>
                      <StyledTableCell>{element.mobile_number}</StyledTableCell>
                    </TableRow>
                  );
                })}
              </Table>
              <br />
              <Link to="/addproduct">Add Product to Shop</Link>
            </Paper>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default ListBusiness;
