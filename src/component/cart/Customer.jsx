import { useState } from "react"
import avatarImg from "../../assets/svg/avatar.svg"
import plusImg from "../../assets/svg/plus.svg"
import CustomerAddModal from "./CustomerAddModal"

export default function Customer() {
  const [isShowModal,setShowModal] = useState(false)
  return (
   <>
   {
    isShowModal && <CustomerAddModal onHide={()=>setShowModal(false)} />
   }
    <div
      className="bg-secondary bg-opacity-15 py-3 px-4 flex items-start justify-between my-2 rounded-md"
    >
      <div className="flex items-center">
        <img
          src={avatarImg}
          width="25px"
          height="25px"
          alt=""
        />
        <span className="font-semibold text-secondary ml-2">Steve Jobs</span>
      </div>
      <button className="block" onClick={()=>setShowModal(true)}>
        <img
          src={plusImg}
          width="23px"
          height="23px"
          alt=""
        />
      </button>
    </div>
   </>
  )
}
