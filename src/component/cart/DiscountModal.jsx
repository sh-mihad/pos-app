import { useContext, useState } from "react";
import { toast } from "react-toastify";
import { DataContext } from "../../context";
import { totalCartProductAmount } from "../../utils/helper";

export default function DiscountModal({ charge, setCharge, onHide }) {
  const {state} = useContext(DataContext)
  // state for discount modal form
    const[formData,setFormData] =useState({
        amount:charge?.discount?.amount,
        type : charge?.discount?.type
    })
  // form save handler
    const handleSave = (e)=>{
        e.preventDefault()
        const cartSubTotal = totalCartProductAmount(state?.cartData)
        if((formData?.type === "Percentage" && formData?.amount <= 100) || (formData?.type === "Flat" && formData?.amount<=cartSubTotal)){
          setCharge({...charge,discount:{...charge?.discount,amount:formData?.amount,type:formData?.type}})
        onHide()
        }else{
          toast.warn("No more discount over than subtotal")
        }
    }
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-[#000000]/50 backdrop-blur-sm">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto ">
        <section className="mx-auto w-10/12 lg:w-6/12 bg-[#fff] p-2 lg:p-5 rounded-md">
          <form className="" onSubmit={handleSave}>
            <h1 className="text-lg lg:text-xl font-semibold">Discount</h1>
            <hr className="mt-1 mb-3" />
            <div className="flex items-center">
              <label htmlFor="discountType">Discount Type : </label>
              <select
                className=" bg-bgPrimary focus:outline-none border p-1 my-2 mx-2 border-primary"
                name="currency"
                id=""
                value={formData?.type}
                onChange={(e)=>setFormData({...formData,type:e.target.value})}
              >
                <option className="text-primary" value="Flat">
                  Flat
                </option>
                <option value="Percentage">Percentage</option>
              </select>
              <input
                type="number"
                min={0}
                value={formData?.amount}
                placeholder="taka"
                className="mx-2 py-1 max-w-36 px-2 focus:outline-none border"
                onChange={(e) =>
                  setFormData({...formData,amount:+e.target?.value})
                }
              />
            </div>

            <hr className="my-3" />
            <div className="flex items-center justify-end gap-2">
              <button
                onClick={() => onHide()}
                type="button"
                className="border border-danger px-4 py-1 rounded-sm text-danger hover:bg-danger hover:bg-opacity-20"
              >
                Close
              </button>
              <button
                type="submit"
                className="border border-info px-4 py-1 rounded-sm text-info hover:bg-info hover:bg-opacity-20"
              >
                Save
              </button>
            </div>
          </form>
        </section>
      </div>
    </div>
  );
}
