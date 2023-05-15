import React from "react";
import '../ui/projects.css'
import { ProjectsData } from "../components/ProjectsData";
const Projects = () => {
        return (
            <section id="projects" className="">
                <div className="container text-center">
                    <div className="flex flex-col w-full mb-20">
                        <h1 className="text-3xl font-medium title-font mb-4 text-black">
                            My projects
                        </h1>
                        <p className="">
                        If you can find them, text me (really)
                        </p>
                    </div>
                    <div className="flex flex-wrap -m-4">
                        {ProjectsData.map((project) => (
                            <a
                                href={project.link}
                                key={project.image}
                                className="sm:w-1/2 w-100 p-4"
                            >
                                <div className="flex relative">
                                    <img
                                        alt="gallery"
                                        className="absolute inset-0 w-full h-full object-cover object-center"
                                        src={project.image}
                                    />
                                    <div className="">
                                        <h2 className="mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="mb-3">
                                            {project.title}
                                        </h1>
                                        <p className="">{project.description}</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        );
    };
export default Projects;