import './App.css';
import { LoginContext } from "./contexts/LoginContext";
import LoginPage from './pages/Login';
import TokenPage from './pages/Token';
import UserPage from './pages/User';
import LearningPage from './pages/Learning';

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
						<Route path='/' exact Component={LoginPage} />
						<Route path='/generateToken' Component={TokenPage} />
						<Route path='/user' exact Component={UserPage} />
						<Route path='/ml' exact Component={LearningPage} />
					</Routes>
				</div>
			</LoginContext.Provider>
		</Router>
	);
}

export default App;
