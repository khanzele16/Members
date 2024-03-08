import themeSlice from './Slices/themeSlice'
import usersSlice from './Slices/usersSlice'
import { configureStore } from '@reduxjs/toolkit'

const store = configureStore({
	reducer: {
		user: usersSlice,
		theme: themeSlice,
	},
})

export default store
