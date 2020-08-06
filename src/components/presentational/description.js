import React, { Component } from "react";
import axios from "axios";
import Productdetail from "./productdetails";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

class Description extends Component {
  state = {
    product: [],
    price: "",
    isLoaded: false,
    params: ""
  };

  async componentDidMount() {
    const {
      match: { params }
    } = this.props;
    this.setState({ params: params.product_id });
    const url = `https://canopus-api.herokuapp.com/api/getproduct/productdescription/${
      params.product_id
    }`;
    const { data } = await axios.get(url);
    console.log("????data :: ", data);
    this.setState({
      product: data.product.product_id,
      price: data.price,
      isLoaded: true
    });
  }

  render() {
    var { isLoaded, product } = this.state;
    if (!isLoaded) {
      return <div>Loading....</div>;
    } else {
      return (
        <div>
          <ToastContainer />
          <Productdetail
            text={this.state.product.product_name}
            detail={this.state.product.description}
            price={this.state.price}
            prodId={this.state.params}
            cId="5ccc1553e935870004aac8ae"
          />
        </div>
      );
    }
  }
}
export default Description;
