
import './Sections.css'; // CSS file for styling

// ServicesSection Component
const ServicesSection = () => {
    return (
        <section className="services-section">
            <h2>[Services]</h2>
            <h3>Crafting Solutions through Code, One Project at a Time</h3>
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
    );
};

const PortfolioSection = () => {
    return (
        <section className="portfolio-section">
            <h2>[Portfolio]</h2>
            <h3 class="headers">I bring results. My clients are proof.</h3>
            <div className="portfolio-cards">
                {portfolioItems.map((item, index) => (
                    <div key={index} className="portfolio-card">
                        <h4>{item.category}</h4>
                        <h5>{item.title}</h5>
                        <p>{item.description}</p>
                        <a href={item.link} className="view-project">View project</a>
                    </div>
                ))}
            </div>
            <button className="view-all">View all projects</button>
        </section>
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
    // Add more portfolio items as needed
];

export { ServicesSection, PortfolioSection };
