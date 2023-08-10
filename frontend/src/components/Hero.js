import { Link } from 'react-router-dom';

const Hero = () => {

    return (
        <div className="container__hero">
            <div className="container__hero__full typewriter">
                <div className="container__fall__grid">
                    <div className="fall slow">1</div>
                    <div className="fall slow">0</div>
                    <div className="fall fast">1</div>
                    <div className="fall fast">0</div>
                    <div className="fall slow">1</div>
                    <div className="fall slow">0</div>
                    <div className="fall fast">1</div>
                    <div className="fall fast">0</div>
                    <div className="fall slow">1</div>
                    <div className="fall slow">0</div>
                    <div className="fall fast">1</div>
                    <div className="fall fast">0</div>
                    <div className="fall slow">1</div>
                    <div className="fall slow">0</div>
                    <div className="fall fast">1</div>
                    <div className="fall fast">0</div>
                    <div className="fall slow">1</div>
                    <div className="fall slow">0</div>
                    <div className="fall fast">1</div>
                    <div className="fall fast">0</div>
                </div>
                <div className="wrapper">
                    <h2>Spotify AI</h2>
                    <p className="description">Use an supervised machine learning algorithm to make a brand new playlist with your favorite songs!</p>
                    <Link to='/ml' ><button id="btnMadePlaylist">Check it out</button></Link>
                </div>
            </div>

        </div >
    )
}

export default Hero