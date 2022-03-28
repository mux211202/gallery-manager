import { configureStore } from '@reduxjs/toolkit';
import { credentialsFormReducer } from './slices/credentialsForm';


export const store = configureStore({
    reducer: {
        credentialsFormReducer
    }
});


