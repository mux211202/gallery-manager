import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isCredentialsFormVisible: false,
    credentialsFormMode: 'sign-in',
    email: "",
    password:""
}

export const credentialsFormSlice = createSlice({
    name: 'credentialsForm',
    initialState,
    reducers:{
        submit(state, action){
            state.email = action.payload.email;
            state.password = action.payload.password;
        },
        toggleCredentialsForm(state, action){
            console.log(action)
            state.isCredentialsFormVisible = !state.isCredentialsFormVisible;
            if(action.payload === 'sign-in' || action.payload === 'log-in'){
                state.credentialsFormMode = action.payload;
            }
        },
        toggleCredentialsFormMode(state, action){
            const payload = action.payload;
            let mode = state.credentialsFormMode;
            if((payload === 'sign-in' || payload === 'log-in') && payload !== mode){
                mode = payload;
            }else {
                return
            }
            state.credentialsFormMode = mode; 
        }
    }
});

export const credentialsFormReducer = credentialsFormSlice.reducer;
export const credentialsFormActions = credentialsFormSlice.actions;