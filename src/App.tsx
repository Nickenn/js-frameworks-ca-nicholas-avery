import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import Checkout from "./pages/Checkout";
import PageNotFound from "./pages/PageNotFound";
import CheckoutSuccess from "./pages/CheckoutSuccess";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="contact" element={<Contact />} />
            <Route path="product/:id" element={<Product />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="checkout/success" element={<CheckoutSuccess />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ShoppingCartProvider>
  );
}
export default App;
