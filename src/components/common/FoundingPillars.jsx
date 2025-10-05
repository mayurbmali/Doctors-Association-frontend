import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FoundingPillars = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const foundingMembers = [
    {
      id: 1,
      name: "Dr. Prakash Desai",
      designation: "Senior Homoeopathic Consultant, Mumbai",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=faces",
      testimonial: "Instrumental in advancing homoeopathic practice across Maharashtra. The networking and continuous education opportunities are unmatched."
    },
    {
      id: 2,
      name: "Dr. Meera Kulkarni",
      designation: "Chief Medical Officer, Pune",
      image: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=faces",
      testimonial: "A visionary leader dedicated to establishing the highest standards of classical homoeopathy in our state."
    },
    {
      id: 3,
      name: "Dr. Rajesh Patil",
      designation: "Director, Homoeopathic Research Centre",
      image: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&h=500&fit=crop&crop=faces",
      testimonial: "Through CCMP, we've built a community that honors Hahnemann's legacy while embracing modern research and collaboration."
    },
    {
      id: 4,
      name: "Dr. Anjali Shah",
      designation: "Head of Education, CCMP Maharashtra",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=faces",
      testimonial: "Empowering the next generation of homoeopaths through continuous learning and classical principles is at the heart of our mission."
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-400 via-orange-300 to-yellow-300">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center text-white mb-16"
        >
          Meet Our Founding Pillars
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {foundingMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
              onMouseEnter={() => setHoveredCard(member.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="relative overflow-hidden rounded-2xl aspect-[3/5] group cursor-pointer">
                <div
                  className="absolute inset-0 bg-gradient-to-r from-orange-400 via-yellow-300 to-orange-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    backgroundSize: '200% 200%',
                    animation: hoveredCard === member.id ? 'borderGlow 3s ease infinite' : 'none'
                  }}
                />
                
                <div className="absolute inset-[3px] rounded-2xl overflow-hidden bg-white">
                  <div className="relative w-full h-full">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover transition-all duration-500 ${
                        hoveredCard === member.id ? 'blur-sm scale-105' : 'blur-0 scale-100'
                      }`}
                    />
                    
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent transition-opacity duration-500 ${
                        hoveredCard === member.id ? 'opacity-90' : 'opacity-70'
                      }`}
                    />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <motion.div
                        initial={false}
                        animate={{
                          y: hoveredCard === member.id ? -20 : 0,
                          opacity: hoveredCard === member.id ? 0 : 1
                        }}
                        transition={{ duration: 0.4 }}
                      >
                        <h3 className="text-lg font-bold mb-1">{member.name}</h3>
                        <p className="text-xs text-gray-200">{member.designation}</p>
                      </motion.div>
                      
                      <motion.div
                        initial={false}
                        animate={{
                          y: hoveredCard === member.id ? 0 : 40,
                          opacity: hoveredCard === member.id ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="absolute bottom-4 left-4 right-4"
                      >
                        <p className="text-sm leading-relaxed italic text-white font-medium">
                          "{member.testimonial}"
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </div>
                
                <div
                  className={`absolute inset-0 rounded-2xl shadow-lg transition-all duration-500 pointer-events-none ${
                    hoveredCard === member.id 
                      ? 'shadow-2xl shadow-orange-400/50 translate-y-[-8px]' 
                      : 'shadow-md shadow-black/20'
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default FoundingPillars;
