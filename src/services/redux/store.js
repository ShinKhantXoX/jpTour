import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import sideReducer from './sideSlice'

export const store = configureStore({
  reducer: {
    counter : counterReducer,
    side : sideReducer
  },
})