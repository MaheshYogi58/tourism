import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './App.css';
import reportWebVitals from './reportWebVitals';
import { RouterProvider } from 'react-router-dom';
import { MainRoute } from './router/MainRouter';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import Store, { persistor } from './component/redux/Store';
import { AppContextProvider } from './component/ContextAPI';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 
    <Suspense fallback={"...loading"}>
      <Provider store={Store}>
        <PersistGate loading={"loading ..."} persistor={persistor}>
          <AppContextProvider>
            <RouterProvider router={MainRoute} />
          </AppContextProvider>
        </PersistGate>
      </Provider>
    </Suspense>
 
  </React.StrictMode>
);

reportWebVitals();
