import { useContext, useState } from "react";
import { DataContext } from "../../context";
import CartBill from "./CartBill";
import CartFooter from "./CartFooter";
import CartItems from "./CartItems";
import CartNavBar from "./CartNavBar";
import Customer from "./Customer";

export default function Cart() {
  const { state } = useContext(DataContext);
  const[charge,setCharge] = useState({
    discount:10,
    shipping:0
  })
  
  return (
    <section className="w-full lg:w-[45%] px-1 lg:px-3 ">
      <CartNavBar />
      <Customer />
      <div className="max-h-72 min-h-72 overflow-auto">
        {/* cart item mapping */}
        {state?.cartData?.length > 0 &&
          state?.cartData?.map((cItem) => (
            <CartItems key={cItem?.id} item={cItem} />
          ))}
      </div>
      <CartBill charge={charge} setCharge={setCharge}/>
      <CartFooter />
    </section>
  );
}
