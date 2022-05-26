import {useReducer} from 'react'
import metamaskContext from './MetamaskContext'
import reducer,{initState} from './MetamaskReducer'
import logger from './logger'

function MetamaskProvider({children}){
  // dispatch
  const [state,dispatch] = useReducer(logger(reducer),initState)
  
  // provider
  return(
    <metamaskContext.Provider value={[state,dispatch]}>
     {children}
    </metamaskContext.Provider>
  )
}

export default MetamaskProvider;
