import React, { useState } from "react";
import Home from "./Containers/Home/Home";
import Electronics from "./Containers/Electronics/Electronics";
import Television from "./Containers/ElectronicsTvList/ElectronicsTvList";
import Washingmachine from "./Containers/ElectronicsMachineList/ElectronicsMachineList";
import Airconditioners from "./Containers/ElectronicsAcList/ElectronicsAcList";
import Allitems from "./Containers/Allitems/Allitems";
import Productdetail from "./Containers/ProductDetail/ProductDetail";
import Login from "./Containers/Auth/Login/Login";
import Signup from "./Containers/Auth/Signup/Signup";
import Logout from "./Containers/Logout/Logout";
import UserDashboard from "./Containers/UserDashboard/UserDashboard";
import Cart from "./Containers/UserDashboard/Cart";
import { Routes, Route } from "react-router-dom";
import UserContext from "./UserContext";

function App() {
  const [authData, setAuthdata] = useState({
    token: null,
    userId: null,
    expireTime: null,
  });
  const [userdata, setUserdata] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    region: "",
    zipcode: "",
  });
  const [cart, setCart] = useState({});
  const registeruserData = (data) => {
    setUserdata({
      name: data.regname,
      email: data.regemail,
      password: data.regpassword,
      address: data.regaddress,
      region: data.regregion,
      zipcode: data.regzipcode,
    });
  };

  const login = (idToken, expirationDate, localId) => {
    setAuthdata({
      token: idToken,
      userId: localId,
      expireTime: expirationDate,
    });
  };
  const logout = () => {
    setAuthdata({
      token: null,
      userId: null,
      expireTime: null,
    });
  };
  const checkAuthTimeout = (expirationTime) => {
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("expirationDate");
      localStorage.removeItem("userId");
      logout();
    }, expirationTime * 1000);
  };

  const checkAuthState = () => {
    const token = localStorage.getItem("token");
    const id = localStorage.getItem("userId");
    const time = localStorage.getItem("expirationDate");
    setAuthdata({
      token: token,
      userId: id,
      expireTime: time,
    });
  };

  const cartHandler = (product, price) => {
    setCart({ product: product, price: price });
  };
  return (
    <UserContext.Provider
      value={{
        login: login,
        logout: logout,
        checkAuthState: checkAuthState,
        authDataToken: authData.token,
        registeruserData: registeruserData,
        userdata: userdata,
        checkAuthTimeout: checkAuthTimeout,
        cartHandler: cartHandler,
        cart: cart,
      }}
    >
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/electronics" Component={Electronics} />
        <Route path="/airconditioners" Component={Airconditioners} />
        <Route path="/washingmachines" Component={Washingmachine} />
        <Route path="/televisions" Component={Television} />
        <Route path="/allitems" Component={Allitems} />
        <Route path="/products/:productId" Component={Productdetail} />
        <Route path="/login" Component={Login} />
        <Route path="/logout" Component={Logout} />
        <Route path="/signup" Component={Signup} />
        <Route path="/userdashboard" Component={UserDashboard} />
        <Route path="/userdashboard/cart" Component={Cart} />
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
