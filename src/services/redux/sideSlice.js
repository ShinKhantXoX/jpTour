import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  side: false,
}

export const sideSlice = createSlice({
  name: 'side',
  initialState,
  reducers: {
        isOpen: (state) => {
            state.side = true;
        },
        isClose: (state) => {
            state.side = false;
        },
        isToggle: (state) => {
            state.side = !state.side;
        }
  },
})

// Action creators are generated for each case reducer function
export const { isOpen, isClose, isToggle } = sideSlice.actions

export default sideSlice.reducer