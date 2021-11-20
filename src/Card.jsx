const Card = () => { 
    return <>
        <div className="container">
                {
                   Data.map((dish)=>{
                        return <>
                    <div className="card-div">
                        <div className="card-Details">
                            <div className="img-div">
                                    <img src={dish.imgUrl} alt="img" className="dish-img"/>
                            </div>
                            <div className="card-data">
                                   <h2>{dish.dishName}</h2>
                                   <p className="text-color">Continental, {dish.dishName}, {dish.continent}, {dish.category}</p>
                                   <p className="text-color">Cost ₹{dish.cost} for one</p>
                                   <p>Min ₹{dish.minCost} ● Up to {dish.deliveryTime} min</p>
                                   <p>{dish.cardPaymentMethod ? "Accepts online payments only" : "Accepts Cash on Delivery only"}</p>
                            </div>
                            <div className="rating-div">
                                <p className="rating">{dish.rating}</p>
                                <p className="text-color">{dish.votes} votes</p>
                                <p className="text-color">{dish.reviews} reviews</p>
                            </div>
                        </div>
                        <div className="order-mode">
                            <button className="order-btn">Order Online ➤</button>
                        </div>
                    </div>
                        </>
                   })
                }
        </div>
    </>
}
export default Card;