import { createContext, useState } from "react";

import { cuisineData } from "../db/data";

export const CuisinesContext = createContext();

export function CuisinesProvider({ children }) {
    const [cuisines, setCuisines] = useState(cuisineData);

    const [selectedCuisineId, setSelectedCuisineId] = useState();

    return (
        <CuisinesContext.Provider
            value={{ cuisines, selectedCuisineId, setSelectedCuisineId }}
        >
            {children}
        </CuisinesContext.Provider>
    );
}
