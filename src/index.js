import App from './App'
import React from 'react'
import store from './Redux/store'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { Provider } from 'react-redux'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
			<Toaster reverseOrder={true} position='top-right' />
		</BrowserRouter>
	</Provider>
)
reportWebVitals()
