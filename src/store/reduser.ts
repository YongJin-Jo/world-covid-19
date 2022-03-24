import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CountriesType } from '../type/country';

export interface ConuntryState {
  mainContents: { country: string; sumery: CountriesType[] };
}

const initialState: ConuntryState = {
  mainContents: {
    country: '',
    sumery: [],
  },
};

export const countrySlice = createSlice({
  name: 'countrySlice',
  initialState,
  reducers: {
    targetCountry: (state, action: PayloadAction<string>) => {
      state.mainContents.country = action.payload;
    },
    summeryListUp: (state, action: PayloadAction<CountriesType[]>) => {
      state.mainContents.sumery = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { targetCountry, summeryListUp } = countrySlice.actions;

export default countrySlice.reducer;
