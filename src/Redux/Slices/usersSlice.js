import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
	const { data } = await axios.get('https://reqres.in/api/users', {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
	})
	return data?.data
})

const initialState = {
	users: {
		data: null,
		status: 'loading',
	},
	invited: [],
}

const usersSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			state.invited = state.invited.concat(action.payload)
		},
		deleteUser: (state, action) => {
			state.invited = state.invited?.filter(el => el != action.payload)
		},
		sendInvite: state => {
			state.invited = []
		},
	},
	extraReducers: builder => {
		builder.addCase(fetchUsers.pending, state => {
			state.users.data = null
			state.users.status = 'loaded'
		})
		builder.addCase(fetchUsers.fulfilled, (state, action) => {
			state.users.data = action.payload
			state.users.status = 'loaded'
		})
		builder.addCase(fetchUsers.rejected, state => {
			state.users.data = null
			state.users.status = 'error'
		})
	},
})

export const { addUser, deleteUser, sendInvite } = usersSlice.actions
export default usersSlice.reducer
