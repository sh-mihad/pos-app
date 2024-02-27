import { useContext, useState } from "react"
import { toast } from "react-toastify"
import cashPayImg from "../../assets/svg/cash-pay.svg"
import crossImg from "../../assets/svg/cross-circle.svg"
import discountImg from "../../assets/svg/discount-promo-ecommerce-svgrepo-com.svg"
import holdHandImg from "../../assets/svg/hold-hand.svg"
import { DataContext } from "../../context"
import DiscountModal from "./DiscountModal"

export default function CartFooter({charge,setCharge}) {
  const{state,dispatch,grandTotal,setPaymentSectionShow} = useContext(DataContext)
  // state for discount modal
  const [showDiscountModal,setShowDiscountModal] = useState(false)
  return (
    <>
    <div className="w-full py-3 flex items-start justify-between rounded-md">
    <button
      className="flex items-center bg-danger bg-opacity-15 hover:bg-opacity-30 py-3 px-4 rounded-md"
      onClick={()=>{
       if(state?.cartData?.length>0){
        dispatch({
          type:"REMOVE_CART_PRODUCT"
        })
        toast.success("Remove All Product From Cart",{position:"bottom-right"})
       }else{
        toast.error("You don't select any products",{position:"bottom-right"})
       }
      }}
    >
      <img
        src={crossImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-danger ml-2 text-xl"> Cancel</span>
    </button>
    <button
      className="flex items-center bg-info bg-opacity-15 py-3 px-4 rounded-md"
    >
      <img
        src={holdHandImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-info ml-2 text-xl"> Hold</span>
    </button>
    <button
      className="flex items-center bg-info bg-opacity-15 py-3 px-4 rounded-md hover:bg-info hover:bg-opacity-35"
      onClick={()=>{
        if(state?.cartData?.length>0){
          setShowDiscountModal(true)
        }else{
          toast.error("Add Product first then give discount")
        }
      }}
    >
      <img
        src={discountImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-info ml-2 text-xl "> Discount</span>
    </button>
    <button
      className="flex items-center bg-info bg-opacity-15 py-3 px-4 rounded-md hover:bg-info hover:bg-opacity-35"
      onClick={()=>{
        if(grandTotal>0){
          setPaymentSectionShow(true)
        }else{
          toast.error("Add Minimum One Item")
        }
      }}
    >
      <img
        src={cashPayImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-info ml-2 text-xl"> Pay Now</span>
    </button>
  </div>
   {
    showDiscountModal &&  <DiscountModal charge={charge} setCharge={setCharge}  onHide={()=>setShowDiscountModal(false)}/>
   }
    </>
  )
}
