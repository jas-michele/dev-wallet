type ProjectCardProps = {
    title: string;
    description: string;
    image: string;
    tech: string[];
};

function ProjectCard({
    title,
    description,
    image,
    tech,
}: ProjectCardProps) {
     return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden max-w-sm">
      
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
          
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Live Demo
          </button>

          <button className="border px-4 py-2 rounded-lg">
            GitHub
          </button>

        </div>

      </div>

    </div>
  );
}

export default ProjectCard;