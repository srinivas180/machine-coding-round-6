import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { RestaurantDetails } from "./pages/RestaurantDetails";

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/restaurantDetails/:restaurantId"
                    element={<RestaurantDetails />}
                />
            </Routes>
        </div>
    );
}

export default App;
