import ProjectCard from "../components/ProjectCard/ProjectCard";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard"
import projects from "../data/projects";

function HomePage() {
    return (
        <div className="min-h-screen bg-gray-100">

            <Navbar />

            <div className="min-h-screen flex items-center justify-center bg-gray-100">

                <ProfileCard />
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-8">

                {projects.map((project) => (
                    <ProjectCard
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        tech={project.tech}
                        gitHub={project.github}
                        demo={project.demo}
                    />
                ))}

            </div>
        </div>
    );
}

export default HomePage;