import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  searchHistory: string[];  
}

const initialState: SearchState = {
  searchHistory: [],  
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchHistory: (state, action: PayloadAction<string>) => {
      state.searchHistory = [...state.searchHistory, action.payload];
    },
    clearSearchHistory: (state) => {
      state.searchHistory = []; 
    },
  },
});

export const { setSearchHistory, clearSearchHistory } = searchSlice.actions;
export default searchSlice.reducer;
