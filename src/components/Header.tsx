import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Header = () => {
    return (
        <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/10"
        >
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-purple-500" />
                    <span className="font-bold text-xl tracking-tight">Alchemy</span>
                </div>
                <nav className="hidden md:flex gap-8 text-sm text-slate-400">
                    <a href="#concept" className="hover:text-white transition-colors">Concept</a>
                    <a href="#architecture" className="hover:text-white transition-colors">Architecture</a>
                    <a href="#whitepaper" className="hover:text-white transition-colors">Whitepaper</a>
                </nav>
                <button className="bg-white text-black px-4 py-2 text-sm font-medium hover:bg-slate-200 transition-colors uppercase tracking-wider rounded-none">
                    Request Access
                </button>
            </div>
        </motion.header>
    );
};

export default Header;
