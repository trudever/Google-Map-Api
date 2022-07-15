import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface SearchState {
  search: any
}

const initialState: SearchState = {
  search: {
    status: '',
    keyword: '',
    country: '',
    state: '',
    city: '',
    category: '',
  },
}

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<any>) => {
      state.search = action.payload
    },
  },
})

export const { setSearch } = searchSlice.actions

export default searchSlice.reducer
