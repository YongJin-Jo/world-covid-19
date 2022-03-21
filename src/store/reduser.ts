import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ConuntryState {
  country: string;
}

const initialState: ConuntryState = {
  country: '',
};

export const countrySlice = createSlice({
  name: 'countrySlice',
  initialState,
  reducers: {
    targetCountry: (state, action: PayloadAction<string>) => {
      console.log(action);

      state.country = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { targetCountry } = countrySlice.actions;

export default countrySlice.reducer;
