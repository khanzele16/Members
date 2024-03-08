import React from 'react'
import { NavLink } from 'react-router-dom'
import './NotFound.css'

function NotFound() {
	return (
		<div className='NotFound'>
			<div className='NotFound-options'>
				<img
					src='https://cdn-icons-png.flaticon.com/512/14090/14090276.png '
					alt=''
				/>
				<p>Данной страницы не существует</p>
			</div>
			<NavLink to='/'>
				<button id='orange-button'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						version='1.1'
						viewBox='0 0 451.847 451.847'
					>
						<g>
							<path
								d='M97.141 225.92c0-8.095 3.091-16.192 9.259-22.366L300.689 9.27c12.359-12.359 32.397-12.359 44.751 0 12.354 12.354 12.354 32.388 0 44.748L173.525 225.92l171.903 171.909c12.354 12.354 12.354 32.391 0 44.744-12.354 12.365-32.386 12.365-44.745 0l-194.29-194.281c-6.167-6.177-9.252-14.274-9.252-22.372z'
								fill='#ffffff'
								opacity='1'
							></path>
						</g>
					</svg>
					<p>Назад</p>
				</button>
			</NavLink>
		</div>
	)
}

export default NotFound
