import { createContext, useState, ReactNode } from "react";
import { CheckoutContextProps } from "./CheckoutContext.types";
import { CartItem } from "./CheckoutContext.types";

// Criar o contexto
const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);

// Provider
const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  return (
    <CheckoutContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutProvider, CheckoutContext };
