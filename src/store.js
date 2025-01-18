import { configureStore } from '@reduxjs/toolkit';
import authenticationReducer from './reducer/authentication';

// Example of a slice (can be replaced with your specific reducers)
// Create a Redux store
const store = configureStore({
  reducer: {
    authenticator: authenticationReducer,
  },
});

export default store;
