import { useContext, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

import { RestaurantsContext } from "../../contexts/RestaurantsContext";

import "./index.css";

export function RestaurantDetails() {
    const { getRestaurantById, addRating, getAverageRating } =
        useContext(RestaurantsContext);

    const { restaurantId } = useParams();

    const restaurant = getRestaurantById(Number(restaurantId));

    const [user, setUser] = useState({
        revName: "Tom",
        pp: "https://res.cloudinary.com/dt6nk7xus/image/upload/v1688355215/v-connect/default-avatars/avatar-svgrepo-com_2_p0h10c.svg",
        rating: "",
        comment: "",
    });

    const [showReviewModal, setShowReviewModal] = useState(false);

    return (
        <div className="container">
            <div className="restaurant-header">
                <Link to="/" className="restaurant-header__link">
                    Go Home
                </Link>
                <h1>{restaurant.name}</h1>
            </div>
            <div className="restaurant-details-container">
                <div className="restaurant-details">
                    <div className="restaurant-details__dishes">
                        {restaurant.menu.map((dish, index) => (
                            <span className="restaurant-details__dish">
                                {dish.name}
                                {index === restaurant.menu.length - 1
                                    ? ""
                                    : ", "}
                            </span>
                        ))}
                    </div>
                    <span className="restaurant-details__address">
                        {restaurant.address}
                    </span>
                    <div className="restaurant-details__ avg-rating">
                        Average Rating: {getAverageRating(restaurant)}
                    </div>
                </div>
                <div className="add-review-btn">
                    <button
                        onClick={() => setShowReviewModal(true)}
                        className="button button--secondary"
                    >
                        Add a review
                    </button>
                </div>
            </div>
            <div
                className="modal"
                style={{ display: showReviewModal ? "block" : "none" }}
            >
                <div className="modal__content">
                    <span>Add Your Review</span>
                    <form
                        className="form"
                        onSubmit={(event) => {
                            event.preventDefault();

                            addRating(user, restaurant);

                            setUser((user) => ({
                                ...user,
                                comment: "",
                                rating: "",
                            }));

                            setShowReviewModal(false);
                        }}
                    >
                        <div className="form__field">
                            <label htmlFor="rating">Rating</label>
                            <select
                                required
                                onChange={(event) => {
                                    setUser((user) => ({
                                        ...user,
                                        rating: event.target.value,
                                    }));
                                }}
                            >
                                <option>Select Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                        <div className="form__field">
                            <label htmlFor="comment">Comment</label>
                            <input
                                required
                                value={user.comment}
                                onChange={(event) => {
                                    setUser((user) => ({
                                        ...user,
                                        comment: event.target.value,
                                    }));
                                }}
                                type="text"
                                name="comment"
                            />
                        </div>
                        <div className="form__buttons">
                            <button
                                className="form__button button button--secondary"
                                type="button"
                                onClick={() => {
                                    setShowReviewModal(false);
                                    setUser((user) => ({
                                        ...user,
                                        comment: "",
                                        rating: "",
                                    }));
                                }}
                            >
                                Cancel
                            </button>
                            <button
                                className="form__button button button--primary"
                                type="submit"
                            >
                                Add
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="ratings">
                <h2 className="ratings__heading">Reviews</h2>
                {restaurant.ratings.map((rating) => {
                    return (
                        <div className="rating">
                            <div className="rating__data">
                                <div className="rating__pp-name">
                                    <img
                                        className="rating__pp"
                                        src={rating.pp}
                                    />
                                    <span className="rating__name">
                                        {rating.revName}
                                    </span>
                                </div>
                                <span className="rating__comment">
                                    {rating.comment}
                                </span>
                            </div>
                            <div className="rating__stars">{rating.rating}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
