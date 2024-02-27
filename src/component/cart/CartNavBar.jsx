import { useState } from "react"
import addImg from "../../assets/svg/add.svg"
import menubarImg from "../../assets/svg/menubar.svg"
import notesImg from "../../assets/svg/notes.svg"
import resetImg from "../../assets/svg/reset.svg"
import shippingImg from "../../assets/svg/shipping.svg"
import SideMenubar from "../SideMenubar"

export default function CartNavBar() {
// state for sideMenubar
const[isModalShow,setModalShow] =useState(false)
  return (
   <>
   {
    isModalShow && <SideMenubar onHide={()=>setModalShow(false)}/>
   }
    <nav className="flex items-center justify-between mt-3">
    <button className="block ml-3" onClick={()=>setModalShow(true)}>
      <img
        src={menubarImg}
        width="33px"
        height="33px"
        alt=""
      />
    </button>
    <button
      className="flex items-center bg-secondary bg-opacity-15 py-2 px-2 rounded-md"
    >
      <img
        src={notesImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-secondary ml-2"> Note</span>
    </button>
    <button
      className="flex items-center bg-secondary bg-opacity-15 py-2 px-2 rounded-md"
    >
      <img
        src={shippingImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-secondary ml-2"> Shipping</span>
    </button>
    <button
      className="flex items-center bg-secondary bg-opacity-15 py-2 px-2 rounded-md"
    >
      <img
        src={resetImg}
        width="25px"
        height="25px"
        alt=""
      />
      <span className="font-semibold text-secondary ml-2"> Hold Orders</span>
    </button>
    <button
      className="flex items-center bg-secondary bg-opacity-15 py-2 px-2 rounded-md"
    >
      <img src={addImg} width="25px" height="25px" alt="" />
      <span className="font-semibold text-secondary ml-2"> New Items</span>
    </button>
  </nav>
   </>
  )
}
