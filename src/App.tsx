import { Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/Checkout/CheckoutPage";
import TransactionsPage from "./pages/Transaction/TransactionsPage";
import TransactionDetailsPage from "./pages/TransactionDetails/TransactionDetailsPage"

function App() {
  return (
    <Routes>
      <Route path="/" element={<CheckoutPage />} />
      <Route path="/transactions" element={<TransactionsPage />} />
      <Route path="/transactions/:id" element={<TransactionDetailsPage />} />
    </Routes>
  );
}

export default App;