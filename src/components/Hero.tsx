import { motion } from 'motion/react';
import { Typewriter } from 'react-simple-typewriter';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { cn } from '../utils';

export default function Hero() {
  const socials = [
    { icon: Github, href: 'https://github.com/BerkKilincer-dev', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/berk-kılınçer-61b784254', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:berkkilincer@gmail.com', label: 'Email' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10"
      >
        <h1 
          className="text-6xl md:text-8xl font-bold mb-4 glitch-hover tracking-tighter"
          data-text="Berk Kılınçer"
        >
          Berk Kılınçer
        </h1>
        
        <div className="h-8 text-xl md:text-2xl text-cyber-cyan font-mono mb-8">
          <Typewriter
            words={[
              'AI Engineer @ Amazon',
              'LLM & Computer Vision Specialist',
              'Software Engineering Student'
            ]}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={2000}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-cyber-cyan text-neural-black font-bold rounded-full border-glow transition-all hover:bg-white cursor-pointer"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 border border-cyber-cyan text-cyber-cyan font-bold rounded-full hover:bg-cyber-cyan/10 transition-all flex items-center gap-2 cursor-pointer"
          >
            <FileText size={20} />
            Download CV
          </motion.a>
        </div>

        <div className="flex justify-center gap-6">
          {socials.map((social, i) => (
            <motion.a
              key={i}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5, color: '#00f2ff' }}
              className="text-white/60 transition-colors"
              aria-label={social.label}
            >
              <social.icon size={28} />
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-xs uppercase tracking-[0.3em] font-mono">Scroll to Explore</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-px h-12 bg-gradient-to-b from-cyber-cyan to-transparent"
        />
      </motion.div>
    </section>
  );
}
