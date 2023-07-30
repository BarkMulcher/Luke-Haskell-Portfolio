export default function About() {
    return (
        <div className="container">
            <section className="col">
                <div className="card col s12 m9 l6 grey">
                    <figure className="col s12 m3 center-align">
                        <img alt='LukeHaskell' className='responsive-img' src={require('../images/captain-luke.jpg')} />
                    </figure>
                    <h1 className="page-header-text">
                        Luke Haskell
                    </h1>
                    <p className="center-align flow-text">
                        I am a 35 year old web developer from Southern Maine. I have an intense love for learning new things, and have extended
                        this passion to web development. During and after some time in the military, I trotted the globe,
                        and I believe that experience and perspective is of great benefit. I spent eight years in the
                        semiconductor manufacturing field, an industry whose existence relies on the innovation and
                        implementation
                        of the world's most cutting-edge technology. My experience in that realm is what led me to continue
                        my
                        personal growth in web development. The dedication required in that role remains with me,
                        and shines through to my new craft.
                    </p>
                </div>
            </section>

        </div>
    )
}