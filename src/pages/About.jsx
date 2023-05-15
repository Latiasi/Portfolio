import '../ui/about.css'
import Animation from '../components/Animation'
import { NavLink } from 'react-router-dom'
const About = () => {
    return (
        <section id="about" className="">
           <div className='anim' style={{pointerEvents: 'none'}}>
             <Animation /> 
            </div> 
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="text-center user-select-none">
                        <div className="wave">
                            <span style={{ "--i" : "1" }}>H</span>
                            <span style={{ "--i" : "2" }}>e</span>
                            <span style={{ "--i" : "3" }}>l</span>
                            <span style={{ "--i" : "4" }}>l</span>
                            <span style={{ "--i" : "5" }}>o</span>
                            <span style={{ "--i" : "6" }}>!</span>
                        </div>
                            <h2 className="mb-5">My name is Karim and this is my website</h2>
                            <div className="flex justify-content-center">
                                <NavLink
                                    to="/contacts"
                                    className="btn btn-secondary btn-lg">
                                    Text me!
                                </NavLink>
                                <NavLink
                                    to="/projects"
                                    className="btn btn-primary btn-lg ml-4">
                                    See My Past Work
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;