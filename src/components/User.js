import Header from './Header';
import Playlist from './Playlist';
import Album from './Album';
import Track from './Track';
import Footer from './Footer';
import Hero from './Hero';

const UserInfo = () => {

    return (
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
    )
}

export default UserInfo