import './App.css';
import { LoginContext } from "./contexts/LoginContext";
import Login from './components/Login';
import GenerateToken from './components/Token';
import UserInfo from './components/User';

import { useContext, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const defaultLogin = useContext(LoginContext);
	const [login, setLogin] = useState(defaultLogin);

	return (
		<Router>
			<LoginContext.Provider value={[login, setLogin]}>
				<div className="App">
					<Routes>
						<Route path='/' exact Component={Login} />
						<Route path='/generateToken' Component={GenerateToken} />
						<Route path='/user' exact Component={UserInfo} />
					</Routes>
				</div>
			</LoginContext.Provider>
		</Router>
	);
}

export default App;
