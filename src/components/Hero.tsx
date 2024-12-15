import React from 'react';
import { ArrowRight, Rocket, Brain, Users } from 'lucide-react';

const Hero = () => {
  return (
    <div id="home" className="min-h-screen flex items-center bg-gray-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Innovate. Research.
              <span className="text-purple-500"> Transform.</span>
            </h1>
            <p className="text-gray-300 text-lg mb-8">
              AGNU is where brilliant minds converge to drive innovation, conduct groundbreaking research, and build the startups of tomorrow.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-colors"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#contact"
                className="border border-purple-600 text-purple-400 hover:bg-purple-600 hover:text-white px-6 py-3 rounded-lg transition-colors"
              >
                Join Us
              </a>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <div className="bg-gray-800 p-6 rounded-xl">
                <Rocket className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Startups</h3>
                <p className="text-gray-400">Launch your innovative ideas with our support system</p>
              </div>
              <div className="bg-gray-800 p-6 rounded-xl">
                <Brain className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Research</h3>
                <p className="text-gray-400">Conduct cutting-edge research in various domains</p>
              </div>
            </div>
            <div className="space-y-6 mt-12">
              <div className="bg-gray-800 p-6 rounded-xl">
                <Users className="h-8 w-8 text-purple-500 mb-4" />
                <h3 className="text-white text-xl font-semibold mb-2">Community</h3>
                <p className="text-gray-400">Connect with like-minded innovators</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;