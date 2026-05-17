type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    tech: string[];
    gitHub: string;
    demo: string;
};

function ProjectCard({
    title,
    description,
    image,
    tech,
    gitHub,
    demo,
}: ProjectCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm transition-transform duration-300 hover:scale-105">

            <img
                src={image}
                alt={title}
                className="w-full h-52 object-cover"
            />

            <div className="p-6">

                <h2 className="text-2xl font-bold mb-2">
                    {title}
                </h2>

                <p className="text-gray-600 mb-4">
                    {description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                    {tech.map((item) => (
                        <span
                            key={item}
                            className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                        >
                            {item}
                        </span>
                    ))}
                </div>

                <div className="flex gap-4">

                    <a
                        href={demo}
                        target="_blank"
                        className="bg-black text-white px-4 py-2 rounded-lg"
                    >
                        Live Demo
                    </a>

                    <a
                        href={gitHub}
                        target="_blank"
                        className="border px-4 py-2 rounded-lg"
                    >
                        GitHub
                    </a>

                </div>

            </div>

        </div>

    );
}

export default ProjectCard;