import { persistStore } from 'redux-persist';
import store from './component/redux/Store';
 // Assuming your Redux store is exported from this file

const persistor = persistStore(store);

export default persistor;