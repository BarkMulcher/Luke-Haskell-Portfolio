import Cowboy from '../images/cowboy.jpg';

export default function Portfolio() {
    return (

        <div>
            <h1 className="page-header-text">
                My Work
            </h1>
            <section class="section cards is-transparent">
                    <div class="columns is-mobile is-multiline is-centered">
                        <div class="card m-1 card-equal-height has-background-grey-light">
                            <div class="column is-narrow">
                                <header class="card-header">
                                    <div class="has-text-centered">
                                        <figure class="image is-128x128">
                                            <img src={require('../images/pj2homepageScreenshot.jpg')}  />
                                        </figure>
                                    </div>
                                </header>
                                <h5 class="title is-4 has-text-centered">
                                    Index Mori
                                </h5>
                                <a class="pl-6 subtitle is-5 has-text-centered" href='https://serene-shelf-90086.herokuapp.com' target="_blank"
                    rel="noreferrer noopener">
                                    Deployed URL
                                </a>
                                <div class="card-content">
                                    <div class="box">
                                        <p>
                                            A free online bequeathment site.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 card-equal-height has-background-grey-light">
                            <div class="column">
                                <header class="card-header">
                                    <div class="has-text-centered">
                                        <figure class="image is-128x128">
                                            <img src={require('../images/catapi.png')} />
                                        </figure>
                                    </div>
                                </header>
                                <h5 class="title is-4 has-text-centered">
                                    Cat Facts API
                                </h5>
                                <a class="pl-6 subtitle is-5 has-text-centered" href="https://heatleyj7.github.io/cat-api-project/" target="_blank"
                    rel="noreferrer noopener">
                                    Deployed URL
                                </a>
                                <div class="card-content">
                                    <div class="box is-flex-wrap-wrap">
                                        <p className='card-info'>
                                            A site implementing two APIs as part of a student group project
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 card-equal-height has-background-grey-light">
                            <div class="column">
                                <header class="card-header">
                                    <div class="has-text-centered">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" src={Cowboy} />
                                        </figure>
                                    </div>
                                </header>
                                <h5 class="title is-4 has-text-centered">
                                    Cloris
                                </h5>
                                <p class="pl-6 subtitle is-5 has-text-centered">
                                    Engineer
                                </p>
                                <div class="card-content">
                                    <div class="box">
                                        <p>

                                        </p>
                                    </div>
                                    <div class="box">
                                        <p>

                                        </p>
                                    </div>
                                    <div class="box">

                                    </div>
                                </div>
                            </div>

                        </div>
                        <div class="card m-1 card-equal-height has-background-grey-light">
                            <div class="column">
                                <header class="card-header">
                                    <div class="has-text-centered">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" src={Cowboy} />
                                        </figure>
                                    </div>
                                </header>
                                <h5 class="title is-4 has-text-centered">
                                    Stammer
                                </h5>
                                <p class="pl-6 subtitle is-5 has-text-centered">
                                    Engineer
                                </p>
                                <div class="card-content">
                                    <div class="box">
                                        <p>ID: 267</p>
                                    </div>
                                    <div class="box">
                                        <p>
                                            Email: <br />
                                            Stammy.PiperCub@RealCorp.net
                                        </p>
                                    </div>
                                    <div class="box">
                                        <p>
                                            Github: https://github.com/user7
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 card-equal-height has-background-grey-light">
                            <div class="column is-narrow">
                                <header class="card-header">
                                    <div class="has-text-centered">
                                        <figure class="image is-128x128">
                                            <img class="is-rounded" src={Cowboy} />
                                        </figure>
                                    </div>
                                </header>
                                <h5 class="title is-4 has-text-centered">
                                    Pubert
                                </h5>
                                <p class="pl-6 subtitle is-5 has-text-centered">
                                    "Intern"
                                </p>
                                <div class="card-content">
                                    <div class="box">
                                        <p>ID: 762</p>
                                    </div>
                                    <div class="box">
                                        <p>Email:
                                        </p>
                                    </div>
                                    <div class="box">
                                        <p>Institution: Hollywood Upstairs Medical Skool</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </div>

    )
}