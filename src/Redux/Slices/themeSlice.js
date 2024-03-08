import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	theme: 'светлая',
}

const themeSlice = createSlice({
	name: 'theme',
	initialState,
	reducers: {
		slideTheme: (state, action) => {
			state.theme = action.payload
			window.localStorage.setItem('theme', action.payload)
		},
	},
})

export const { slideTheme } = themeSlice.actions
export default themeSlice.reducer
