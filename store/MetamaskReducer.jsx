
// action
import { CONNECT_METAMASK } from "./constant";

// state init
const initState = {
  UserAddress: [],
};

// reducer
function reducer(state, action) {
  switch (action.type) {
    // get account address
    case CONNECT_METAMASK:
        return {
            ...state,
           UserAddress: action.payload,
        }
        // actions not valid
    default:
      throw new Error('Invalid Actions');
  }
}
export { initState };
export default reducer;
