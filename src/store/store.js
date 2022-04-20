import { configureStore } from '@reduxjs/toolkit';
import { credentialsFormReducer } from './slices/credentialsForm';
import { uiSliceReducer } from './slices/ui';
import { authReducer } from './slices/auth';

export const store = configureStore({
    reducer: {
        credentialsFormReducer,
        uiSliceReducer,
        authReducer
    }
});


