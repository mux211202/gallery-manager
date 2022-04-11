import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    isLogged: false
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        signUp(state, action){
            console.log('sign upped')
            state.isLogged = true;
        }
    }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

// action creator thunk
export const signUpAction = (email, password) => {
    return async (dispatch) => {
        // AIzaSyCmO2Lv56E1cK9FUVL_8UQ04_Jeo44nrH0
        const sendRequest = async() => {
            const response = await fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmO2Lv56E1cK9FUVL_8UQ04_Jeo44nrH0',
            {
                method: 'POST',
                body: JSON.stringify({
                    email,
                    password,
                    returnSecureToken: true
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            if(!response.ok){
                throw new Error('Sign up failed');
            }else {
                dispatch(authActions.signUp);
            }
        }

        try{
            await sendRequest()
        }catch(e){
            console.log(e.message)
        }
        
    }
}

