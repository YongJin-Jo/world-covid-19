import { configureStore } from '@reduxjs/toolkit';
import { countrySlice } from './reduser';

export const store = configureStore({ reducer: countrySlice.reducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
