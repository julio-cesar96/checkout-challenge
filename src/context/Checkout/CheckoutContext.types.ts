import { CartItem } from "../../types/CartItems.types";

export type { CartItem };

export interface CustomerInfo {
    firstName: string;
    lastName: string;
    document: {
      type: string;
      number: string;
    };
    address: {
      city: string;
      street: string;
      number: string;
      country: string;
      state: string;
      neighborhood: string;
    };
  }

  export interface PaymentInfo {
    type: "card";
    card: {
      holderName: string;
      firstDigits: string;
      lastDigits: string;
      expirationDate: string;
      installments: number;
    };
  }

  export interface CheckoutContextProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
    
    customerInfo: CustomerInfo | null;
    setCustomerInfo: (info: CustomerInfo) => void;
  
    paymentInfo: PaymentInfo | null;
    setPaymentInfo: (info: PaymentInfo) => void;
  
    isCheckoutValid: boolean;
  }