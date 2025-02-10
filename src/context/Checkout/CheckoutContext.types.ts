import { CartItem } from "../../types/CartItems.types";

export type { CartItem };

export interface CustomerInfoProps {
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
    type: string;
    card: {
      firstDigits: string;
      lastDigits: string;
      expirationDate: string;
      installments: number;
    };
  }

  export interface CheckoutContextProps {
    cartItems: CartItem[];
    setCartItems: (items: CartItem[]) => void;
    
    customerInfo: CustomerInfoProps | null;
    setCustomerInfo: React.Dispatch<React.SetStateAction<CustomerInfoProps | null>>;
  
    paymentInfo: PaymentInfo | null;
    setPaymentInfo: React.Dispatch<React.SetStateAction<PaymentInfo | null>>;
  
    isCheckoutValid: boolean;
  }