import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import accountImg from "../assets/svg/account.svg";
import cardImg from "../assets/svg/card.svg";
import cashPayImg from "../assets/svg/cash-pay-svgrepo.svg";
import cashImg from "../assets/svg/cash.svg";
import crossImg from "../assets/svg/cross-circle.svg";
import { DataContext } from "../context";

export default function PaymentModal({ onHide }) {
  const { grandTotal,dispatch } = useContext(DataContext);
  const [paymentMethod] = useState("card")
  const {register,handleSubmit, formState: { errors },} = useForm()
  const onSubmit =()=>{
    toast.success("Your Order Complete ")
    dispatch({
      type:"REMOVE_CART_PRODUCT"
    })
    onHide()
  }
  console.log("errors",errors);
  return (
    <section className="w-full lg:w-[55%] bg-bgPrimary ">
      <div className="m-6 flex items-center justify-between p-4 border border-borderColor rounded-md">
        <p className="font-semibold text-primary ">Order Amount</p>
        <h1 className="font-bold text-2xl">${grandTotal.toFixed(2)}</h1>
      </div>

      <div className="border border-borderColor rounded-md mx-6 my-3 flex justify-between  bg-[#ffff] ">
        <div className="w-3/12 py-5 border-r border-borderColor">
          <button className="flex w-full mt-3 gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <img
              className="block"
              src={cashImg}
              width="23px"
              height="23px"
              alt=""
            />
            <h2 className="text-xl text-primary">Cash</h2>
          </button>
          <button className="flex w-full  gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <img
              className="block"
              src={cardImg}
              width="23px"
              height="23px"
              alt=""
            />
            <h2 className="text-xl text-primary">Card</h2>
          </button>
          <button className={`flex w-full  gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15 ${paymentMethod === "card" && "bg-info bg-opacity-15"}`}>
            <img
              className="block"
              src={accountImg}
              width="23px"
              height="23px"
              alt=""
            />
            <h2 className="text-xl text-primary">On Account</h2>
          </button>
          <button className="flex w-full  gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <img
              className="block"
              src={cardImg}
              width="23px"
              height="23px"
              alt=""
            />
            <h2 className="text-xl text-primary">Cheque</h2>
          </button>
        </div>
        <div className="w-7/12">
          <form onSubmit={handleSubmit(onSubmit)} className="my-5">
            <input
              type="text"
              placeholder="Card Name"
              className={`w-full  focus:outline-none border-b p-1 mt-3 ${errors?.cardName?"border-danger":"border-borderColor"}`}
              {...register("cardName",{
                required:true,
              })}
            />
            {errors?.cardName && <small className="text-danger ita">Card Name is Required</small>}
            <input
              type="text"
              placeholder="Card Number"
              className={`w-full  focus:outline-none border-b p-1 mt-3 ${errors?.cardNumber?"border-danger":"border-borderColor"}`}
              {...register("cardNumber",{
                required:true,
              })}
            />
             {errors?.cardNumber && <small className="text-danger ita">Card Number is Required</small>}
            <input
              type="date"
              className={`w-full  focus:outline-none border-b p-1 mt-3 ${errors?.cardExpireDate?"border-danger":"border-borderColor"}`}
              {...register("cardExpireDate",{
                required:true,
              })}
            />
             {errors?.cardExpireDate && <small className="text-danger ita">Card Expire Date is Required</small>}
           
            <input
              type="text"
              placeholder="Card Secret"
              className={`w-full  focus:outline-none border-b p-1 mt-3 ${errors?.cardSecret?"border-danger":"border-borderColor"}`}
              {...register("cardSecret",{
                required:true,
              })}
            />
             {errors?.cardSecret && <small className="text-danger ita">Card Secret is Required</small>}

             <div className="flex items-center justify-between mt-20 mb-6">
            <button
              className="flex items-center bg-danger bg-opacity-15 py-3 px-4 rounded-md hover:bg-danger hover:bg-opacity-35"
              onClick={() => onHide()}
              type="button"
            >
              <img
                src={crossImg}
                width="25px"
                height="25px"
                alt=""
              />
              <span className="font-semibold text-danger ml-2 text-xl">
                {" "}
                Cancel
              </span>
            </button>
            <button className="flex items-center bg-info py-3 px-4 rounded-md hover:bg-info hover:bg-opacity-35" type="submit">
              <img
                src={cashPayImg}
                width="25px"
                height="25px"
                alt=""
              />
              <span className="font-semibold text-[#ffff] ml-2 text-xl">
                Complete Payment
              </span>
            </button>
          </div>
          </form>
         
        </div>
        <div></div>
      </div>
    </section>
  );
}
