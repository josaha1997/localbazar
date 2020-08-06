import RecipeReviewCard from "./Card";
import axios from "axios";
import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import history from "C:/Users/JAZZ/poc/canopus/src/history";
const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    width: 200,
    height: 300
  },
  control: {
    padding: theme.spacing.unit * 2
  }
});
class Home extends React.Component {
  state = {
    products: []
  };
  componentDidMount() {
    const self = this;
    axios
      .get("https://canopus-api.herokuapp.com/api/getproduct/random")
      .then(function(response) {
        self.setState({ products: response.data.product_name });
        console.log(response);
      });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <div>
          <img src="img\3.jpg" height="400px" width="100%" />
        </div>
        <div style={{ height: "60px" }} />
        <Grid container spacing={24}>
          <Grid container justify="center" spacing={16}>
            {this.state.products &&
              this.state.products.map(data => (
                <Grid key={data._id} item xs={2}>
                  {data.is_available == true && (
                    <RecipeReviewCard
                      className={classes.paper}
                      productname={data.product_id.product_name}
                      price={data.price}
                      value={data._id}
                      shopname={data.business_id.business_name}
                    />
                  )}
                </Grid>
              ))}
          </Grid>
        </Grid>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
