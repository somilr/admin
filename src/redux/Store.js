import { createStore, applyMiddleware } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { rootReducer } from "./reducer";
import thunk from 'redux-thunk'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['counter']
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configureStore = () => {
    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)

    return { store, persistor }
}