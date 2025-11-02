import { useState } from "react";

export const Contact = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        message: ""
    });


    const handleInput = (e) => {
        console.log(e);
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(user);
    }


    return <>
         <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-two-cols">
                            <div className="registration-image">
                                <h1 className="main-heading mb-3">Contact form</h1>

                                <img src="/images/support.png"
                                    alt="contact form"
                                    width="500" height="500"
                                />
                            </div>

                            {/* lets tackle contact form  */}
                            <div className="contact-form">
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input 
                                            type="text" 
                                            name="username" 
                                            placeholder="username" 
                                            id="username" 
                                            required 
                                            autoComplete="off" 
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input 
                                            type="email" 
                                            name="email" 
                                            placeholder="enter your email" 
                                            id="email" 
                                            required 
                                            autoComplete="off" 
                                            onChange={handleInput}
                                           
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="message">Message</label>
                                        <textarea 
                                            placeholder="enter your message" 
                                            id="message" 
                                            required 
                                            autoComplete="off" 
                                            rows="8"
                                            cols="30"
                                            onChange={handleInput}
                                        />
                                    </div>
                                   
                                    <br />
                                    <button type="submit" className="btn btn-submit">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>

                <section>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14081.167936066393!2d85.48911284999998!3d27.6524689!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb0f513357f87d%3A0x24b892bef4974fc7!2sBRAMHYENI%20TEMPLE!5e1!3m2!1sen!2snp!4v1762052163987!5m2!1sen!2snp" width={600} height={450}  loading="lazy" allowFullScreen = "" referrerPolicy="no-referrer-when-downgrade"></iframe>
                </section>
            </section>
    </>;
};