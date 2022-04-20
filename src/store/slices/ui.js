import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: { isNotificationVisible: false, notification: null },
  reducers: {
    toggleNotification(state, action) {
       
          
      if (!action.payload.isVisible){
        state.isNotificationVisible = false;
        state.notification = null;
      } else { 
        state.isNotificationVisible = true;
        state.notification = {
            status: action.payload.status, // there are three statuses: error(red), warning(yellow), success(green)
            title: action.payload.title,
            message: action.payload.message,
          };
      } 
      
    },
  },
});

export const uiActions = uiSlice.actions;
export const uiSliceReducer = uiSlice.reducer;
export default uiSlice;