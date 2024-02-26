import { useContext } from "react"
import { toast } from "react-toastify"
import trushBinImg from "../../assets/svg/dustbin.svg"
import editImg from "../../assets/svg/edit.svg"
import minusSvg from "../../assets/svg/minus-circle.svg"
import plusImg from "../../assets/svg/plus-circle-svgrepo-com.svg"
import { DataContext } from "../../context"
export default function CartItems({item}) {
  const {dispatch} = useContext(DataContext)
  const {name,orderQty,unitPrice,orderBill,stockQty} = item || {}

  return (
    <div className="mt-2 flex justify-between items-center gap-2 ">
    <img
      className="inline-block"
      src={editImg}
      width="20px"
      height="20px"
      alt=""
    />
    <div
      className="flex items-center justify-between flex-shrink flex-grow border border-primary p-2 rounded-md"
    >
      <p className="font-semibold text-primary ">
        {name}
      </p>
      <p className="font-semibold text-primary">${unitPrice}</p>
      <div className="flex items-center justify-between gap-4">
        <button 
        onClick={()=>{
          // increment button handler
          if(stockQty>orderQty){
            dispatch({
              type :"INCREMENT",
              payload:item
            })
          }else{
            toast.warn("Stock Out")
          }
        }}
        >
          <img
            src={plusImg}
            width="25px"
            height="25px"
            alt=""
          />
        </button>
        <span className="font-semibold text-primary">{orderQty}</span>
        <button
        onClick={()=>{
          // increment button handler
          if(orderQty >1){
            dispatch({
              type :"DECREMENT",
              payload:item
            })
          }else{
            toast.warn("Minimum Add One Data")
          }
        }}
        >
          <img
            src={minusSvg}
            width="25px"
            height="25px"
            alt=""
          />
        </button>
      </div>
      <p className="font-semibold text-primary">${+orderBill.toFixed(2)}</p>
    </div>
    <button
    onClick={()=>{
      // remove button handler
      dispatch({
        type :"REMOVE_FROM_CART",
        payload:item
      })
    }}
    >
      <img
        className="inline-block"
        src={trushBinImg}
        width="25px"
        height="25px"
        alt=""
      />
    </button>
  </div>
  )
}
