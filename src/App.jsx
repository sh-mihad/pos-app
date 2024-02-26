import { useReducer, useState } from "react";
import Payment from "./component/PaymentModal";
import Cart from "./component/cart";
import Products from "./component/products";
import { DataContext } from "./context";
import { productsData } from "./data/product";
import { cartReducer, initialState } from "./reducer/cartReducer";

export default function App() {
  const [isPaymentSectionShow, setPaymentSectionShow] = useState(false);
  const [grandTotal, setGrandTotal] = useState(0);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const [products, setProducts] = useState(productsData);
  return (
    <DataContext.Provider
      value={{
        products,
        setProducts,
        state,
        dispatch,
        setPaymentSectionShow,
        grandTotal,
        setGrandTotal,
      }}
    >
      <div className="block lg:flex max-w-screen-2xl mx-auto">
        <Cart />
        {isPaymentSectionShow ? (
          <Payment onHide={() => setPaymentSectionShow(false)}/>
        ) : (
          <Products />
        )}
      </div>
    </DataContext.Provider>
  );
}
