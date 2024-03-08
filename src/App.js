import React from 'react'
import toast from 'react-hot-toast'
import User from './Components/User/User'
import ULoading from './Components/Other/ULoading'
import Success from './Components/Success/Success'
import { NavLink, Route, Routes } from 'react-router-dom'
import { fetchUsers, sendInvite } from './Redux/Slices/usersSlice'
import { useDispatch, useSelector } from 'react-redux'
import './App.css'
import NotFound from './Components/NotFound/NotFound'
import { slideTheme } from './Redux/Slices/themeSlice'

function App() {
	const [valueText, setValueText] = React.useState('')
	const [pathName, setPathName] = React.useState('/')
	const users = useSelector(state => state.user.users.data)
	const status = useSelector(state => state.user.users.status)
	const invited = useSelector(state => state.user.invited)
	const theme = useSelector(state => state.theme.theme)
	const dispatch = useDispatch()
	const text = num => (num == 1 ? 'друга' : 'друзей')
	const numberText = num =>
		num == 1
			? 'одного'
			: num == 2
			? 'двух'
			: num == 3
			? 'трех'
			: num == 4
			? 'четырех'
			: num == 5
			? 'пять'
			: num == 6 && 'шесть'
	React.useEffect(() => {
		const themeLocal = window.localStorage?.getItem('theme')
		dispatch(slideTheme(themeLocal === null ? 'светлая' : themeLocal))
	}, [])
	React.useEffect(() => {
		const body = document.getElementsByTagName('body')[0]
		body.style.backgroundColor = theme == 'светлая' ? '#dfe2ff' : '#5966b8'
	}, [theme])
	React.useEffect(() => {
		if (invited.length) {
			setPathName('/success')
		} else {
			setPathName('/')
		}
	}, [invited])
	React.useEffect(() => {
		dispatch(fetchUsers())
	}, [])
	return (
		<div className='App'>
			<div
				className='App-content'
				id={theme == 'светлая' ? 'white-theme' : 'black-theme'}
			>
				<div className='App-content-theme'>
					<div
						onClick={() => dispatch(slideTheme('светлая'))}
						id={theme == 'светлая' ? 'active' : ''}
					>
						<img
							src='https://cdn-icons-png.flaticon.com/512/1888/1888282.png'
							alt=''
						/>
					</div>
					<div
						onClick={() => dispatch(slideTheme('темная'))}
						id={theme == 'темная' ? 'active' : ''}
					>
						<img
							src='https://cdn-icons-png.flaticon.com/512/2024/2024058.png'
							alt=''
						/>
					</div>
				</div>
				<Routes>
					<Route
						path='/'
						element={
							<>
								<div className='App-content-header'>
									<div id='search-input'>
										<svg
											viewBox='0 0 24 24'
											fill='none'
											xmlns='http://www.w3.org/2000/svg'
										>
											<g id='SVGRepo_bgCarrier' strokeWidth='0'></g>
											<g
												id='SVGRepo_tracerCarrier'
												strokeLinecap='round'
												strokeLinejoin='round'
											></g>
											<g id='SVGRepo_iconCarrier'>
												<path
													d='M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z'
													stroke='#999999'
													strokeWidth='2'
													strokeLinecap='round'
													strokeLinejoin='round'
												></path>
											</g>
										</svg>
										<input
											value={valueText}
											onChange={event => setValueText(event.target.value)}
											placeholder='Найти пользователя'
										></input>
									</div>
								</div>
								<ul className='App-content-catalog'>
									{status == 'loading' &&
										[...new Array(6)].map((el, index) => (
											<li key={index}>
												<ULoading />
											</li>
										))}
									{status == 'loaded' &&
										users
											?.filter(el => {
												const fullName = (
													el.first_name + el.last_name
												).toLowerCase()
												return (
													fullName.includes(valueText.toLowerCase()) ||
													el.email
														.toLowerCase()
														.includes(valueText.toLowerCase())
												)
											})
											.map((el, index) => (
												<li key={index}>
													<User {...el} />
												</li>
											))}
								</ul>
								<NavLink to={pathName}>
									<button
										id='orange-button'
										onClick={() => {
											if (invited.length) {
												toast.success(
													`Вы пригласили ${numberText(invited.length)} ${text(
														invited.length
													)}`
												)
												dispatch(sendInvite())
											} else {
												toast.error('У вас нет отправленных приглашений')
											}
										}}
									>
										Отправить приглашение
									</button>
								</NavLink>
							</>
						}
					/>
					<Route path='/success' element={<Success />} />
					<Route path='*' element={<NotFound />} />
				</Routes>
			</div>
		</div>
	)
}

export default App
