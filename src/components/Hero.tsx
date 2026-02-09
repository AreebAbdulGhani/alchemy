import { motion } from 'framer-motion';
import { ArrowRight, Play, Code, Music } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
            {/* Background Gradient Mesh */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-widest mb-8 text-purple-400"
                >
                    <span className="w-2 h-2 bg-purple-500 animate-pulse" />
                    System Operational
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400"
                >
                    The Multimodal<br />Transmutation Engine
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.8 }}
                    className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed"
                >
                    We don't just generate. We transmute. Turning static designs into Video, Code, and Audio through agentic orchestration.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="flex flex-col md:flex-row items-center justify-center gap-4"
                >
                    <button className="group relative px-8 py-4 bg-white text-black font-semibold hover:bg-slate-200 transition-colors w-full md:w-auto overflow-hidden">
                        <span className="relative z-10 flex items-center gap-2">
                            Read Technical Whitepaper
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    <button className="px-8 py-4 border border-white/20 hover:bg-white/5 transition-colors w-full md:w-auto text-slate-300">
                        View Architecture
                    </button>
                </motion.div>

                {/* Feature Grid Mini */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20 max-w-4xl mx-auto text-left"
                >
                    {[
                        { icon: Play, title: "Video Generation", desc: "Motion physics & audio sync" },
                        { icon: Code, title: "Code Export", desc: "React + Tailwind CSS" },
                        { icon: Music, title: "Audio Synthesis", desc: "Neural voice & soundscapes" }
                    ].map((feature, i) => (
                        <div key={i} className="p-6 border border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors group">
                            <feature.icon className="w-6 h-6 text-purple-500 mb-4 group-hover:text-purple-400 transition-colors" />
                            <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                            <p className="text-slate-400 text-sm">{feature.desc}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
