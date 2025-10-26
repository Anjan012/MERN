import React, { useState } from "react";

export const Login = () => {


    const [user, setUser] = useState({
        email: "",
        password: ""
    }); 

    const handleInput = (e) => {
        let name = e.target.name;
        let value = e.target.value;

        setUser({
            ...user,
            [name]: value
        })
    };

    // handling form submission
    const handleSubmit = (e) => { // e is the event object
        e.preventDefault();
        alert(user);
    };

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-two-cols">
                            <div className="login-image">
                                <img src="/images/login.png"
                                    alt="a boy is trying to fill login form"
                                    width="500" height="500"
                                />
                            </div>

                            <div className="login-form">
                                <h1 className="main-heading mb-3">Login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>

                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="enter your email"
                                            id="email"
                                            required
                                            autoComplete="off"
                                            value={user.email}
                                            onChange={handleInput}
                                           
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="enter your password"
                                            id="password"
                                            required
                                            autoComplete="off"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">Login Now</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>

        </>
    )
};