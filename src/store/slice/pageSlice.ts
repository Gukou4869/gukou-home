import { createSlice } from '@reduxjs/toolkit';

import { PageType } from '@/src/utils/type';

import type { PayloadAction } from '@reduxjs/toolkit';
export interface IPageState {
  pageState: PageType;
}

const initialState: IPageState = {
  pageState: 'home',
};

export const pageSlice = createSlice({
  name: 'page',
  initialState,
  reducers: {
    setPageState: (state, action: PayloadAction<PageType>) => {
      state.pageState = action.payload;
    },
  },
});

export const { setPageState } = pageSlice.actions;
export const pageReducer = pageSlice.reducer;
