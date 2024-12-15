import React from 'react';
import { Beaker, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Beaker className="h-8 w-8 text-purple-500" />
              <span className="text-white text-xl font-bold">AGNU</span>
            </div>
            <p className="mb-4">
              Alpha Gamma Nu - Fostering innovation and research excellence in
              the academic community.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-purple-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="https://www.linkedin.com/company/iitm-agnu"
                className="hover:text-purple-500 transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-purple-500 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-purple-500 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#events"
                  className="hover:text-purple-500 transition-colors"
                >
                  Events
                </a>
              </li>
              <li>
                <a
                  href="#team"
                  className="hover:text-purple-500 transition-colors"
                >
                  Team
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li>IIT Madras, Chennai, Tamil Nadu, India</li>
              <li>AGNU Building, Room 456</li>
              <li>contact@agnu.iitm.ac.in</li>
              <li>+91 12345-67890</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} AGNU. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
