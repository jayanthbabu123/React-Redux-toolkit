import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootTeducer';

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
});
console.log(store)

export default store;