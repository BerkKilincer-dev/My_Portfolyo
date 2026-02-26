import { motion } from 'motion/react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const experiences = [
  {
    company: 'Amazon',
    role: 'Intern AI Engineer',
    team: 'Fulfillment Technologies & Robotics',
    period: 'Nov 2025 - Present',
    description: 'Designing and training artificial neural networks for real-world robotics applications. Optimizing fulfillment processes through advanced AI models.',
    color: 'cyber-cyan'
  },
  {
    company: 'CA Engineering BV',
    role: 'Intern AI Engineer',
    period: 'Jan 2026 - Present',
    description: 'Focusing on specialized LLMs for computer vision, data mining, and scalable AWS cloud algorithms. Implementing state-of-the-art architectures for industrial solutions.',
    color: 'deep-amethyst'
  },
  {
    company: 'Etiya',
    role: 'QA Specialist',
    period: 'Previous',
    description: 'Developed automated test scripts using Python/Selenium. Conducted performance testing with JMeter to ensure system scalability and reliability.',
    color: 'matrix-green'
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
          Experience <span className="text-cyber-cyan font-mono text-2xl">_LOG</span>
        </h2>
        <div className="h-1 w-20 bg-cyber-cyan" />
      </motion.div>

      <div className="space-y-12">
        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative pl-8 border-l border-white/10 group"
          >
            <div className={`absolute left-[-5px] top-0 w-[9px] h-[9px] rounded-full bg-white group-hover:bg-cyber-cyan transition-colors shadow-[0_0_10px_rgba(255,255,255,0.5)]`} />
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:border-cyber-cyan/50 transition-all hover:bg-white/[0.07]">
              <div className="flex flex-wrap justify-between items-start gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyber-cyan transition-colors">
                    {exp.role}
                  </h3>
                  <div className="flex items-center gap-2 text-white/60 mt-1">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                    {exp.team && <span className="text-white/30">• {exp.team}</span>}
                  </div>
                </div>
                <div className="flex items-center gap-2 px-4 py-1 bg-white/5 rounded-full text-sm font-mono text-white/60">
                  <Calendar size={14} />
                  {exp.period}
                </div>
              </div>
              <p className="text-white/70 leading-relaxed max-w-3xl">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
