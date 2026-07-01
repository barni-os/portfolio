import { Link } from "react-router-dom";

const BASE = import.meta.env.BASE_URL;

function About() {
  return (
    <main>

      {/* Page header */}
      <div className="titleblock" style={{ marginBottom: "2.5rem" }}>
        <p className="titleblock__eyebrow">About Me</p>
        <h1 className="titleblock__name" style={{ fontSize: "clamp(2rem, 6vw, 4rem)" }}>
          Pranay<br />[HK]
        </h1>
        <div className="titleblock__meta">
          <span>Mechatronics Engineer</span>
          <span>Sydney, AU</span>
          <span>MQ 2026</span>
        </div>
      </div>

      {/* Photo + bio */}
      <section className="section">
        <div className="about__layout">

          <div className="about__photo-wrap">
            <img
              src={`${BASE}about-photo.jpg`}
              alt="Barni"
              className="about__photo"
            />
          </div>

          <div className="about__content">
            <h2 className="section__title">Background</h2>
            <p className="about__text">
              Mechatronics Engineering graduate from Macquarie University (2026) with 
              hands-on experience across CAD modelling, sensor systems, robotics simulation, 
              and biomedical research instrumentation.
            </p>
            <p className="about__text" style={{ marginTop: "1rem" }}>
              I'm currently targeting graduate roles in mining, industrial sectors and biomedical sectors 
              . I enjoy building things that sit at the intersection of mechanical, electrical, and software systems.
            </p>
            <p className="about__text" style={{ marginTop: "1rem" }}>
              Outside of engineering I enjoy camping around Sydney, and tinkering with drones.
            </p>
          </div>

        </div>
      </section>

      {/* Skills */}
      <section className="section">
        <h2 className="section__title">Skills & Tools</h2>
        <div className="about__skill-groups">

          <div className="about__skill-group">
            <p className="about__skill-label">CAD & Mechanical</p>
            <div className="about__skills">
              {["Fusion 360", "SolidWorks", "DICOM Processing", "FEA"].map(s => (
                <span key={s} className="card__tech">{s}</span>
              ))}
            </div>
          </div>

          <div className="about__skill-group">
            <p className="about__skill-label">Software & Dev</p>
            <div className="about__skills">
              {["Python", "MATLAB", "ROS 2", "React", "Git", "Linux"].map(s => (
                <span key={s} className="card__tech">{s}</span>
              ))}
            </div>
          </div>

          <div className="about__skill-group">
            <p className="about__skill-label">Systems & Electronics</p>
            <div className="about__skills">
              {["Sensor Calibration", "Machine Learning", "Power Systems", "IoT", "PCB Design" , "Embedded Systems Design"].map(s => (
                <span key={s} className="card__tech">{s}</span>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <h2 className="section__title">Get In Touch</h2>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <a href="mailto:your@email.com" className="nav__link nav__link--cta" style={{ display: "inline-block" }}>
            Email Me →
          </a>
          <a href="https://linkedin.com/in/phk04" target="_blank" rel="noopener noreferrer" className="card__link" style={{ alignSelf: "center" }}>
            LinkedIn →
          </a>
          <Link to="/" className="card__link" style={{ alignSelf: "center" }}>
            ← View Projects
          </Link>
        </div>
      </section>

    </main>
  );
}

export default About;