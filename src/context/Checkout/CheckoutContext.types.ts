import { CartItem } from "../../types/CartItems.types";

export type { CartItem };

export interface CheckoutContextProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
}