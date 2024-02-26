import { useContext } from "react"
import { toast } from "react-toastify"
import cashPayImg from "../../assets/svg/cash-pay.svg"
import crossImg from "../../assets/svg/cross-circle.svg"
import discountImg from "../../assets/svg/discount-promo-ecommerce-svgrepo-com.svg"
import holdHandImg from "../../assets/svg/hold-hand.svg"
import { DataContext } from "../../context"

export default function CartFooter() {
  const{grandTotal,setPaymentSectionShow} = useContext(DataContext)
  return (
    <>
    <div className="w-full py-3 flex items-start justify-between rounded-md">
    <button
      className="flex items-center bg-danger bg-opacity-15 py-3 px-4 rounded-md"
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
      className="flex items-center bg-info bg-opacity-15 py-3 px-4 rounded-md"
    >
      <img
        src={discountImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-info ml-2 text-xl"> Discount</span>
    </button>
    <button
      className="flex items-center bg-info bg-opacity-15 py-3 px-4 rounded-md"
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
  
    </>
  )
}
