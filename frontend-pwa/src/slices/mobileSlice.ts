import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface MobileState {
  sidebarOpen: boolean;
}

const initialState: MobileState = {
  sidebarOpen: false,
};

export const mobileSlice = createSlice({
  name: 'mobile',
  initialState,
  reducers: {
    setSidebarVisible: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setSidebarVisible } = mobileSlice.actions;

export default mobileSlice.reducer;
