import {configureStore} from '@reduxjs/toolkit';
import authSliceReducer from './authslice';
import CardTemplateData from './CardTemplateData'

const store = configureStore({
    reducer: {
        auth : authSliceReducer,
        card : CardTemplateData,
        //TODO: add more slices here for posts
    }
});


export default store;