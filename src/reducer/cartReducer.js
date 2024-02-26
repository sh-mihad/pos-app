
const initialState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        cartData: [...state.cartData, action?.payload],
      };
    case "INCREMENT":
      
      return {
        cartData: state?.cartData?.map((item) => {
          if (item?.id === action?.payload?.id) {
            return {
              ...item,
              orderQty: item?.orderQty + 1,
              orderBill: item?.unitPrice * (item?.orderQty + 1),
            };
          } else {
            return item;
          }
        }),
      };
    case "DECREMENT":
      return {
        cartData: state?.cartData?.map((item) => {
          if (item?.id === action?.payload?.id) {
            return {
              ...item,
              orderQty: item?.orderQty - 1,
              orderBill: item?.unitPrice * (item?.orderQty - 1),
            };
          } else {
            return item;
          }
        }),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartData: state.cartData.filter((x) => x.id != action.payload.id),
      };
    default:
      return state;
  }
};

export { cartReducer, initialState };

