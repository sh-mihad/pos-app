import barcodeImg from "../../assets/svg/barcode.svg"
import serachImg from "../../assets/svg/search.svg"

export default function ProductNavbar({setSearchTerms}) {
  return (
    <nav
      className="flex gap-2 justify-between items-center mt-3 shadow-lg py-1 px-3"
    >
      <img
        className="block"
        src={serachImg}
        width="25px"
        height="25px"
        alt=""
      />
      <input
        className="block flex-grow focus:outline-none focus:border-b bg-bgPrimary border-primary"
        type="text"
        name="search"
        placeholder="Search Products"
        onChange={(e)=>setSearchTerms(e.target.value.trim())}
      />
      <img
        className="block"
        src={barcodeImg}
        width="35px"
        height="25px"
        alt=""
      />
    </nav>
  )
}
