import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import ProgressBar from "../components/ProgressBar";

function ProjectPage() {
  const { id } = useParams();
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return (
      <div className="page">
        <p style={{ padding: "4rem 0", fontFamily: "IBM Plex Mono, monospace", color: "var(--muted)" }}>
          PROJECT NOT FOUND. <Link to="/" className="card__link">← Back</Link>
        </p>
      </div>
    );
  }

  const { title, longDescription, tech, status, progress, repo, link, images, videos, documents } = project;
  const isInProgress = status.trim().toLowerCase() === "in-progress";

  return (
    <div className="page">

      {/* Back link */}
      <div style={{ marginBottom: "2rem" }}>
        <Link to="/" className="card__link">← Back to projects</Link>
      </div>

      {/* Title block */}
      <div className="titleblock" style={{ marginBottom: "2.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: "1rem" }}>
          <h1 className="titleblock__name" style={{ fontSize: "clamp(1.8rem, 5vw, 3.5rem)" }}>
            {title}
          </h1>
          <span className={`card__tag ${isInProgress ? "card__tag--active" : ""}`} style={{ marginTop: "0.5rem" }}>
            {isInProgress ? "IN PROGRESS" : "COMPLETE"}
          </span>
        </div>
        <div className="card__tags" style={{ marginTop: "1rem" }}>
          {tech.map(t => <span key={t} className="card__tech">{t}</span>)}
        </div>
        {isInProgress && <div style={{ marginTop: "1rem" }}><ProgressBar progress={progress} /></div>}
        <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
          {repo && <a href={repo} target="_blank" rel="noopener noreferrer" className="card__link">GitHub →</a>}
          {link && <a href={link} target="_blank" rel="noopener noreferrer" className="card__link">Live Demo →</a>}
        </div>
      </div>

      {/* Description */}
      <section className="section">
        <h2 className="section__title">Overview</h2>
        <p className="about__text">{longDescription}</p>
      </section>

      {/* Images */}
      {images.length > 0 && (
        <section className="section">
          <h2 className="section__title">Images</h2>
          <div className="project__gallery">
            {images.map((src, i) => (
              <a key={i} href={src} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={`${title} image ${i + 1}`} className="project__img" />
              </a>
            ))}
          </div>
        </section>
      )}

      {/* Videos */}
      {videos.length > 0 && (
        <section className="section">
          <h2 className="section__title">Videos</h2>
          <div className="project__videos">
            {videos.map((url, i) => (
              <div key={i} className="project__video-wrap">
                <iframe
                  src={url}
                  title={`${title} video ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
        </section>
      )}

      {documents.length > 0 && (
  <section className="section">
    <h2 className="section__title">Documents</h2>
    <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
      {documents.map((doc, i) => (
        <div key={i}>
          <p className="about__skill-label" style={{ marginBottom: "0.5rem" }}>{doc.label}</p>
          <iframe
            src={`https://mozilla.github.io/pdf.js/web/viewer.html?file=${encodeURIComponent(doc.file)}`}
            width="100%"
            height="600px"
            style={{ border: "1px solid var(--line)" }}
          />
        </div>
      ))}
    </div>
  </section>
)}

    </div>
  );
}

export default ProjectPage;