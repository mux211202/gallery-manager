import { createSlice } from "@reduxjs/toolkit"; 

const initialState = {
    isLogged: false,
    token:'',
    email:''
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers: {
        logIn(state, action){
            console.log(action.payload);
            const payload = action.payload;
            state.isLogged = true;
            state.token = payload.idToken;
            state.email = payload.email;
        }
    }
})

export const authReducer = authSlice.reducer;
export const authActions = authSlice.actions;

// action creator thunk
export const authAction = (email, password, mode) => {
    return async (dispatch) => {
        // AIzaSyCmO2Lv56E1cK9FUVL_8UQ04_Jeo44nrH0
        const sendRequest = async() => {
            let url;
            if (mode === 'sign-up') {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCmO2Lv56E1cK9FUVL_8UQ04_Jeo44nrH0';
            }
            if (mode === 'log-in') {
                url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCmO2Lv56E1cK9FUVL_8UQ04_Jeo44nrH0';
            }
            const response = await fetch(url,
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
                return response.json();
            }
        }

        try{
            const data = await sendRequest();
            console.log(data);
            dispatch(authActions.logIn(data));
        }catch(e){
            console.log(e.message)
        }
        
    }
}


