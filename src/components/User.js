import Header from './Header';
import Playlist from './Playlist';
import Album from './Album';
import Track from './Track';
import Footer from './Footer';
import Hero from './Hero';
import { useEffect, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from '../redux/reducers/tokenSlicer';
import { LoginContext } from '../contexts/LoginContext';

const UserInfo = () => {
    const dispatch = useDispatch();

    const [login, setLogin] = useContext(LoginContext);
    const token = useSelector((state) => state.token);

    useEffect(() => {
        if (!token.hasData) {
            dispatch(getToken(login)).unwrap();
        }
    }, [dispatch]);

    return (
        <LoginContext.Provider value={[login, setLogin]}>
            <main className='container__user'>
                <Header />
                <Hero />

                <section className='container__grid'>
                    <Playlist />
                    <Album />
                </section>

                <section className="container__table">
                    <Track />
                </section>

                <footer className="container__footer">
                    <Footer />
                </footer>
            </main>
        </LoginContext.Provider>
    )
}

export default UserInfo