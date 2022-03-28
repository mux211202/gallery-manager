import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    email: "",
    password:""
}

export const credentialsFormSlice = createSlice({
    name: 'credentialsForm',
    initialState,
    reducers:{
        submit(state, action){
            console.log(action.payload)
            state.email = action.payload.email;
            state.password = action.payload.password;
        }
    }
});

export const credentialsFormReducer = credentialsFormSlice.reducer;
export const credentialsFormActions = credentialsFormSlice.actions;