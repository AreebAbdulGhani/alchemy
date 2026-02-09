import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-[#050505] border-t border-white/10 py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="text-left">
                        <h3 className="text-lg font-bold mb-2">Alchemy</h3>
                        <p className="text-slate-500 text-sm">
                            Prototype Phase. <br />
                            Integrating with Adobe Express Add-on SDK v2.
                        </p>
                    </div>

                    <div className="flex gap-6">
                        <a
                            href="https://github.com/AreebAbdulGhani/alchemy"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-white transition-colors"
                        >
                            <Github className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/areeb-abdul-ghani-aaa46a1b7/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#0077b5] transition-colors"
                        >
                            <Linkedin className="w-5 h-5" />
                        </a>
                        <a
                            href="https://x.com/AreebAbdulGhan1"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-slate-400 hover:text-[#1DA1F2] transition-colors"
                        >
                            <Twitter className="w-5 h-5" />
                        </a>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
                    <p>© 2026 Alchemy Engine. All rights reserved.</p>
                    <p>Developed by Areeb Abdul Ghani</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
