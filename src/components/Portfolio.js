

export default function Portfolio() {
    return (

        <div>
            <h1 className="page-header-text">
                My Work
            </h1>
            <div className='container portfolio-container'>
                <section className="row">
                    <div className="col">
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Sheltr
                                    </div>
                                    <a className='card-image' href='https://sheltr.tech' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/sheltr.png')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>This is a MERN stack app developed for use by an animal shelter to reach potential adopters.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/derekson333/sheltr">GITHUB REPOSITORY</a>
                                        <a href='https://shelter.tech'>DEPLOYED LINK</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Reelistr
                                    </div>
                                    <a className='card-image' href='https://barkmulcher.gitlab.io/module3-project-gamma' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/judgement-day.jpg')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>A polished movie database React app with a Python back end.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://gitlab.com/barkmulcher/module3-project-gamma">GITHUB REPOSITORY</a>
                                        <a href='https://barkmulcher.gitlab.io/module-3-project-gamma'>DEPLOYED LINK</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Index Mori
                                    </div>
                                    <a className='card-image' href='https://serene-shelf-90086.herokuapp.com' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/indexmori.jpg')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>A spooky, Halloween-themed app for creating a will.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://serene-shelf-90086.herokuapp.com">Deployed Link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Weather Dashboard App
                                    </div>
                                    <a className='card-image' href='https://github.com/BarkMulcher/Weather-Dashboard' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/wthrdshbrd.png')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>A simple OpenWeather API app developed as part of student curriculum.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/BarkMulcher/Weather-Dashboard">GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Cat Facts App
                                    </div>
                                    <a className='card-image' href='https://barkmulcher.github.io/Cat-Facts-API/' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/catapi.png')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>A simple and lighthearted API project to retreive random cat pictures and cat facts.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://barkmulcher.github.io/Cat-Facts-API/">Deployed Link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Back-End README.md generator
                                    </div>
                                    <a className='card-image' href='https://github.com/BarkMulcher/README-generator' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/readmegen.jpg')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>A command-line-operated README.md generator utilizing inquirer NPM package that creates a README based on prompts.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/BarkMulcher/README-generator">GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Note-Taker App
                                    </div>
                                    <a className='card-image' href='https://github.com/BarkMulcher/Note-Taker-App' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/NoteTaker.jpg')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>A simple, mobile-friendly note-taking app. This app will be developed further to suit my own needs.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/BarkMulcher/Note-Taker-App">GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Tech Blog App
                                    </div>
                                    <a className='card-image' href='https://github.com/BarkMulcher/Tech-Blog' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/TechBlog.jpg')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>Tech Blog is an app for discussing anything tech. This app is fully functional, but under development.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://stormy-plains-75295.herokuapp.com/">Deployed Link</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col s12 m6 l6">
                                <div className='project-card grey card hoverable'>
                                    <div className='card-title white-text'>
                                        Team Profile Generator
                                    </div>
                                    <a className='card-image' href='https://github.com/BarkMulcher/Team-Profile-Generator' target="_blank"
                                        rel="noreferrer noopener">
                                        <img className='responsive-img' src={require('../images/TeamGen.jpg')} />
                                    </a>
                                    <div className='card-content white-text'>
                                        <p>This CLI-based team profile generator utilizes inquirer prompts to create your employee team, presented in an aesthetically pleasing page of cards.</p>
                                    </div>
                                    <div className="card-action">
                                        <a href="https://github.com/BarkMulcher/Team-Profile-Generator">GitHub Repository</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                </section>
            </div>
        </div>

    )
}