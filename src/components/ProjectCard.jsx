import { Link } from "react-router-dom";
import ProgressBar from "./ProgressBar";

function ProjectCard({ project }) {
  const { id, title, description, tech, status, progress, repo, link } = project;
  const isInProgress = status.trim().toLowerCase() === "in-progress";

  return (
    <div className="card">
      <div className="card__header">
        <h3 className="card__title">{title}</h3>
        <span className={`card__tag ${isInProgress ? "card__tag--active" : ""}`}>
          {isInProgress ? "IN PROGRESS" : "COMPLETE"}
        </span>
      </div>
      <p className="card__desc">{description}</p>
      <div className="card__tags">
        {tech.map(t => <span key={t} className="card__tech">{t}</span>)}
      </div>
      {isInProgress && <ProgressBar progress={progress} />}
      <div className="card__links">
        <Link to={`/project/${id}`} className="card__link">View Project →</Link>
        {repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="card__link">GitHub →</a>}
        {link && <a href={link} target="_blank" rel="noopener noreferrer" className="card__link">Live →</a>}
      </div>
    </div>
  );
}

export default ProjectCard;