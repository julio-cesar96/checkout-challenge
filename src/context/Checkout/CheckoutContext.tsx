import { createContext, useState, ReactNode, useMemo } from "react";
import { CheckoutContextProps, CustomerInfoProps, PaymentInfo } from "./CheckoutContext.types";
import { CartItem } from "./CheckoutContext.types";


const CheckoutContext = createContext<CheckoutContextProps | undefined>(undefined);


const CheckoutProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [customerInfo, setCustomerInfo] = useState<CustomerInfoProps | null>(null);
  const [paymentInfo, setPaymentInfo] = useState<PaymentInfo | null>(null);

  const isCheckoutValid = useMemo(() => {
    if (!customerInfo || !paymentInfo || cartItems.length === 0) return false;

    const { firstName, lastName, document, address } = customerInfo;
    const { card } = paymentInfo;

    return (
      firstName.trim() !== "" &&
      lastName.trim() !== "" &&
      document.number.trim() !== "" &&
      address.city.trim() !== "" &&
      address.street.trim() !== "" &&
      address.state.trim() !== "" &&
      address.country.trim() !== "" &&
      card.firstDigits.length === 4 &&
      card.lastDigits.length === 4 &&
      card.expirationDate.trim() !== "" &&
      card.installments > 0
    );
  }, [customerInfo, paymentInfo, cartItems]);

  return (
    <CheckoutContext.Provider value={{ cartItems, setCartItems, customerInfo, setCustomerInfo, paymentInfo, setPaymentInfo, isCheckoutValid }}>
      {children}
    </CheckoutContext.Provider>
  );
};

export { CheckoutProvider, CheckoutContext };
