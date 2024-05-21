

import { combineReducers } from 'redux';


import loginReducer from './reducer/LoginReducer';
import SignUpReducer from './reducer/SignUpReducer';
import { createResetMetaReducer } from './reducer/Metareducer';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from "redux-persist";
import drawerReducer from './reducer/drawerReducer';
import reducer from './reducer/reducers';
import selectedItemImageReducer from './reducer/details';
import navbarReducer from './reducer/Toggle';
import placeTo from './reducer/placeto';
import contactReducer from './reducer/contactReducer';









const resetSlices = [
 
  
  ];

const rootReducer = createResetMetaReducer(
    "Global RESET",
    resetSlices
)
(combineReducers({
  login: loginReducer,
  Signup: SignUpReducer,
  drawer: drawerReducer,
  reducer:reducer,
  selectedItemImage: selectedItemImageReducer,
  navbar: navbarReducer,
 placeTo:placeTo,
 contact: contactReducer,

 


 

})
);


const persistConfig = {
    key: "root",
    storage,
    whitelist: resetSlices,
  };
  export default persistReducer(persistConfig, rootReducer);
