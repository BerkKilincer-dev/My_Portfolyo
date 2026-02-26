import { motion } from 'motion/react';

const skillGroups = [
  {
    title: 'Programming Languages',
    skills: [
      { name: 'Python', level: 'Advanced' },
      { name: 'C', level: 'Advanced' },
      { name: 'Java', level: 'Intermediate' },
      { name: 'C#', level: 'Intermediate' },
      { name: 'SQL', level: 'Intermediate' },
      { name: 'Apex & Rust', level: 'Intermediate' }
    ]
  },
  {
    title: 'Artificial Intelligence',
    skills: [
      { name: 'Neural Networks', level: 'Advanced' },
      { name: 'Deep Learning', level: 'Advanced' },
      { name: 'Machine Learning', level: 'Advanced' },
      { name: 'Image Processing', level: 'Advanced' }
    ]
  },
  {
    title: 'Tools & Frameworks',
    skills: [
      { name: 'PyTorch & TensorFlow', level: 'Advanced' },
      { name: 'OpenCV & Scikit-learn', level: 'Advanced' },
      { name: 'Pandas & NumPy', level: 'Advanced' },
      { name: 'Tkinter & PyQt5', level: 'Advanced' }
    ]
  },
  {
    title: 'Databases & Testing',
    skills: [
      { name: 'MySQL', level: 'Advanced' },
      { name: 'Selenium & xUnit', level: 'Advanced' },
      { name: 'Apache JMeter', level: 'Advanced' },
      { name: 'Postman', level: 'Advanced' }
    ]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech <span className="text-cyber-cyan font-mono">_STACK</span></h2>
          <div className="h-1 w-20 bg-cyber-cyan" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                <span className="text-cyber-cyan font-mono text-sm">0{i + 1}</span>
                {group.title}
              </h3>
              <div className="space-y-6">
                {group.skills.map((skill, j) => (
                  <div key={j} className="group">
                    <div className="flex justify-between mb-2">
                      <span className="text-white/80 group-hover:text-cyber-cyan transition-colors">{skill.name}</span>
                      <span className="text-white/30 font-mono text-xs uppercase tracking-tighter">{skill.level}</span>
                    </div>
                    <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: skill.level === 'Advanced' ? '90%' : skill.level === 'Associate' ? '75%' : '60%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (j * 0.1) }}
                        className="h-full bg-gradient-to-r from-cyber-cyan to-deep-amethyst"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
