import { configureStore } from '@reduxjs/toolkit'
import personal from './slices/personal.slice';

export default configureStore({
  reducer: {
    personal
	}
})