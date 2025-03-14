// import React, { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { useLocation } from "react-router";
// import { useSelector } from "react-redux";
// const Cart = () => {
//   const location = useLocation();
//   const dispatch = useDispatch();

//   const { product } = location.state || {};
//   const cart = useSelector((state)=>state.cart);
//   console.log(cart);

//   useEffect(() => {
//     dispatch(addToCart(product));
//   }, [dispatch]);

//   return <></>;
// };

// export default Cart;

// to post the data to api and store it and retrieve it 