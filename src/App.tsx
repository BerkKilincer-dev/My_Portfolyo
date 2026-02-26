import NeuralBackground from './components/NeuralBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="relative min-h-screen font-sans selection:bg-cyber-cyan/30 selection:text-cyber-cyan">
      <NeuralBackground />
      
      {/* Navigation Overlay (Optional but nice for UX) */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-8 flex justify-between items-center pointer-events-none">
        <div className="text-xl font-bold tracking-tighter pointer-events-auto cursor-default">
          BK<span className="text-cyber-cyan">.AI</span>
        </div>
        <div className="hidden md:flex gap-8 text-xs font-mono uppercase tracking-widest pointer-events-auto">
          <a href="#experience" className="hover:text-cyber-cyan transition-colors">Experience</a>
          <a href="#projects" className="hover:text-cyber-cyan transition-colors">Projects</a>
          <a href="#skills" className="hover:text-cyber-cyan transition-colors">Stack</a>
          <a href="#certifications" className="hover:text-cyber-cyan transition-colors">Vault</a>
        </div>
      </nav>

      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Certifications />
      <Footer />
    </main>
  );
}

