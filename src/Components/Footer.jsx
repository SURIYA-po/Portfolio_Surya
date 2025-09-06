import React from 'react';
import './footer.css'; // Import CSS for styling

const Footer = () => {
    return (
        <footer className="footer">

            <div className="footer-content">

            <div class="FooterStyles__AddContainer-sc-toix7a-4 jxwHBE"><h4 class="FooterStyles__AddHeading-sc-toix7a-6 bJRaxt">Interested in collaborating? Let's schedule a time to chat.</h4><a class="invertButton__InvertButtonIternal-sc-1ai4jgu-1 cfMqky" href="/contact/">Let's do it!</a></div>
                <h3 className="footer-title">SURIYa</h3>
                <div className="footer-links">
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#blog">Blog</a>
                    <a href="#about">About me</a>
                    <a href="#contact">Contact</a>
                </div>
                <div className="footer_icon">
                    <a href=""><img src="/assets/linkedin.svg" alt="Upwork" /> </a>
                    <a href="">        <img src="/assets/upwork.svg" alt="LinkedIn" />
                    </a>
                    <a href=""> <img src="/assets/github.svg" alt="GitHub" /></a>
                </div>

                <p className="footer-credits">
                    Website developed and designed by Surya Pokhrel . © 2025
                </p>
                <br />
                <div className="footer-privacy">
                    <a href="#privacy">Privacy Policy</a> |
                    <a href="#cookie">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
