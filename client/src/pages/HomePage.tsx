import ProjectCard from "../components/ProjectCard/ProjectCard";
import Navbar from "../components/Navbar/Navbar";
import ProfileCard from "../components/ProfileCard/ProfileCard"
import projects from "../data/projects";
import { useEffect, useState } from "react";
import { fetchGitHubRepos } from "../services/githubApi";
import type { GitHubPage } from "../types/github";

function HomePage() {
    const [repos, setRepos] = useState<GitHubPage[]>([]);
    

    useEffect(() => {
        async function loadRepos() {
            const data = await fetchGitHubRepos();

            console.log(data);

            setRepos(data);
        }

        loadRepos();
    }, []);

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
            <div className="mt-20 px-8">

                <h2 className="text-3xl font-bold mb-6">
                    Live GitHub Repositories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    {repos.map((repo: any) => (
                        <div
                            key={repo.id}
                            className="bg-white p-6 rounded-2xl shadow-md"
                        >

                            <h3 className="text-xl font-bold mb-2">
                                {repo.name}
                            </h3>

                            <p className="text-gray-600 mb-4">
                                {repo.description}
                            </p>

                            <p className="text-sm text-gray-500">
                                {repo.language}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}

export default HomePage;