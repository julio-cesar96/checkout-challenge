export interface CartItem {
    id: number;
    name: string;
    quantity: number;
    price: number;
  }

export interface CheckoutContextProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
}