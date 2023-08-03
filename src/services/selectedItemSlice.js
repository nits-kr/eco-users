import { createSlice } from '@reduxjs/toolkit';

const selectedItemSlice = createSlice({
  name: 'selectedItem',
  initialState: null,
  reducers: {
    setSelectedItemId: (state, action) => {
      return action.payload;
    },
  },
});

export const { setSelectedItemId } = selectedItemSlice.actions;
export default selectedItemSlice.reducer;
