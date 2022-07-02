import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface PageState {
  scope: Scope;
  index: number;
  data: Array<any>;
  numberScope: Scope;
}

export interface Scope {
  start: number;
  end: number;
}

export const cardsToShow = 9;
export const numbersToShow = 4;

const initialState: PageState = {
  index: 1,
  scope: { start: 0, end: cardsToShow },
  numberScope: { start: 1, end: 4 },
  data: [],
};

export const pageSlice = createSlice({
  name: 'pagination',
  initialState,
  reducers: {
    setPagination: (state, action: PayloadAction<Scope>) => {
      state.scope = action.payload;
    },
    setPageData: (state, action: PayloadAction<Array<any>>) => {
      state.data = [...action.payload];
    },
    gotoIndex: (state, action: PayloadAction<number>) => {
      let distance = cardsToShow * (action.payload - state.index);
      state.scope = {
        start: state.scope.start + distance,
        end: state.scope.end + distance,
      };
      state.index = action.payload;
    },
    moveIndex: (state, action: PayloadAction<string>) => {
      if (action.payload === 'NEXT') {
        state.index = state.index + 1;
        state.scope = {
          start: state.scope.start + cardsToShow,
          end: state.scope.end + cardsToShow,
        };
        return;
      }
      if (state.index > 1) {
        state.index = state.index - 1;
        state.scope = {
          start: state.scope.start - cardsToShow,
          end: state.scope.end - cardsToShow,
        };
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { setPagination, setPageData, moveIndex, gotoIndex } =
  pageSlice.actions;

export default pageSlice.reducer;
