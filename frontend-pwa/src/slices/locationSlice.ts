import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface LocationState {
  location: any
}

const initialState: LocationState = {
  location: { lat: 40.73061, lng: -73.935242 },
}

export const locationSlice = createSlice({
  name: "location",
  initialState,
  reducers: {
    setLocation: (state, action: PayloadAction<any>) => {
      state.location = action.payload
    },
  },
})

export const { setLocation } = locationSlice.actions

export default locationSlice.reducer
