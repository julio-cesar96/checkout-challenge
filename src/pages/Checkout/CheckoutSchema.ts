import * as yup from "yup";

export interface CheckoutFormData {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
}

export const CheckoutSchema = yup.object().shape({
  cardNumber: yup.string().length(16, "Número do cartão inválido").required(),
  expirationDate: yup.string().required("Data de validade é obrigatória"),
  cvv: yup.string().length(3, "CVV inválido").required(),
});
