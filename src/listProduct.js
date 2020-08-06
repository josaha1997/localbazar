import React from "react";
import axios from "axios";
import "./Login.css";
import ReactDOM from "react-dom";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
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

class ListProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      product_list: [],
      loading: "true"
    };
  }
  /* componentDidMount() {
    axios
      .get("https://canopus-api.herokuapp.com/api/listbusiness")
      .then(response => {
        console.log(response.data.shop_list);
        this.setState({ shop_list: response.data.shop_list, loading: "false" });
        const obj = JSON.stringify(response.data.shop_list.shopkeeper_id);
        console.log(JSON.parse(obj));
        console.log(this.state.shop_list);
      })
      .catch(function(error) {
        console.log(error);
      });
  }*/

  componentDidMount() {
    var self = this;
    var apiBaseUrl = `https://canopus-api.herokuapp.com/api/getproduct/list/${localStorage.getItem(
      "email_id"
    )}`;
    axios.get(apiBaseUrl).then(function(response) {
      console.log(response);
      self.setState({ product_list: response.data.products });
      console.log(response.data.products);
    });
  }
  /* renderList() {
    if (true) {
      return (
        this.state.shop_list &&
        this.state.shop_list.map(data => {
          if (true) {
            return (
              data.shopkeeper_id &&
              data.shopkeeper_id.map(data1 => {
                return (
                  <div>
                    <StyledTableCell>
                      {data1.first_name} {data1.last_name}
                    </StyledTableCell>
                    <StyledTableCell>{data1.mobile_number}</StyledTableCell>
                  </div>
                );
              })
            );
          }
        })
      );
    }
  }*/
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
                    <StyledTableCell>Product Name</StyledTableCell>
                    <StyledTableCell>Price</StyledTableCell>
                    <StyledTableCell>Is Available?</StyledTableCell>
                    <StyledTableCell>Is Packed?</StyledTableCell>
                  </TableRow>
                </TableHead>

                {this.state.product_list &&
                  this.state.product_list.map(element => {
                    return (
                      <TableRow style={{ fontSize: 14 }}>
                        <StyledTableCell>
                          {element.product_id.product_name}
                        </StyledTableCell>
                        <StyledTableCell>{element.price}</StyledTableCell>
                        <StyledTableCell>
                          {String(element.is_available)}
                        </StyledTableCell>
                        <StyledTableCell>
                          {String(element.is_packed)}
                        </StyledTableCell>
                      </TableRow>
                    );
                  })}
              </Table>
            </Paper>
          </MuiThemeProvider>
        </div>
      );
    }
  }
}

export default ListProduct;
