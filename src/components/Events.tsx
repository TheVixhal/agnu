import React from 'react';
import { Calendar, MapPin, Clock } from 'lucide-react';

const Events = () => {
  const events = [
    {
      title: 'Annual Innovation Summit',
      date: 'March 15, 2025',
      time: '9:00 AM - 5:00 PM',
      location: 'Main Auditorium',
      description:
        'Join us for a day of inspiring talks and networking with industry leaders.',
    },
    {
      title: 'Startup Pitch Competition',
      date: 'April 2, 2025',
      time: '2:00 PM - 6:00 PM',
      location: 'Innovation Hub',
      description:
        'Present your startup idea to potential investors and win funding.',
    },
    {
      title: 'Research Symposium',
      date: 'April 20, 2025',
      time: '10:00 AM - 4:00 PM',
      location: 'Research Center',
      description:
        'Showcase your research projects and collaborate with peers.',
    },
  ];

  return (
    <section id="events" className="bg-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Upcoming Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4">
                {event.title}
              </h3>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-purple-500" />
                  <span>{event.date}</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-purple-500" />
                  <span>{event.time}</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-purple-500" />
                  <span>{event.location}</span>
                </div>
              </div>
              <p className="mt-4 text-gray-400">{event.description}</p>
              <button className="mt-6 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors">
                Register Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
