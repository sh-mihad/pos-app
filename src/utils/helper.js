export const totalCartProductAmount =(cartArr)=>{
    if(cartArr?.length>0){
        const amount = cartArr?.reduce((totalOrderBill, currentOrderBill) => totalOrderBill + currentOrderBill?.orderBill, 0);
        return +amount.toFixed(2);
    }else{
        return 0
    }
}
export const totalProducts =(cartArr)=>{
    if(cartArr?.length>0){
        const amount = cartArr?.reduce((totalOrderBill, currentOrderBill) => totalOrderBill + currentOrderBill?.orderQty, 0);
        return +amount.toFixed(2);
    }else{
        return 0
    }
}