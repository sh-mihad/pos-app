import { useContext } from "react";
import { toast } from "react-toastify";
import { DataContext } from "../../context";

export default function ProductItem({ item }) {
  const { name, unitPrice, img } = item || {};
  const { state, dispatch } = useContext(DataContext);

  // product cart add handler
  const handleProductCart = (item) => {
    const checkDuplicate = state?.cartData?.find(
      (pItem) => pItem?.id === item?.id
    );
    if (checkDuplicate) {
      if(checkDuplicate?.stockQty>checkDuplicate?.orderQty){
        dispatch({
          type :"INCREMENT",
          payload:item
        })
      }else{
        toast.warn("Stock Out")
      }
     
    } else {
      const cartItem = {
        ...item,
        orderQty: 1,
        orderBill: item?.unitPrice,
      };
      dispatch({
        type: "ADD_TO_CART",
        payload: cartItem,
      });
    }
  };
  
  return (
    <div
      className="bg-white border border-borderColor cursor-pointer"
      onClick={() => handleProductCart(item)}
    >
      <img
        className="block mx-auto min-h-[120px]"
        src={img}
        width="120px"
        height="120px"
        alt=""
      />
      <p className="text-primary font-semibold text-center">${unitPrice}</p>

      <p className="text-center text-primary border-t border-primary text-sm bg-bgPrimary p-1">
        {name}
      </p>
    </div>
  );
}
