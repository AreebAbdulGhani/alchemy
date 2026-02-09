import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Network, Lock, Layers } from 'lucide-react';

const Features = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section id="features" className="py-24 bg-[#0a0a0a] relative overflow-hidden">

            {/* Concept Section */}
            <div className="container mx-auto px-6 mb-32">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                    transition={{ duration: 0.8 }}
                    ref={ref}
                    className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center"
                >
                    <div>
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
                            Design is no longer static.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Alchemy is a developer-first add-on that introduces "State" to Adobe Express.
                            By binding your design layers to our AI orchestration engine, a single flyer becomes
                            a 15-second video spot, a responsive HTML email, and a translated social asset—instantly.
                        </p>
                        <ul className="space-y-4">
                            {[
                                "Context-aware transmutation",
                                "Layer-by-layer semantic understanding",
                                "Brand-safe asset generation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-slate-300">
                                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-sm" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute inset-0 bg-purple-500/10 blur-3xl rounded-full" />
                        <div className="relative border border-white/10 bg-[#111] p-8 aspect-video flex items-center justify-center">
                            <div className="grid grid-cols-3 gap-4 w-full opacity-50">
                                <div className="h-24 bg-white/5 animate-pulse rounded-sm" />
                                <div className="h-24 bg-white/5 animate-pulse delay-100 rounded-sm" />
                                <div className="h-24 bg-white/5 animate-pulse delay-200 rounded-sm" />
                            </div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="bg-black/80 px-4 py-2 border border-purple-500/30 text-purple-400 text-xs font-mono tracking-widest uppercase">
                                    Processing DOM...
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Under the Hood Section */}
            <div className="container mx-auto px-6 py-24 border-t border-white/5">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Under the Hood</h2>
                    <p className="text-slate-400">
                        Built by senior infrastructure engineers. Alchemy is not a wrapper. It is a dedicated architecture designed for scale and security.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        {
                            icon: Layers,
                            title: "Semantic Ingestion",
                            desc: "We read the DOM, not just the pixels. Understanding hierarchy, z-index, and unintended relationships."
                        },
                        {
                            icon: Network,
                            title: "Multi-Agent Chaining",
                            desc: "Vision, Audio, and Logic models working in parallel. Orchestrated by a central reasoning engine."
                        },
                        {
                            icon: Lock,
                            title: "Enterprise Security",
                            desc: "Stateless processing for sensitive brand assets. Ephemeral storage and zero-retention policy."
                        }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                            viewport={{ once: true }}
                            className="p-8 border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-all group"
                        >
                            <div className="w-12 h-12 bg-white/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                                <item.icon className="w-6 h-6 text-slate-200" />
                            </div>
                            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
