import "./index.css";

export function DishCard({ dish }) {
    return (
        <div className="dish">
            <img className="dish__image" src={dish.imgSrc} alt={dish.name} />
            <span className="dish__price">
                Rs.{dish.price} for {dish.qty}
            </span>
        </div>
    );
}
