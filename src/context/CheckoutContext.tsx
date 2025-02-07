import { createContext, useState, ReactNode } from "react";
import { CheckoutContextProps } from "../types/CheckoutContext.types";

const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);

export const CheckoutProvider = ({ children}: {children: ReactNode }) => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    return (
        <CheckoutContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CheckoutContext.Provider>
    );
}