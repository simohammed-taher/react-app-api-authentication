import './App.css';
import Home from './componenents/Home';
import Login from './componenents/Login';
import Register from './componenents/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
	return (
		<div className='App'>
			<ToastContainer theme='colored' position='top-center'></ToastContainer>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/login' element={<Login />}></Route>
					<Route path='/register' element={<Register />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
