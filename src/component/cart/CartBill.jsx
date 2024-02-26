
import { useContext } from "react";
import { DataContext } from "../../context";
import { totalCartProductAmount, totalProducts } from "../../utils/helper";

export default function CartBill({charge,setCharge}) {
  const {state,grandTotal,setGrandTotal} = useContext(DataContext)
  const subTotal = totalCartProductAmount(state?.cartData)
  const tax = subTotal * 1.5 / 100
  if(state?.cartData?.length>0){
    setGrandTotal((subTotal+tax+charge?.discount)-charge?.discount)
  }else{
    setGrandTotal(0)
  }
  return (
    <>
     <div className="w-full lg:w-6/12 lg:float-end my-4">
      <div
        className="flex items-center justify-between border-t border-primary pt-1"
      >
        <p className="text-primary text-sm">Subtotal</p>
        <p className="font-semibold text-balck">{subTotal}$</p>
      </div>
      <div
        className="flex items-center justify-between border-t border-primary pt-1"
      >
        <p className="text-primary text-sm">Tax</p>
        <p className="font-semibold text-balck">{tax.toFixed(2)}$</p>
      </div>
      <div
        className="flex items-center justify-between border-t border-primary pt-1"
      >
        <p className="text-primary text-sm">Shipping</p>
        <div>
        <input  type="number" className="w-10 border border-borderColor" min={0} value={charge?.shipping} onChange={(e)=>setCharge((c)=>({...c,shipping:e.target.value}))} /> <span>$</span>
        </div>
      </div>
      <div
        className="flex items-center justify-between border-t border-primary pt-1"
      >
        <p className="text-info text-sm font-semibold">Discount on cart</p>
        <p className="font-semibold text-balck">{charge?.discount}$</p>
      </div>
    </div>

   
    <div
      className="w-full bg-info bg-opacity-15 py-3 px-4 flex items-start justify-between mt-2 rounded-md"
    >
      <p className="text-info text-sm">Products count({totalProducts(state?.cartData)})</p>
      <h2 className="text-info text-xl font-bold">Total</h2>
      <h2 className="text-info text-xl font-bold">{grandTotal.toFixed(2)}$</h2>
    </div>
    </>
  )
}
