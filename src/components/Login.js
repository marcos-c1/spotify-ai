import auth from '../utils/auth'
import { getToken } from '../redux/reducers/tokenSlicer';
import { useDispatch } from 'react-redux';
import { useContext } from 'react';
import { LoginContext } from '../contexts/LoginContext';

const Login = () => {
    const dispatch = useDispatch()
    const [login, setLogin] = useContext(LoginContext);

    async function retrieveProfile() {
        const clientId = process.env.REACT_APP_CLIENT_ID;
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        if (!code) {
            auth.redirectToAuthCodeFlow(clientId);
        } else {
            const payload = { clientId, code }
            setLogin(payload);
            await dispatch(getToken(payload)).unwrap();
        }
    }

    return (
        <div className="container__login">
            <div className="justify__center container__login__left">
                <h2 className="title">Spotify API</h2>
                <button id="btnLogin" onClick={retrieveProfile}>Authorize Spotify API</button>
            </div>
            <div className="align__center container__login__right typewriter">
                <p className='paragraph'>
                    A playlist autogenerator using artificial intelligence to train the model based on what the user listens to on a daily basis.
                </p>
            </div>
        </div>
    )
}

export default Login