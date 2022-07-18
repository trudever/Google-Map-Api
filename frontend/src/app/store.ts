import { configureStore } from '@reduxjs/toolkit'

import locationSlice from '../slices/locationSlice'
import pageSlice from '../slices/pageSlice'
import searchSlice from '../slices/searchSlice'
import currentSlice from '../slices/currentSlice'

export const store = configureStore({
  reducer: {
    pagedata: pageSlice,
    location: locationSlice,
    search: searchSlice,
    current: currentSlice,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
