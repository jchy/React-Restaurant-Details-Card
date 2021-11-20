import React from "react";

const RestaurantDetails = props => {
  const {
    name,
    cuisine,
    costForTwo,
    minOrder,
    deliveryTime,
    payment_methods: { cash, card },
    rating,
    votes,
    reviews,
    src
  } = props.data;

  return (
    <div style={{ border: "1px solid black",borderRadius: "10px", marginBottom: 10,width: "660px"}} className="card-content-div">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 10
        }}
      >
        <div style={{flex:1}}>
          <img width="180px" height="166px" src={src} alt={name} style={{borderRadius:"5px" ,marginTop:"20px"}} />
        </div>
        <div style={{ textAlign: "left",paddingLeft: 10, flex: 3 }}>
          <h4> {name} </h4>
          <p> {cuisine.join(", ")} </p>
          <p> Cost for two: ₹{costForTwo} </p>
          <p>
            {" "}
            Min: ₹{minOrder} - Upto {deliveryTime} min{" "}
          </p>
          {cash && card ? (
            <p> Accepts : "Cash and Card" </p>
          ) : card ? (
            <p> Accepts : "Card" </p>
          ) : (
            <p> Accepts : "Cash" </p>
          )}
        </div>
        <div style={{ textAlign: "right", flex: 2, marginTop: "20px" }}>
          <div > 
           <span style={{color: "white", backgroundColor: "green", padding:"4px",borderRadius: "5px"}}>
           {rating} 
        </span> 
          </div>
          <div> {votes} votes </div>
          <div> {reviews} reviews</div>
        </div>
      </div>
      <div
        style={{
          borderTop: "1px solid white",
          textAlign: "right",
          padding: 15,
          color: "green"
        }}
      >
        Order Online ➤
      </div>
    </div>
  );
};

export default RestaurantDetails;
