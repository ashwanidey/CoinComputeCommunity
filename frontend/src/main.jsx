import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import authReducer from "./state";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import { UserProvider } from './context/UserContext.jsx'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";
import { CryptoNewsProvider } from './context/NewsContext.jsx'


const persistConfig = { key: "root", storage, version: 1 };
const persistedReducer = persistReducer(persistConfig, authReducer);
const store = configureStore({
  auth: authReducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <BrowserRouter>
    <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}> 
    <UserProvider>
      <CryptoNewsProvider>
        <App />
        </CryptoNewsProvider>
        </UserProvider>
    </PersistGate>
    </Provider>
    </BrowserRouter>
  
)
