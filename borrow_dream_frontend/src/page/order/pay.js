import  OrderInfo  from "./orderList";
import { useState, useEffect} from "react";
import OrderApi from "../../api/orderApi";

export const Pay = ({ orderList, setOrderList, convertPrice }) => {
  const Id = window.localStorage.getItem("Id");
  useEffect(() => {
    const cartList = async () => {
      try {
        const response = await OrderApi.orderListGet(Id);
        setOrderList(response.data)
      } catch (e) {
        console.log(e);
      }
    }
    cartList();
  }, [Id])
  return (
    <>
      <OrderInfo orderList={orderList} convertPrice={convertPrice} />
    </>
  );
};
