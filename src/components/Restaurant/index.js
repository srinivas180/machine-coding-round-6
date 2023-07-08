import { Link } from "react-router-dom";
import { DishCard } from "../../components/DishCard";

import "./index.css";

export function Restaurant({ restaurant }) {
    return (
        <div className="restaurant">
            <div className="restaurant__title">
                <h2>{restaurant.name}</h2>
            </div>
            <div className="dishes">
                {restaurant.menu.map((dish) => (
                    <Link to={`/restaurantDetails/${restaurant.id}`}>
                        <DishCard dish={dish} />
                    </Link>
                ))}
            </div>
        </div>
    );
}
