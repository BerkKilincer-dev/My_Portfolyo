import { motion } from 'motion/react';
import { Award, ShieldCheck, GraduationCap, Database, Brain, Code, Terminal, Cpu, Zap } from 'lucide-react';

const certs = [
  {
    title: 'CS50’s Introduction to AI with Python',
    issuer: 'Harvard University',
    icon: GraduationCap,
    color: 'text-cyber-cyan'
  },
  {
    title: 'ML Engineer Associate',
    issuer: 'AWS',
    icon: ShieldCheck,
    color: 'text-deep-amethyst'
  },
  {
    title: 'Neural Networks and Deep Learning',
    issuer: 'DeepLearning.AI',
    icon: Brain,
    color: 'text-matrix-green'
  },
  {
    title: 'Make Agentic AI Work for You',
    issuer: 'IBM',
    icon: Brain,
    color: 'text-cyber-cyan'
  },
  {
    title: 'AI & ML Course | Simplilearn',
    issuer: 'IBM',
    icon: Award,
    color: 'text-deep-amethyst'
  },
  {
    title: 'Build Smarter AI with Embeddings',
    issuer: 'IBM',
    icon: Brain,
    color: 'text-matrix-green'
  },
  {
    title: 'Machine Learning with Python',
    issuer: 'IBM',
    icon: Award,
    color: 'text-cyber-cyan'
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Amazon',
    icon: Cpu,
    color: 'text-deep-amethyst'
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Amazon',
    icon: Cpu,
    color: 'text-matrix-green'
  },
  {
    title: 'Database Design & SQL',
    issuer: 'Oracle',
    icon: Database,
    color: 'text-cyber-cyan'
  },
  {
    title: 'Python GUI (Tkinter & PyQt5)',
    issuer: 'Professional Training',
    icon: Code,
    color: 'text-deep-amethyst'
  },
  {
    title: 'Software Test Automation',
    issuer: 'Professional Training',
    icon: Terminal,
    color: 'text-matrix-green'
  },
  {
    title: 'Performance Testing (JMeter)',
    issuer: 'Professional Training',
    icon: Zap,
    color: 'text-cyber-cyan'
  }
];

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            Certification <span className="text-cyber-cyan font-mono text-2xl">_VAULT</span>
          </h2>
          <div className="h-1 w-20 bg-cyber-cyan" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-6 bg-white/5 border border-white/10 rounded-2xl flex items-center gap-6 group hover:border-cyber-cyan/30 transition-all"
            >
              <div className={`p-4 rounded-xl bg-white/5 group-hover:bg-cyber-cyan/10 transition-colors ${cert.color}`}>
                <cert.icon size={32} />
              </div>
              <div>
                <h3 className="font-bold text-lg leading-tight mb-1 group-hover:text-cyber-cyan transition-colors">
                  {cert.title}
                </h3>
                <p className="text-white/40 text-sm font-mono uppercase tracking-wider">{cert.issuer}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
