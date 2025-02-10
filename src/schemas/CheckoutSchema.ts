import * as yup from "yup";

export interface CheckoutFormData {
  cardNumber: string;
  expirationDate: string;
  cvv: string;
  installments: number
}

export const CheckoutSchema = yup.object().shape({
  cardNumber: yup.string().length(16, "Número do cartão inválido").required(),
  expirationDate: yup.string().required("Data de validade é obrigatória"),
  cvv: yup.string().length(3, "CVV inválido").required(),
  installments: yup.number().min(1, "O número de parcelas deve ser pelo menos 1").max(12, "O número de parcelas não pode ser mais que 12").required("O número de parcelas é obrigatório")
});
