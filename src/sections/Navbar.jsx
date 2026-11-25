import { useState } from 'react';

import { navLinks } from '../constants/index.js';

const NavItems = ({ onClick = () => { } }) => (
    <ul className="nav-ul">
        {navLinks.map((item) => (
            <li key={item.id} className="nav-li">
                <a href={item.href} className="nav-li_a" onClick={onClick}>
                    {item.name}
                </a>
            </li>
        ))}
    </ul>
);

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
            <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center py-5 mx-auto c-space">
                    <a href="/" className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        Sunny Sahani
                    </a>

                    <button
                        onClick={toggleMenu}
                        className="text-neutral-400 hover:text-white focus:outline-none sm:hidden flex"
                        aria-label="Toggle menu">
                        <img src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'} alt="toggle" className="w-6 h-6" />
                    </button>

                    <nav className="sm:flex hidden items-center gap-6">
                        <NavItems />
                        <a
                            href="/resume.html"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all shadow-md active:scale-95">
                            <span>Resume</span>
                            <img src="/assets/arrow-up.png" alt="arrow" className="w-2.5 h-2.5 invert brightness-0" />
                        </a>
                    </nav>
                </div>
            </div>

            <div className={`nav-sidebar ${isOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <nav className="p-5 flex flex-col gap-4">
                    <NavItems onClick={closeMenu} />
                    <a
                        href="/resume.html"
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 py-2.5 rounded-lg bg-white text-black font-semibold text-sm hover:bg-neutral-200 transition-all">
                        <span>View Resume</span>
                        <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3 invert brightness-0" />
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
