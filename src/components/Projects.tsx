import React from 'react';
import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'AI Research Lab',
      description: 'Developing cutting-edge AI solutions for real-world problems',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
      category: 'Research'
    },
    {
      title: 'Green Energy Initiative',
      description: 'Sustainable energy solutions for campus facilities',
      image: 'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=800',
      category: 'Startup'
    },
    {
      title: 'Biotech Innovation',
      description: 'Revolutionary biotechnology research and development',
      image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=800',
      category: 'Research'
    },
  ];

  return (
    <section id="projects" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <span className="text-purple-500 text-sm font-semibold">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white mt-2 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <button className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors">
                  Learn More <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;