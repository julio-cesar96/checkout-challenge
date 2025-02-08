import React from "react";
import { Box, Button, Input, VStack } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    cardNumber: yup.string().length(16, "Número do cartão inválido").required(),
    expirationDate: yup.string().required("Data de validade é obrigatória"),
    cvv: yup.string().length(3, "CVV inválido").required(),
});

const CheckoutPage = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });

    const onSubmit = (data: any) => {
        console.log("Pagamento realizado", data);
    }

    return (
        <Box p={4}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <VStack p={4}>
              <Input placeholder="Número do cartão" {...register("cardNumber")} />
              <Input placeholder="Data de validade (MM/YY)" {...register("expirationDate")} />
              <Input placeholder="CVV" {...register("cvv")} />
              <Button type="submit" colorScheme="blue">
                Finalizar Compra
              </Button>
            </VStack>
          </form>
        </Box>
      );
}

export default CheckoutPage;