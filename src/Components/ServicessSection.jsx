
import './Sections.css';
// CSS file for styling
import TiltCard from './Handletilt';
import { useRef } from 'react';



const PortfolioSection = () => {
    const cardRefs = useRef([]);
    const arrowRefs = useRef([]);

    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        const arrow = arrowRefs.current[index];
        if (card && arrow) {
            const { width, height, left, top } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            const rotateY = ((x / width) - 0.5) * 30;
            const rotateX = ((y / height) - 0.5) * -30;

            card.style.setProperty('--rotate-y', `${rotateY}deg`);
            card.style.setProperty('--rotate-x', `${rotateX}deg`);
            arrow.style.transform = `rotate(0deg)`;
        }
    };

    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        const arrow = arrowRefs.current[index];
        if (card && arrow) {
            card.style.setProperty('--rotate-y', '0deg');
            card.style.setProperty('--rotate-x', '0deg');
            arrow.style.transform = `rotate(-45deg)`;
        }
    };

    return (
        <div className="servicepair">

            <section className="services-section">
                <h2 className='headers'>[Services]</h2>
                <h3>Crafting Solutions through Code, <br />One Project at a Time</h3>
                <div className="services-cards">
                    <div className="card">

                        <div className="icon"><img src="src/assets/Homepage_Services_1 (1).png" alt="The girl at the laptop" /></div>

                        <h4 className="headers">What I can do for you</h4>
                        <p>Faster, better products that your users love. Here are the services I provide:</p>
                        <ul>
                            <li>WordPress Development</li>
                            <li>React Development</li>
                            <li>Maintenance & Support</li>
                            <li>UI/UX Design</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="icon"><img src="src/assets/Homepage_Services_2.avif" alt="The girl at the laptop" /></div>
                        <h4 class="headers">Languages I'm fluent in</h4>
                        <p>Every developer requires the right tool for the problem. I'm proficient in:</p>
                        <ul>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>
                    <div className="card">
                        <div className="icon"><img src="src/assets/Homepage_Services_3.avif" alt="The girl at the laptop" /></div>
                        <h4 class="headers">What you can expect</h4>
                        <p>I develop solutions that go beyond aesthetics. Here’s what you can expect:</p>
                        <ul>
                            <li>Robust and Functional</li>
                            <li>Optimized for Devices and User-Centric</li>
                            <li>Efficient and Easily Maintainable</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="portfolio-section">
               <center> <h2 className='headers'>[Portfolio]</h2> </center>
                <h3 >I bring results. My clients are proof.</h3>
                <div className="portfolio-cards">
                    {portfolioItems.map((item, index) => (
                        <div
                            key={index}
                            className="portfolio-card"
                            ref={(el) => (cardRefs.current[index] = el)}
                            onMouseMove={(e) => handleMouseMove(e, index)}
                            onMouseLeave={() => handleMouseLeave(index)}
                        >
                            <h4 className="headers_1">{item.category}</h4>
                            <h5>{item.title}</h5>
                            <p className="para">{item.description}</p>
                            <div className="pair">
                                <a href={item.link} className="view-project">
                                    View project
                                </a>
                                <div
                                    className="arrow"
                                    ref={(el) => (arrowRefs.current[index] = el)}
                                ></div>
                            </div>

                        </div>
                    ))}
                </div>
                <button className="view-all">View all projects</button>
            </section>
            

        </div>
    );
};

// Sample data for portfolio items
const portfolioItems = [
    {
        category: 'WordPress Development',
        title: 'PHP Updating & Quality Checking of a huge amount of WordPress sites',
        description: 'Embark on a year-long journey of upgrading PHP to 8.x and WordPress to the latest version across 7000+ sites.',
        link: '#'
    },
    {
        category: 'Web Design',
        title: 'UI/UX Design for Integrate Telecom Solutions',
        description: 'Design the transformative UI/UX solution journey for Integrate Telecom Solutions, leveraging Figma.',
        link: '#'
    },
    {
        category: 'Web Design',
        title: 'Web application for rental system',
        description: 'Design the transformative UI/UX solution journey for finding rental home',
        link: '#'
    },
    {
        category: 'Web Design',
        title: 'UI/UX Design for Integrate Telecom Solutions',
        description: 'Design the transformative UI/UX solution journey for Integrate Telecom Solutions, leveraging Figma.',
        link: '#'
    },
    {
        category: 'Web Design',
        title: 'UI/UX Design for Integrate Telecom Solutions',
        description: 'Design the transformative UI/UX solution journey for Integrate Telecom Solutions, leveraging Figma.',
        link: '#'
    },
    {
        category: 'Web Design',
        title: 'UI/UX Design for Integrate Telecom Solutions',
        description: 'Design the transformative UI/UX solution journey for Integrate Telecom Solutions, leveraging Figma.',
        link: '#'
    },
    // Add more portfolio items as needed
];

export { PortfolioSection };