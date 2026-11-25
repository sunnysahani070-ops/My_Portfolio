const Footer = () => {
    return (
        <footer className="c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5">
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>

            <div className="flex gap-3">
                <a href="https://github.com/sunnysahani070-ops" target="_blank" rel="noreferrer" className="social-icon" title="GitHub">
                    <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                </a>
                <a href="https://linkedin.com/in/sunny-sahani" target="_blank" rel="noreferrer" className="social-icon" title="LinkedIn">
                    <img src="/assets/twitter.svg" alt="linkedin" className="w-1/2 h-1/2" />
                </a>
                <a href="mailto:sunnysahani070@gmail.com" className="social-icon" title="Email Sunny">
                    <img src="/assets/instagram.svg" alt="email" className="w-1/2 h-1/2" />
                </a>
            </div>

            <p className="text-white-500">© 2026 Sunny Sahani. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
