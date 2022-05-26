import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { UseMetamask, actions } from "../../store";
import { connectMetamask } from "../../store/action";

function MetamaskLogin() {
  const [state, dispatch] = UseMetamask();
  const { UserAddress} = state;
  const hasAccount = UserAddress.length <= 0;
  console.log(UserAddress);

  const ConnectMetamask = async () => {
    const accounts = await window.ethereum.request({
      method: "eth_requestAccounts",
    });
    console.log(accounts[0]);
    dispatch(actions.connectMetamask(accounts[0]));
  };
  
  useEffect(()=>{
    connectMetamask()
  },[])

  return (
    <React.Fragment>
      <Button size="medium" variant="contained" onClick={ConnectMetamask}>
        {!hasAccount && UserAddress}
        {hasAccount && "Connect Wallet"}
      </Button>
    </React.Fragment>
  );
}

export default MetamaskLogin;
