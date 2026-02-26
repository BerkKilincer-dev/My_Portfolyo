import { motion } from 'motion/react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative py-24 px-6 border-t border-white/10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-cyber-cyan/5 -z-10" />
      
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-12 tracking-tighter">
            Let's build the future of <span className="text-cyber-cyan italic">Intelligence.</span>
          </h2>
          
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4 text-white/60">
              <div className="p-3 bg-white/5 rounded-xl">
                <MapPin size={24} className="text-cyber-cyan" />
              </div>
              <span className="text-lg">Bursa / Karabük, Turkey</span>
            </div>
            <div className="flex items-center gap-4 text-white/60">
              <div className="p-3 bg-white/5 rounded-xl">
                <Mail size={24} className="text-cyber-cyan" />
              </div>
              <span className="text-lg">berkkilincer@gmail.com</span>
            </div>
          </div>
        </motion.div>
      </div>

      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/30 text-sm font-mono">
        <p>Designed & Coded by Berk Kılınçer © 2026</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-cyber-cyan transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-cyber-cyan transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
