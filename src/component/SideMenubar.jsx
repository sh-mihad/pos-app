import { CiLocationOn } from "react-icons/ci";
import { FiSettings } from "react-icons/fi";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { MdOutlineDashboard } from "react-icons/md";
import { RxCross1 } from "react-icons/rx";
import logoImg from "../assets/logo/gobilling.png";
export default function SideMenubar({ onHide }) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-[#0000]/60 backdrop-blur-sm transition">
      <div className="w-3/12 h-screen relative bg-[#ffff] ">
        <div className="bg-bgPrimary py-5 px-4 ">
          <img
            className="block mx-auto"
            src={logoImg}
            width="200px"
            height="200px"
            alt=""
          />
          <small className="block text-primary font-semibold text-sm">
            Location :
          </small>
          <h4 className="text-xl font-semibold text-grey">Mohammadpur,Dhaka</h4>
        </div>
        <div className="">
          <button className="flex w-full mt-3 gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <MdOutlineDashboard className="w-6 h-6 text-primary" />
            <h2 className="text-xl text-primary">Dashboard</h2>
          </button>
          <button className="flex w-full mt-3 gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <CiLocationOn className="w-6 h-6 text-primary" />
            <h2 className="text-xl text-primary">Location</h2>
          </button>
          <button className="flex w-full mt-3 gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <LiaFileInvoiceDollarSolid className="w-6 h-6 text-primary" />
            <h2 className="text-xl text-primary">POS Invoice</h2>
          </button>
          <button className="flex w-full mt-3 gap-2 items-center px-4 py-2 hover:bg-info hover:bg-opacity-15">
            <FiSettings className="w-6 h-6 text-primary" />
            <h2 className="text-xl text-primary">Setting</h2>
          </button>
        </div>
        <button
          onClick={() => onHide()}
          className="absolute top-0 right-[-30px]"
        >
          <RxCross1 className="w-8 h-8 text-[#ffff]" />
        </button>
      </div>
    </div>
  );
}
