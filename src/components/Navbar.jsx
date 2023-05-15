import React from "react";
import '../ui/navbar.css'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <header className="sticky-top z-9">
        <div className="container-fluid">
  <div className="row mx-auto p-5 d-flex justify-content-between align-items-center">
    <div className="col-auto">
      <NavLink to="/" className="">
        Karim Taha
      </NavLink>
    </div>
    <div className="col-auto">
      <nav className="flex flex-wrap items-center text-base justify-center">
        <NavLink to="/projects" className="mr-5">
          Projects
        </NavLink>
      </nav>
    </div>
    <div className="col-auto">
      <NavLink
        to="/contacts"
        className="inline-flex items-center">
        Hire Me
      </NavLink>
    </div>
  </div>
</div>

    </header>
    )
}