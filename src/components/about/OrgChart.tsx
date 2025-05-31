import { motion } from 'framer-motion';
import { useState } from 'react';
import ScrollReveal from '../ScrollReveal';

type TeamMember = {
  name: string;
  role: string;
  secondaryRole?: string;
  image?: string;
};

export default function OrgChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const teamMembers: TeamMember[] = [
    {
      name: 'Melih Özkan',
      role: 'Chief Executive Officer',
      secondaryRole: 'Project Manager',
      image: '/team/melih.jpg'
    },
    {
      name: 'Xavier Hofmann',
      role: 'Project Manager',
      image: '/team/xavier.jpg'
    },
    {
      name: 'Burak Zendeli',
      role: 'Cloud Architect',
      image: '/team/burak.jpg'
    },
    {
      name: 'Stefan Müller',
      role: 'Legal Advisor',
      image: '/team/stefan.jpg'
    },
    {
      name: 'Noé Gabriel',
      role: 'Full Stack Developer',
      image: '/team/noe.jpg'
    },
    {
      name: 'Mohamed Nafsi',
      role: 'Full Stack Developer',
      image: '/team/mohamed.jpg'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-swiss-navy mb-4">Unser Team</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Experten mit Leidenschaft für Innovation und Kundenservice
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-12">
          {teamMembers.map((member, index) => (
            <ScrollReveal key={member.name} delay={0.1 * index}>
              <motion.div
                whileHover={{ y: -5 }}
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="relative bg-gradient-secondary p-8 rounded-xl shadow-md border border-gray-100 h-full flex flex-col cursor-pointer"
                role="button"
                aria-expanded={activeIndex === index}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveIndex(activeIndex === index ? null : index);
                    e.preventDefault();
                  }
                }}
              >
                <div className="flex flex-col items-center mb-6">
                  <div className="w-40 h-40 rounded-xl bg-gray-200 overflow-hidden mb-4 shadow-md">
                    {member.image ? (
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=0D2644&color=fff&size=160`;
                        }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-swiss-navy text-white text-3xl font-bold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </div>
                    )}
                  </div>
                  <div className="text-center">
                    <h3 className="text-2xl font-semibold text-swiss-navy">{member.name}</h3>
                    <p className="text-lg text-gray-700 mt-1">{member.role}</p>
                    {member.secondaryRole && (
                      <p className="text-gray-500 mt-1">{member.secondaryRole}</p>
                    )}
                  </div>
                </div>
                
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ 
                    opacity: activeIndex === index ? 1 : 0,
                    height: activeIndex === index ? 'auto' : 0
                  }}
                  className="overflow-hidden"
                >
                  <div className="pt-4 border-t border-gray-200 mt-2">
                    <h4 className="font-medium text-swiss-navy mb-2 text-center">Kontakt</h4>
                    <p className="text-gray-600 text-center">
                      <a href={`mailto:${member.name.toLowerCase().replace(' ', '.')}@suissefocus.ch`} className="hover:text-swiss-red">
                        {member.name.toLowerCase().replace(' ', '.')}@suissefocus.ch
                      </a>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
} 