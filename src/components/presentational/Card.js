import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButtons from "./cartbutton";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CardActionArea } from "@material-ui/core";
import history from "C:/Users/JAZZ/poc/canopus/src/history";
const styles = theme => ({
  media: {
    height: 0,
    paddingTop: "56.25%" // 16:9
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  },
  card: {
    display: "block"
  }
});

class RecipeReviewCard extends React.Component {
  state = { expanded: false };

  render() {
    const { classes } = this.props;

    return (
      <Card className={classes.card}>
        <CardHeader
          avatar={
            <Avatar aria-label="Product" className={classes.avatar}>
              P
            </Avatar>
          }
          /*  action={
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          }*/
          title={this.props.shopname}

          //subheader="September 14, 2016"
        />
        <CardActionArea onClick={this.handleClick}>
          <CardMedia className={classes.media} image="img/1.jpg" />
          <CardContent>
            <Typography component="p" variant="h7">
              <div style={{ height: "50px", display: "flex" }}>
                {this.props.productname}
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className={classes.actions} disableActionSpacing>
          <IconButton className={classes.menuButton} aria-label="add_to_cart">
            <AddShoppingCartIcon align="right" />
          </IconButton>
          <CardContent>
            <Typography component="p" align="left" variant="h7">
              Price:
              {this.props.price}
            </Typography>
          </CardContent>
        </CardActions>
      </Card>
    );
  }
  handleClick = () => {
    history.push(`/productdescription/${this.props.value}`);
  };
}

RecipeReviewCard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RecipeReviewCard);
