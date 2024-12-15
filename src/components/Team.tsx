import { Linkedin, Mail } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Priyanshu Ghosh',
      role: 'President',
      image:
        'https://sharedp.com/wp-content/uploads/2024/05/madara-wallpaper-920x1024.jpg',
      linkedin: 'https://www.linkedin.com/in/pbshi/',
      email: 'pbshi@agnu.iitm.ac.in',
    },
    {
      name: 'Vishal Baraiya',
      role: 'Vice President',
      image:
        'https://i.pinimg.com/736x/92/fc/0b/92fc0b8eaea6ab3bfb51374110610e62.jpg',
      linkedin: 'https://www.linkedin.com/in/vixhal/',
      email: 'vixhal@agnu.iitm.ac.in',
    },
    {
      name: 'Itachi Uchiha',
      role: 'Research Director',
      image:
        'https://i.pinimg.com/originals/99/2a/95/992a95c733f446f18fee14dd10a086b9.jpg',
      linkedin: '#',
      email: 'itachi@agnu.iitm.ac.in',
    },
    {
      name: 'Gojo Sataro',
      role: 'Innovation Lead',
      image:
        'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9c2e9d59-ee54-490e-bf96-5497f587844f/dgctcxi-b10be94d-aa6d-41b6-aea1-3ee42da87b3f.jpg/v1/fill/w_1193,h_670,q_70,strp/gojo_4k_wallpaper_by_cyberxyt_dgctcxi-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjE1NiIsInBhdGgiOiJcL2ZcLzljMmU5ZDU5LWVlNTQtNDkwZS1iZjk2LTU0OTdmNTg3ODQ0ZlwvZGdjdGN4aS1iMTBiZTk0ZC1hYTZkLTQxYjYtYWVhMS0zZWU0MmRhODdiM2YuanBnIiwid2lkdGgiOiI8PTM4NDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.f8gpfms_nxFA7n5agznRVDQ547RtMEKSGsh5DVCXTD4',
      linkedin: '#',
      email: 'david.k@agnu.edu',
    },
  ];

  return (
    <section id="team" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-transform duration-300"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <div className="flex gap-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-purple-400 transition-colors"
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
