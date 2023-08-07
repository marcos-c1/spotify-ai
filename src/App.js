import './App.css';
import { LoginContext } from "./contexts/LoginContext";
import Login from './components/Login';
import { useContext, useState } from 'react';

function App() {
	const defaultLogin = useContext(LoginContext);
	const [login, setLogin] = useState(defaultLogin);

	return (
		<LoginContext.Provider value={[login, setLogin]}>
			<div className="App">
				<Login />
			</div>
		</LoginContext.Provider >
	);
}

export default App;
