import { configureStore } from 'redux';

const initialState = {};


const store = configureStore({
    reducer: {},
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(stringMiddleWare),
    devTools: process.env.NODE_ENV !== 'production'

})

export default store;
