import { motion } from 'motion/react';
import { ExternalLink, Github, Cpu, Brain, Activity, Globe } from 'lucide-react';

const projects = [
  {
    title: 'Hybrid Stock Prediction System',
    subtitle: 'TÜBİTAK 2209-A Research Project',
    description: 'Predicting BIST Banking Index (XBANK) trends by fusing quantitative time-series data with qualitative insights from news, TCMB minutes, and social media. Utilizes Turkish-specific LLMs for sentiment extraction and LSTM/GRU architectures for hybrid forecasting.',
    icon: Brain,
    size: 'large',
    tags: ['Python', 'LLM', 'BERT', 'LSTM', 'GRU', 'NLP', 'BIST'],
    features: [
      'Multi-source qualitative data integration (KAP, TCMB, News)',
      'Turkish-specific LLM (BERT-based) sentiment analysis',
      'Hybrid Deep Learning architecture (LSTM/GRU)',
      'Real-time web scraping and API synchronization'
    ],
    color: 'from-cyber-cyan/20 to-transparent'
  },
  {
    title: 'Social Robot',
    subtitle: 'AI-Driven Interaction',
    description: 'Robot with facial expressions and conversational intelligence powered by real-time neural processing.',
    icon: Cpu,
    size: 'medium',
    tags: ['Robotics', 'Computer Vision', 'C++'],
    color: 'from-deep-amethyst/20 to-transparent'
  },
  {
    title: 'Medical AI',
    subtitle: 'Skin Cancer Classification',
    description: 'CNN-based diagnostic tool using the HAM10000 dataset for early detection of skin lesions.',
    icon: Activity,
    size: 'medium',
    tags: ['TensorFlow', 'CNN', 'Healthcare'],
    color: 'from-matrix-green/20 to-transparent'
  },
  {
    title: 'GıdaKöprüsü',
    subtitle: 'Full-Stack Solution',
    description: 'Comprehensive platform built with Blazor and ASP.NET Core Web API for food supply chain management.',
    icon: Globe,
    size: 'small',
    tags: ['C#', 'Blazor', 'ASP.NET Core'],
    color: 'from-white/10 to-transparent'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Project <span className="text-cyber-cyan font-mono">_MATRIX</span></h2>
        <p className="text-white/50 max-w-2xl mx-auto">A deep-dive into technical implementations and research-driven solutions.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 flex flex-col justify-between hover:border-cyber-cyan/30 transition-all ${
              project.size === 'large' ? 'md:col-span-2 md:row-span-2' : ''
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-6">
                <div className="p-3 bg-white/5 rounded-2xl group-hover:bg-cyber-cyan/10 transition-colors">
                  <project.icon className="text-cyber-cyan" size={32} />
                </div>
                <div className="flex gap-2">
                  <a href="#" className="p-2 hover:text-cyber-cyan transition-colors cursor-pointer"><Github size={20} /></a>
                  <a href="#" className="p-2 hover:text-cyber-cyan transition-colors cursor-pointer"><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <h3 className="text-sm font-mono text-cyber-cyan uppercase tracking-widest mb-2">{project.subtitle}</h3>
              <h4 className="text-2xl font-bold mb-4 group-hover:text-glow transition-all">{project.title}</h4>
              <p className="text-white/60 leading-relaxed mb-6">{project.description}</p>
              
              {project.features && (
                <ul className="space-y-2 mb-8">
                  {project.features.map((feature, k) => (
                    <li key={k} className="flex items-center gap-2 text-sm text-white/50">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyber-cyan/50" />
                      {feature}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="relative z-10 flex flex-wrap gap-2">
              {project.tags.map((tag, j) => (
                <span key={j} className="px-3 py-1 bg-white/5 rounded-full text-xs font-mono text-white/40 border border-white/5">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
