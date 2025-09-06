import React, { useRef, useEffect, useState } from 'react';
import './Sections.css';
import TiltCard from './Handletilt';
import { db } from '../Services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const PortfolioSection = () => {
      const navigate = useNavigate();
    
    const handleViewAllClick = () => {
        navigate('/portfolio');
    };
    const cardRefs = useRef([]);
    const arrowRefs = useRef([]);
    const [portfolioItems, setPortfolioItems] = useState([]);
    const [visibleProjects, setVisibleProjects] = useState(5);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [isLoading, setIsLoading] = useState(true);
    const [selectedProject, setSelectedProject] = useState(null);

    // Fetch projects from Firebase
    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setIsLoading(true);
                const snapshot = await getDocs(collection(db, 'My_details'));
                const items = snapshot.docs.map(doc => ({
                    id: doc.id,
                    ...doc.data()
                }));
                setPortfolioItems(items);
            } catch (error) {
                console.error('Error fetching projects:', error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchProjects();
    }, []);

    // Get unique categories
    const categories = ['All', ...new Set(portfolioItems.map(item => item.category || 'Web Development'))];

    // Filter projects by category
    const filteredProjects = selectedCategory === 'All' 
        ? portfolioItems 
        : portfolioItems.filter(item => (item.category || 'Web Development') === selectedCategory);

    // Handle mouse move for tilt effect
    const handleMouseMove = (e, index) => {
        const card = cardRefs.current[index];
        const arrow = arrowRefs.current[index];
        if (card && arrow) {
            const { width, height, left, top } = card.getBoundingClientRect();
            const x = e.clientX - left;
            const y = e.clientY - top;

            const rotateY = ((x / width) - 0.5) * 20;
            const rotateX = ((y / height) - 0.5) * -20;

            card.style.setProperty('--rotate-y', `${rotateY}deg`);
            card.style.setProperty('--rotate-x', `${rotateX}deg`);
            card.style.transform = `perspective(1000px) rotateX(var(--rotate-x)) rotateY(var(--rotate-y)) scale3d(1.05, 1.05, 1.05)`;
            arrow.style.transform = `rotate(0deg)`;
        }
    };

    // Handle mouse leave
    const handleMouseLeave = (index) => {
        const card = cardRefs.current[index];
        const arrow = arrowRefs.current[index];
        if (card && arrow) {
            card.style.setProperty('--rotate-y', '0deg');
            card.style.setProperty('--rotate-x', '0deg');
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            arrow.style.transform = `rotate(-45deg)`;
        }
    };

    // Handle project click for modal
    const handleProjectClick = (project) => {
        setSelectedProject(project);
    };

    // Close modal
    const closeModal = () => {
        setSelectedProject(null);
    };

    // Handle category filter
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setVisibleProjects(5); // Reset to show 6 projects when changing category
    };

    return (
        <div className="servicepair">
            {/* Services Section */}
            <section className="services-section">
                <h2 className='headers'>[Services]</h2>
                <h3>Crafting Solutions through Code, <br />One Project at a Time</h3>

                <div className="services-cards">
                    <div className="card">
                        <div className="icon">
                            <img src="/assets/Homepage_Services_1 (1).png" alt="The girl at the laptop" />
                        </div>
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
                        <div className="icon">
                            <img src="/assets/Homepage_Services_2.avif" alt="The girl at the laptop" />
                        </div>
                        <h4 className="headers">Languages I'm fluent in</h4>
                        <p>Every developer requires the right tool for the problem. I'm proficient in:</p>
                        <ul>
                            <li>PHP</li>
                            <li>JavaScript</li>
                            <li>HTML & CSS</li>
                        </ul>
                    </div>

                    <div className="card">
                        <div className="icon">
                            <img src="/assets/Homepage_Services_3.avif" alt="The girl at the laptop" />
                        </div>
                        <h4 className="headers">What you can expect</h4>
                        <p>I develop solutions that go beyond aesthetics. Here's what you can expect:</p>
                        <ul>
                            <li>Robust and Functional</li>
                            <li>Optimized for Devices and User-Centric</li>
                            <li>Efficient and Easily Maintainable</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Portfolio Section */}
            <section className="portfolio-section">
                <center><h2 className='headers'>[Portfolio]</h2></center>
                <h3>I bring results. My clients are proof.</h3>

                {/* Category Filter */}
                <div className="portfolio-filters">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`filter-btn ${selectedCategory === category ? 'active' : ''}`}
                            onClick={() => handleCategoryChange(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Loading State */}
                {isLoading ? (
                    <div className="loading-state">
                        <div className="spinner"></div>
                        <p>Loading projects...</p>
                    </div>
                ) : (
                    <>
                        {/* Portfolio Cards */}
                        <div className="portfolio-cards">
                            {filteredProjects.slice(0, visibleProjects).map((item, index) => (
                                <div
                                    key={item.id || index}
                                    className="portfolio-card"
                                    ref={(el) => (cardRefs.current[index] = el)}
                                    onMouseMove={(e) => handleMouseMove(e, index)}
                                    onMouseLeave={() => handleMouseLeave(index)}
                                    onClick={() => handleProjectClick(item)}
                                >
                                    {/* Project Image */}
                                    {item.image && (
                                        <div className="project-image">
                                            <img src={item.image} alt={item.name || item.title} />
                                            <div className="image-overlay">
                                                <span className="view-details">View Details</span>
                                            </div>
                                        </div>
                                    )}
                                    
                                    <div className="card-content">
                                        <h4 className="headers_1">{item.category || 'Web Development'}</h4>
                                        <h5>{item.name || item.title}</h5>
                                        <p className="para">{item.description}</p>
                                        
                                        {/* Technologies Used */}
                                        {item.technologies && (
                                            <div className="technologies">
                                                {item.technologies.map((tech, techIndex) => (
                                                    <span key={techIndex} className="tech-tag">
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        )}
                                        
                                        <div className="pair">
                                            <a 
                                                href={item.homepage || item.githubUrl} 
                                                className="view-project" 
                                                target="_blank" 
                                                rel="noreferrer"
                                                onClick={handleViewAllClick}
                                            >
                                                View project
                                            </a>
                                            <div
                                                className="arrow"
                                                ref={(el) => (arrowRefs.current[index] = el)}
                                            ></div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* View All/Less Button */}
                        {filteredProjects.length > 5&& (
                            <button 
                                className="view-all" 
                                onClick={() => {
                                    setVisibleProjects(prev => 
                                        prev === 5 ? filteredProjects.length : 5
                                    );
                                }}
                            >
                                {visibleProjects === 5 ? 
                                    `View all ${filteredProjects.length} projects` : 
                                    'View less'
                                }
                            </button>
                        )}
                    </>
                )}

                {/* Project Details Modal */}
                {selectedProject && (
                    <div className="modal-overlay" onClick={closeModal}>
                        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                            <button className="modal-close" onClick={closeModal}>×</button>
                            
                            <div className="modal-header">
                                <h3>{selectedProject.name || selectedProject.title}</h3>
                                <span className="modal-category">
                                    {selectedProject.category || 'Web Development'}
                                </span>
                            </div>

                            {selectedProject.image && (
                                <div className="modal-image">
                                    <img src={selectedProject.image} alt={selectedProject.name || selectedProject.title} />
                                </div>
                            )}

                            <div className="modal-body">
                                <p>{selectedProject.description}</p>
                                
                                {selectedProject.challenges && (
                                    <div className="modal-section">
                                        <h4>Challenges</h4>
                                        <p>{selectedProject.challenges}</p>
                                    </div>
                                )}

                                {selectedProject.solution && (
                                    <div className="modal-section">
                                        <h4>Solution</h4>
                                        <p>{selectedProject.solution}</p>
                                    </div>
                                )}

                                {selectedProject.technologies && (
                                    <div className="modal-section">
                                        <h4>Technologies Used</h4>
                                        <div className="technologies">
                                            {selectedProject.technologies.map((tech, index) => (
                                                <span key={index} className="tech-tag">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="modal-links">
                                    {selectedProject.homepage && (
                                        <a 
                                            href={selectedProject.homepage} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="modal-link"
                                        >
                                            View Live Site
                                        </a>
                                    )}
                                    {selectedProject.githubUrl && (
                                        <a 
                                            href={selectedProject.githubUrl} 
                                            target="_blank" 
                                            rel="noreferrer"
                                            className="modal-link"
                                        >
                                            View Code
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </div>
    );
};

export { PortfolioSection };
