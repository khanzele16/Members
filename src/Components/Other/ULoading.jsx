import React from 'react'
import ContentLoader from 'react-content-loader'

const ULoading = () => (
	<ContentLoader
		speed={2}
		width={400}
		height={54}
		viewBox='0 0 400 54'
		backgroundColor='#f3f3f3'
		foregroundColor='#ecebeb'
	>
		<rect x='500' y='35' rx='2' ry='2' width='50' height='20' />
		<circle cx='32' cy='27' r='27' />
		<rect x='365' y='19' rx='5' ry='5' width='25' height='25' />
		<rect x='76' y='12' rx='5' ry='5' width='153' height='12' />
		<rect x='75' y='32' rx='5' ry='5' width='250' height='10' />
	</ContentLoader>
)

export default ULoading
