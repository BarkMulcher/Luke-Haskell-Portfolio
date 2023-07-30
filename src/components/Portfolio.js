

export default function Portfolio() {
    return (

//         <div class="container">
//   <h2>Scrolling Card UI With CSS Grid</h2>
//   <ul class="cards">
//     <li class="card">
//       <div>
//         <h3 class="card-title">Service 1</h3>
//         <div class="card-content">
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//       </div>
//       <div class="card-link-wrapper">
//         <a href="" class="card-link">Learn More</a>
//       </div>
//     </li>
//     <li class="card">
//       <div>
//         <h3 class="card-title">Service 2</h3>
//         <div class="card-content">
//           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repudiandae magnam harum natus fuga et repellat in maiores.</p>
//         </div>
//       </div>
//       <div class="card-link-wrapper">
//         <a href="" class="card-link">Learn More</a>
//       </div>
//     </li>
//     <li class="card">
//       <div>
//         <h3 class="card-title">Service 3</h3>
//         <div class="card-content">
//           <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
//         </div>
//       </div>
//       <div class="card-link-wrapper">
//         <a href="" class="card-link">Learn More</a>
//       </div>
//     </li>
//     <li class="card">
//       <div>
//         <h3 class="card-title">Service 3</h3>
//         <div class="card-content">
//           <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
//         </div>
//       </div>
//       <div class="card-link-wrapper">
//         <a href="" class="card-link">Learn More</a>
//       </div>
//     </li>
//     <li class="card">
//       <div>
//         <h3 class="card-title">Service 3</h3>
//         <div class="card-content">
//           <p>Phasellus ultrices lorem vel bibendum ultricies. In hendrerit nulla a ante dapibus pulvinar eu eget quam.</p>
//         </div>
//       </div>
//       <div class="card-link-wrapper">
//         <a href="" class="card-link">Learn More</a>
//       </div>
//     </li>

//   </ul>
// </div>




        <div>
            <h1 className="page-header-text">
                My Work
            </h1>
            <section className="row">
                <div className="col s12">
                    <div className="section">
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
                        <div className="col s12 m6 l6 offset-s6">
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
                    </div >
                </div>
            </section>
        </div>

    )
}