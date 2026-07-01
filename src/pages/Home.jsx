import { projects } from "../data/projects";
import ProjectCard from "../components/ProjectCard";

function Home() {
  return (
    <main>
      {/* Title block — only on home */}
      <header className="titleblock">
        <p className="titleblock__eyebrow">Mechatronics Engineer</p>
        <h1 className="titleblock__name">Pranay<br />[HK]</h1>
        <p className="titleblock__sub">Graduate · Systems & Industrial · Sydney, AU</p>
        <div className="titleblock__meta">
          <span>DWG NO. PORTFOLIO-01</span>
          <span>SCALE: NTS</span>
          <span>DATE: 2026.06</span>
          <span>REV: A</span>
        </div>
      </header>

      <section className="section">
        <h2 className="section__title">Projects</h2>
        <div className="grid">
          {projects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;