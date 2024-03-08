import React from 'react'
import './User.css'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, deleteUser } from '../../Redux/Slices/usersSlice'

function User({ avatar, email, first_name, last_name, id }) {
	const dispatch = useDispatch()
	const invitedList = useSelector(state => state.user.invited)
	const invited = invitedList?.includes(id)
	return (
		<div className='User'>
			<img src={avatar} alt='' />
			<div className='User-info'>
				<p id='name'>{`${first_name} ${last_name}`}</p>
				<p id='email'>{email}</p>
			</div>
			<div id='invite'>
				{!invited ? (
					<svg
						onClick={() => {
							dispatch(addUser(id))
						}}
						xmlns='http://www.w3.org/2000/svg'
						version='1.1'
						viewBox='0 0 349.03 349.031'
						id='plus'
					>
						<g>
							<path
								d='M349.03 141.226v66.579a9.078 9.078 0 0 1-9.079 9.079H216.884v123.067a9.077 9.077 0 0 1-9.079 9.079h-66.579c-5.009 0-9.079-4.061-9.079-9.079V216.884H9.079A9.08 9.08 0 0 1 0 207.805v-66.579a9.079 9.079 0 0 1 9.079-9.079h123.068V9.079c0-5.018 4.069-9.079 9.079-9.079h66.579a9.078 9.078 0 0 1 9.079 9.079v123.068h123.067a9.077 9.077 0 0 1 9.079 9.079z'
								fill='#909090'
								opacity='1'
							></path>
						</g>
					</svg>
				) : (
					<svg
						onClick={() => {
							dispatch(deleteUser(id))
						}}
						xmlns='http://www.w3.org/2000/svg'
						version='1.1'
						viewBox='0 0 24 24'
						id='tick'
					>
						<g>
							<path
								d='M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z'
								fill='#909090'
								opacity='1'
							></path>
						</g>
					</svg>
				)}
			</div>
		</div>
	)
}

export default User