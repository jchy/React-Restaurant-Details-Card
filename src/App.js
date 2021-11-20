import React from "react";
import "./App.css";
import data from "./data.json";
import RestaurantDetails from "./components/RestaurantDetails";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterRating: 0,
      paymentMethod: "all",
      sortMethod: null
      // show res which are greater than filterRating
    };
  }
  handleRating = (rating) => {
    this.setState({
      filterRating: rating
    });
  };
  handlePayment = (payment) => {
    this.setState({
      paymentMethod: payment
    });
  };

  handleSort = (order) => {
    this.setState({
      sortMethod: order
    });
  };
  render() {
    const { filterRating, paymentMethod, sortMethod } = this.state;
    return (
      <div className="App">
        <h1 className="header">Restaurant - Details</h1>
        <div className="feature-btns">
          <h2>Filter Content By -</h2>
        <div>
         <span className="btn-bold"> Ratings :</span>
          {[4, 3, 2, 1, 0].map((rating) => (
            <button key={rating} onClick={() => this.handleRating(rating)} className="rating-btn">
              {rating === 0 ? "All" : rating}
            </button>
          ))}
        </div>
        <div>
        <span className="btn-bold"> Payment methods : </span> 
          {["all", "card", "cash"].map((method) => (
            <button key={method} onClick={() => this.handlePayment(method)} className="payment-btn">
              {method}
            </button>
          ))}
        </div>
        <div>
        <span className="btn-bold">  Cost : </span> 
          {["asc", "desc"].map((order) => (
            <button key={order} onClick={() => this.handleSort(order)} className="payment-btn">
              {order} 
            </button>
          ))}
        </div>
        </div>
        {/* <img src="https://i.imgur.com/lMeVwr7.png" alt="img" /> */}
        {data
          .filter(({ rating, payment_methods }) => {
            const { cash, card } = payment_methods;
            let paymentCondition = true;
            if (paymentMethod === "cash") {
              paymentCondition = cash ? true : false;
            } else if (paymentMethod === "card") {
              paymentCondition = card ? true : false;
            }
            return rating >= filterRating && paymentCondition;
          })
          .sort((a, b) => {
            if (sortMethod === null) {
              return 0;
            }
            if (sortMethod === "asc") {
              return a.costForTwo - b.costForTwo;
            }
            if (sortMethod === "desc") {
              return b.costForTwo - a.costForTwo;
            }
          })
          .map((item) => (
            <RestaurantDetails data={item} key={item.id} />
          ))}
      </div>
    );
  }
}
