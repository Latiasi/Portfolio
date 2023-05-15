import '../ui/about.css'

const About = () => {
    return (
        <section id="about" className="">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center">
                            <h1 className="display-4">Hello!</h1>
                            <h2 className="mb-5">My name is Karim and this is my website</h2>
                            <div className="flex justify-center">
                                <a
                                    href="#contacts"
                                    className="btn btn-secondary btn-lg">
                                    Text me!
                                </a>
                                <a
                                    href="#projects"
                                    className="btn btn-primary btn-lg ml-4">
                                    See My Past Work
                                </a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </section>
    )
}
export default About;