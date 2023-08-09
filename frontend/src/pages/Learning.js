import Header from '../components/Header';
import Footer from '../components/Footer';

const Learning = () => {
    return (
        <main className="ml__main">
            <div className='container__ml'>
                <Header hasGenerateBtn={false} />
                <section className='section__intro'>
                    <h2 style={{ textAlign: "left", marginLeft: "1.1em", marginBottom: "1em" }}>Learning</h2>
                    <p id="learning__paragraph">
                        Machine learning (ML) is an important component of the growing field of data science.
                        Through the use of statistical methods, algorithms are trained to make classifications or predictions, and to uncover key insights in data mining projects.
                        These insights subsequently drive decision making within applications and businesses, ideally impacting key growth metrics.
                        As big data continues to expand and grow, the market demand for data scientists will increase.
                        They will be required to help identify the most relevant business questions and the data to answer them.
                    </p>
                    <h4 style={{ textAlign: "left", marginLeft: "1.1em", marginBottom: "1em", marginTop: "1em", color: "#f7f7f7" }}>Machine learning algorithms are classified into 4 types:</h4>
                    <ol id="learning__list">
                        <li>Supervised Learning</li>
                        <li>Unsupervised Learning</li>
                        <li>Semi-supervised Learning</li>
                        <li>Reinforcement Learning</li>
                    </ol>
                    <p id="learning__paragraph">ML can be used for regression and classification problems.
                        ML regression problems are those where the model predicts the output as a continuous numerical value, e.g as “salary” or “weight” in a corporate scope of a company.
                        ML classification problems are those which require the given data set to be classified in two or more categories. For example, whether a person is suffering from a disease X (answer in Yes or No) can be termed as a classification problem.
                    </p>
                </section>
                <section className='section__classification'>
                    <h2 style={{ textAlign: "left", marginLeft: "1.1em", marginBottom: "1em" }}>Classification</h2>
                    <p id="learning__paragraph">
                        In this specific problem we are dealing with classification to determine the best look-up playlist to be created.
                        A list of songs of different genres will be used as positive and negative sample and your objective is to compose a playlist with the most dominant label (genre) in current playlist user saved list.
                        The workflow below shows how the algorithm will work throught the pipeline to clarify a little bit what machine learning it is in terms of programming.
                    </p>
                    <div className='draw__workflow'>
                        <div className='flex__row'>
                            <span style={{ fontSize: "2em", marginTop: "1em", marginRight: "1em" }}>CSV data</span>
                            <span id="right__arrow">→</span>
                            <span style={{ fontSize: "2em", marginTop: "1em", marginRight: "1em", marginLeft: "0.5em" }}>Learning</span>
                            <span id="right__arrow">→</span>
                            <span style={{ fontSize: "2em", marginTop: "1em", marginRight: "1em", marginLeft: "0.5em" }}>Classification</span>
                        </div>
                        <div className='flex__row'>
                            <div className='flex__column' style={{ marginRight: "3em" }}>
                                <small style={{ marginLeft: "2em" }}>features</small>
                                <small style={{ marginLeft: "4em" }}>pre-processing</small>
                                <small style={{ marginLeft: "0.2em" }}>labeling</small>
                            </div>
                            <div className='flex__column' style={{ marginRight: "3em" }}>
                                <small style={{ marginLeft: "4em" }}>train and test dataset</small>
                                <small style={{ marginLeft: "2em" }}>learning algorithm</small>
                                <small style={{ marginLeft: "6em" }}>cross validation</small>
                            </div>
                            <div className='flex__column' style={{ marginRight: "1em" }}>
                                <small style={{ marginLeft: "6em" }}>evaluation</small>
                                <small style={{ marginLeft: "4em" }}>prediction metrics</small>
                                <small style={{ marginLeft: "8em" }}>best model output</small>
                            </div>
                        </div>
                        <small style={{ marginTop: "2em", color: "#f9f9f9", fontWeight: "400", alignSelf: "flex-end", marginRight: "5em" }}>Workflow of ML</small>
                    </div>
                    <div>
                    </div>
                </section>
            </div>
            <div className='container__train'>
                <section className='section__train'>
                    <h2 style={{ textAlign: "center", marginBottom: "1em", marginTop: "2em" }}>Train</h2>
                    <p style={{ color: "#f7f7f7", fontWeight: "400" }}>First, let's train your model based on your current taste in song. <br />
                        Over each step, we will explain what happened, the feature's chosed, the learning algorithm used, and finally the metrics result. <br />
                        The first step will take a while. That's because the batch algorithm would gathered the data from spotify API to compose your CSV file.
                    </p>
                    <button id="btnTrain">Generate playlist</button>
                </section>
            </div>
            <Footer />
        </main>
    )
}

export default Learning