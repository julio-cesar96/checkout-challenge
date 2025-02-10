import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItems from "./CartItems";
import { CartItem } from "../../types/CartItems.types";

describe("CartItems Component", () => {
  it("deve renderizar corretamente os itens do carrinho", () => {
    const mockItems: CartItem[] = [
      { id: 1, name: "Produto A", quantity: 2, amount: 50.0 },
      { id: 2, name: "Produto B", quantity: 1, amount: 30.0 },
    ];

    render(<CartItems items={mockItems} />);

    // Verifica o título do componente
    expect(screen.getByText("Itens do Carrinho")).toBeInTheDocument();

    // Verifica se os itens foram renderizados corretamente
    expect(screen.getByText("Produto A")).toBeInTheDocument();
    expect(screen.getByText("Quantidade: 2")).toBeInTheDocument();
    expect(screen.getByText("Preço: R$50.00")).toBeInTheDocument();

    expect(screen.getByText("Produto B")).toBeInTheDocument();
    expect(screen.getByText("Quantidade: 1")).toBeInTheDocument();
    expect(screen.getByText("Preço: R$30.00")).toBeInTheDocument();
  });

  it("deve exibir uma mensagem quando não houver itens no carrinho", () => {
    render(<CartItems items={[]} />);
    expect(screen.getByText("Itens do Carrinho")).toBeInTheDocument();
  });
});
