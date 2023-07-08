import { createContext, useState } from "react";

import { cuisineData } from "../db/data";

export const CuisinesContext = createContext();

export function CuisinesProvider({ children }) {
    const [cuisines, setCuisines] = useState(cuisineData);

    return (
        <CuisinesContext.Provider value={{ cuisines }}>
            {children}
        </CuisinesContext.Provider>
    );
}
