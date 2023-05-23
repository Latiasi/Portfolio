import React from 'react';
import "../ui/contacts.css"
export const Contacts = () => {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");

    function encode(data) {
        return Object.keys(data)
            .map(
                (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
            )
            .join("&");
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", name, email, message }),
        })
            .then(() => alert("Message sent!"))
            .catch((error) => alert(error));
    }
    return (
        <section id="contacts" className="relative">
            <div className="container px-5 py-10 mx-auto">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4">
                        <div className="position-relative">
                            <iframe
                                title="map"
                                className="w-100"
                                height="100%"
                                style={{ filter: "opacity(0.7)" }}
                                src="https://www.google.com/maps/embed/v1/place?q=Sharpstown+International+School&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                            />
                            <div className="">
                                <h2 className="font-semibold text-black text-xs mb-1">
                                    ADDRESS
                                </h2>
                                <p className="text-black mt-1">
                                    Sharpstown International School
                                </p>
                                <h2 className="font-semibold text-black text-xs">
                                    EMAIL
                                </h2>
                                <a href="mailto:tkareem2301@gmail.com" className="text-indigo-400">
                                    tkareem2301@gmail.com
                                </a>
                                <h2 className="font-semibold text-black text-xs mt-4">
                                    PHONE
                                </h2>
                                <p className="">+1(832)-640-6305</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <form netlify name="contact" onSubmit={handleSubmit} className="">
                            <h2 className="text-black text-3xl mb-4 font-medium">
                                Hire Me
                            </h2>
                            <p className="text-black">
                                 Please =)
                            </p>
                            <div className="mb-4">
                                <label htmlFor="name" className="mb-1" for="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    id="name"
                                    name="name"
                                    className="form-control"
                                    placeholder='Enter your name'
                                    onChange={(e) => setName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="mb-1" for="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    required
                                    name="email"
                                    placeholder='example@meow.com'
                                    className="form-control"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="message" className="mb-1" for="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    name="message"
                                    className="form-control"
                                    placeholder='Enter your message...'
                                    rows="3"
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                                
                            </div>
                            <button
                                type="submit"
                                className="btn btn-dark">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contacts;

