import './App.css';
import api from './api/fetch'
import auth from './utils/auth'
import { useEffect, useState } from 'react';
import { fetchUser } from './redux/reducers/userSlicer';
import { useSelector, useDispatch } from 'react-redux';

function App() {
	const [token, setToken] = useState("");

	const dispatch = useDispatch()
	const user = useSelector((state) => state.user);
	const userStatus = useSelector(state => state.user.loading)
	const error = useSelector(state => state.user.error);

	async function retrieveProfile() {
		const clientId = process.env.REACT_APP_CLIENT_ID || "a2d5d1842e384a0ea7ff7d2249153639"
		const params = new URLSearchParams(window.location.search);
		const code = params.get("code");

		if (!code) {
			auth.redirectToAuthCodeFlow(clientId);
		} else {
			const accessToken = await auth.getAccessToken(clientId, code);
			await dispatch(fetchUser(accessToken)).unwrap();
		}
	}

	return (
		<div className="App">
			<button className="login" onClick={retrieveProfile}>Log in on spotify</button>
			{user.loading && <div className="sidebar__loading"><h2 style={{ textAlign: "center" }}>Loading...</h2></div>}
			{!user.loading && user.error ? <div>Error.. {user.error}</div> : null}
			{!user.loading && user.hasData ? (
				<div className='display__user'>
					<ul>
						<li><img src={user.data.images[0].url}></img></li>
						<li>{user.data.id}</li>
						<li>{user.data.display_name}</li>
						<li>{user.data.href}</li>
						<li>{user.data.country}</li>
					</ul>
				</div>
			) : null}
		</div>
	);
}

export default App;
