import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import { toast } from "react-toastify";
import axios from "axios";

const styles = theme => ({
  card: {
    display: "flex"
  },
  details: {
    display: "inline-flex",
    flexDirection: "column"
  },
  content: {
    flex: "1 0 auto"
  },
  cover: {
    width: 151
  },
  controls: {
    display: "flex",
    alignItems: "center",
    paddingLeft: theme.spacing.unit,
    paddingBottom: theme.spacing.unit
  },
  playIcon: {
    height: 38,
    width: 38
  },
  root: {
    width: "50%",
    maxWidth: 100
  }
});

function typographyV1Theme(theme) {
  return createMuiTheme({
    ...theme,
    typography: {
      useNextVariants: false
    },
    palette: {
      primary: {
        main: "#ffc107"
      }
    }
  });
}

class Productdetail extends Component {
  onHandle = async () => {
    const url = "https://canopus-api.herokuapp.com/api/cart/addtocart";
    const payload = {
      product_id: this.props.prodId,
      customer_id: this.props.cId
    };
    const rep = await axios.post(url, payload);
    console.log("Res :: ", rep);
    if (rep.data.status === true) {
      toast.info("Product added to cart");
    } else {
      toast.error("Something went wrong...");
    }

    // alert("Hellooo");
    //console.log("vsgdh");
  };

  render() {
    console.log("props :: ", this.props);

    const { classes } = this.props;
    return (
      <Card borderColor="primary" className={Card.classes}>
        <MuiThemeProvider theme={typographyV1Theme}>
          <CardMedia>
            <img src="C:/Users/JAZZ/poc/canopus/src/components/presentational/1.jpg" />
          </CardMedia>
          <div className={Card.details}>
            <CardContent className={Card.content}>
              <Typography variant="h6" color="primary" gutterBottom>
                <h3>{this.props.text} </h3>
              </Typography>

              <CardContent>
                <h2>{this.props.text}</h2>

                <h4>Price: {this.props.price} ₹</h4>
                <h4>{this.props.detail}</h4>
              </CardContent>

              <CardContent>
                <Typography component="p" align="left" variant="h6">
                  {/* <Increment/> */}
                </Typography>
                <button onClick={this.onHandle}>ADD TO CART</button>
              </CardContent>
            </CardContent>
          </div>
        </MuiThemeProvider>
      </Card>
    );
  }
}

Productdetail.propTypes = {
  classes: PropTypes.object.isRequired
  //theme: PropTypes.object.isRequired,
};

export default withStyles(styles)(Productdetail);
