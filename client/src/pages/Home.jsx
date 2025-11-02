import { Analytics } from "../components/Analytics";

export const Home = () => {
    return (
        <>
            <main>
                <section className="section-hero">
                    <div className="container grid grid-two-cols">
                        <div className="hero-content">
                            <p>We are building a modern web application using the MERN stack.</p>
                            <h1>Welcome to the MERN Stack App</h1>
                            <p>This is a simple application demonstrating the MERN stack. It includes a client-side built with React, a server-side built with Node.js and Express, and a MongoDB database.</p>

                            <div className="btn btn-group">
                                <a href="/contact"><button className="btn">connect now</button></a>
                                <a href="/services"><button className="btn secondary-btn">learn more</button></a>
                            </div>
                        </div>

                        {/* hero images  */}
                        <div className="hero-image">
                            <img src="/images/home.png"
                                alt="coding together illustration"
                                width="400" height="500"
                            />
                        </div>
                    </div>
                </section>
            </main>

            {/* 2nd section */}
            <Analytics/>

            {/* 3rd section  */}
            <section className="section-hero">
                <div className="container grid grid-two-cols">

                    {/* hero images  */}
                    <div className="hero-image">
                        <img src="/images/design.png"
                            alt="coding together illustration"
                            width="400" height="500"
                        />
                    </div>

                    <div className="hero-content">
                        <p>We are here to help you</p>
                        <h1>Get Started Today</h1>
                        <p>
                            Ready to take the first step towards a more efficient and secure
                            IT infrastructure? Contact us today for a free consultation and
                            let's discuss how Thapa Technical can help your business thrive in
                            the digital age.
                        </p>
                        <div className="btn btn-group">
                            <a href="/contact"><button className="btn">connect now</button></a>
                            <a href="/services"><button className="btn secondary-btn">learn more</button></a>
                        </div>
                    </div>


                </div>
            </section>

        </>
    )
};