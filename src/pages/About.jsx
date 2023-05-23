import '../ui/about.css'
import Animation from '../components/Animation'
import { NavLink } from 'react-router-dom'
const About = () => {
    return (
        <section id="about" className="d-flex align-items-center">
            <div className='anim' style={{pointerEvents: 'none'}}>
             <Animation /> 
            </div> 
          <div className="container">
            <div className="row  justify-content-center">
              <div className="col-lg-8">
                <div className="text-center user-select-none">
                  <div className="wave">
                    <span style={{ "--i": "1" }}>H</span>
                    <span style={{ "--i": "2" }}>E</span>
                    <span style={{ "--i": "3" }}>L</span>
                    <span style={{ "--i": "4" }}>L</span>
                    <span style={{ "--i": "5" }}>O</span>
                    <span style={{ "--i": "6" }}>!</span>
                  </div>
                  <h1 className="">My name is Karim and this is my website</h1>
                  <div className="d-flex justify-content-center mt-4">
                    <NavLink to="/contacts" className="btn btn-dark btn-lg mr-4">
                      Text me!
                    </NavLink>
                    <NavLink to="/projects" className="btn btn-dark btn-lg">
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