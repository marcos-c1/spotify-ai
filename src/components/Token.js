import { useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from '../redux/reducers/userSlicer';
import { Link } from 'react-router-dom';
import { getToken } from '../redux/reducers/tokenSlicer';
import { LoginContext } from '../contexts/LoginContext';

const GenerateToken = () => {
    const dispatch = useDispatch();
    const token = useSelector((state) => state.token);
    const [login, setLogin] = useContext(LoginContext);

    useEffect(() => {
        const clientId = process.env.REACT_APP_CLIENT_ID
        const params = new URLSearchParams(window.location.search);
        const code = params.get("code");

        const payload = { clientId, code };
        setLogin(payload);
        dispatch(getToken(payload)).unwrap();
    }, [dispatch])

    async function getUserProfileInfo() {
        await dispatch(fetchUser(token.data)).unwrap();
    }

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            <div className="container__login bg_black">
                <div className="justify__center container__login__full">
                    <h2 className="title">Spotify API</h2>
                    {token.data ? (
                        <Link to='/user'><button id="btnLogin" onClick={getUserProfileInfo}>Access your profile</button></Link>
                    ) : (<button id="btnLogin">{token.data}</button>)}
                </div>
            </div>
        </LoginContext.Provider>
    )
}

export default GenerateToken