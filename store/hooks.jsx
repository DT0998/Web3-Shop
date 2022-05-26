import MetamaskContext from "./MetamaskContext";
import { useContext } from "react";


export const UseMetamask = () =>{
    const [state,dispatch] = useContext(MetamaskContext)
    return [state,dispatch]
}