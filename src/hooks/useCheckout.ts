import { useContext } from "react";
import { CheckoutContext } from "../context/Checkout/CheckoutContext";
import { CheckoutContextProps } from "../context/Checkout/CheckoutContext.types";

const useCheckout = (): CheckoutContextProps => {
  const context = useContext(CheckoutContext);
  if (!context) {
    throw new Error("useCheckout must be used within a CheckoutProvider");
  }
  return context;
};

export default useCheckout;
