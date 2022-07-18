import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface currentState {
  current: any
}

const initialState: currentState = {
  current: {
    countryName: '',
    lat: 0,
    lng: 0,
  },
}
export const currentSlice = createSlice({
  name: 'current',
  initialState,
  reducers: {
    setCurrent: (state, action: PayloadAction<any>) => {
      state.current = action.payload
    },
  },
})

export const { setCurrent } = currentSlice.actions

export default currentSlice.reducer
