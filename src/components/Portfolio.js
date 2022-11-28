

export default function Portfolio() {
    return (

        <div>
            <h1 className="page-header-text">
                My Work
            </h1>
            <section className="row">
                <div className="col s12 m7 offset-m2 l5 offset-l1">
                    <div className='project-card grey card hoverable'>
                        <div className='card-title white-text'>
                            Index Mori
                        </div>
                        <a className='card-image' href='https://serene-shelf-90086.herokuapp.com' target="_blank"
                            rel="noreferrer noopener">
                            <img className='responsive-img' src={require('../images/indexmori.jpg')} />
                        </a>
                        <div className='card-content white-text'>
                            <p>A free online bequeathment app.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://serene-shelf-90086.herokuapp.com">Deployed Link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7 offset-m2 l5">
                    <div className='project-card grey card hoverable'>
                        <div className='card-title white-text'>
                            Index Mori
                        </div>
                        <a className='card-image' href='https://barkmulcher.github.io/Cat-Facts-API/' target="_blank"
                            rel="noreferrer noopener">
                            <img className='responsive-img' src={require('../images/catapi.png')} />
                        </a>
                        <div className='card-content white-text'>
                            <p>A simple and lighthearted API project to retreive random cat pictures and cat facts.</p>
                        </div>
                        <div class="card-action">
                            <a href="https://barkmulcher.github.io/Cat-Facts-API/">Deployed Link</a>
                        </div>
                    </div>
                </div>
                <div className="col s12 m7 offset-m2 l5 offset-l1">
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
                            <a href="https://github.com/BarkMulcher/Weather-Dashboard">Deployed Link</a>
                        </div>
                    </div>
                </div>


            </section>
        </div>

    )
}