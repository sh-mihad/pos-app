import leftArrowImg from "../../assets/svg/left-arrow.svg"
import plusImg from "../../assets/svg/plus-svgrepo-com.svg"

export default function CustomerAddModal({onHide}) {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-[#000000]/50 backdrop-blur-sm">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto ">
        <section className="flex items-center justify-center">
        <div className="bg-[#ffff] w-4/12 py-4 px-5 ">
          <div className="flex items-center">
            <button
            onClick={()=>onHide()}
            >
              <img
                src={leftArrowImg}
                width="50px"
                height="50px"
                alt=""
                className="block"
              />
            </button>
            <h1 className="text-2xl font-semibold">Add New Customer</h1>
          </div>
          <form action="#" className="my-5">
            <input
              type="text"
              placeholder="Name"
              className="w-full bg-bgPrimary focus:outline-none border-b p-1 my-2 border-primary"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full bg-bgPrimary focus:outline-none border-b p-1 my-2 border-primary"
            />
            <input
              type="email"
              placeholder="Phone"
              className="w-full bg-bgPrimary focus:outline-none border-b p-1 my-2 border-primary"
            />
            
            <select  className="w-full bg-bgPrimary focus:outline-none border-b p-1 my-2 border-primary"  name="currency" id="">
                <option className="text-primary" value="">Currency</option>
                <option value="Taka">Taka</option>
                <option value="Taka">Dollar</option>
            </select>
            <input
              type="text"
              placeholder="Text ID"
              className="w-full bg-bgPrimary focus:outline-none border-b p-1 my-2 border-primary"
            />
            <button type="button" className="flex items-center gap-3 my-4">
                <img src={plusImg} width="20px" height="20px" alt=""/>
                <span className="text-info font-semibold">Add More Details</span>
            </button>

            <button className="bg-info px-4 w-full py-2 text-center font-semibold text-[#ffff] block mx-auto">Update</button>
          </form>
        </div>
      </section>
        </div>
    </div>
  )
}
