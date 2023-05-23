import React from "react";
import '../ui/projects.css'
import { ProjectsData } from "../components/ProjectsData";
const Projects = () => {
        return (
            <section id="projects" className="">
                <div className="container text-center">
                    <div className="flex flex-col w-full">
                        <h1 className="text-3xl font-medium title-font mb-2 text-black">
                            My projects
                        </h1>
                        <p className="">
                        If you can find them, text me (really)
                        </p>
                    </div>
                    <div className="flex flex-wrap">
                        {ProjectsData.map((project) => (
                            <a
                                href={project.link}
                                className="sm:w-1/2 w-100 p-4"
                            >
                                <div className="flex relative">
                                    <div className="">
                                        <h2 className="mb-1">
                                            {project.subtitle}
                                        </h2>
                                        <h1 className="">
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