import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type MediaQuerySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface IMediaQueryState {
  size: MediaQuerySize;
}

const initialState: IMediaQueryState = {
  size: 'xs',
};

export const mediaQuerySlice = createSlice({
  name: 'mediaQuery',
  initialState,
  reducers: {
    setMediaQuerySize: (state, action: PayloadAction<MediaQuerySize>) => {
      state.size = action.payload;
    },
  },
});

export const { setMediaQuerySize } = mediaQuerySlice.actions;
export const mediaQueryReducer = mediaQuerySlice.reducer;
