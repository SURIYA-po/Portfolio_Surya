import React from 'react';
import './ProjectCard.css';
import SkillTag from './SkillTag';

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <div className="card-content">
      <h3 className="project-title">{project.name || project.title}</h3>
      <p className="project-desc">{project.description}</p>
      <div className="tech-list">
        {(project.technologies || []).map(tech => (
          <SkillTag key={tech} label={tech} />
        ))}
      </div>
      <a
        href={project.homepage || project.githubUrl}
        className="project-link"
        target="_blank"
        rel="noreferrer"
      >
        View Project →
      </a>
    </div>
    <div className="card-logo">
      {project.image
        ? <img src={project.image} alt={project.name || project.title} />
        : <span className="logo-text">
            {project.name  }
          </span>}
    </div>
  </div>
);

export default ProjectCard;
