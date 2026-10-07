import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { contactLinks, projects, skillGroups } from "./data";
import "./styles.css";

const Arrow = ({ external = false }) => <span className="arrow" aria-hidden="true">{external ? "↗" : "↘"}</span>;

function useRoute() {
  const [route, setRoute] = useState(window.location.pathname);
  useEffect(() => {
    const onPop = () => setRoute(window.location.pathname);
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);
  return route;
}

function BrandIcon({ label }) {
  if (label === "GitHub") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.18-3.37-1.18-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.56-1.11-4.56-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02A9.6 9.6 0 0 1 12 7.86c.85 0 1.71.12 2.51.36 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2Z"/></svg>;
  if (label === "LinkedIn") return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M5.1 3.5A2.1 2.1 0 1 1 5.1 7.7a2.1 2.1 0 0 1 0-4.2ZM3.3 9h3.6v11.6H3.3V9Zm5.8 0h3.4v1.6h.05c.47-.9 1.62-1.85 3.34-1.85 3.57 0 4.23 2.35 4.23 5.4v6.45h-3.55v-5.72c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.19 1.48-2.19 3v5.82H9.1V9Z"/></svg>;
  return <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5v-13Zm2.5-.2a.2.2 0 0 0-.2.2v1l6.7 4.42L18.2 6.5v-1a.2.2 0 0 0-.2-.2h-12.5ZM18.2 8l-6.2 4.1L5.3 8v10.5c0 .11.09.2.2.2h12.5c.11 0 .2-.09.2-.2V8Z"/></svg>;
}

function navigate(path) {
  window.history.pushState({}, "", path);
  window.dispatchEvent(new PopStateEvent("popstate"));
  const hash = path.includes("#") ? path.slice(path.indexOf("#") + 1) : "";
  if (hash) {
    window.setTimeout(() => document.getElementById(hash)?.scrollIntoView({ behavior: "smooth" }), 0);
  } else {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
}

function Logo() {
  return <a className="logo" href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }} aria-label="Ammiel Joseph home">AJ<span>.</span></a>;
}

function Header() {
  const [open, setOpen] = useState(false);
  const links = [["About", "/#about"], ["Projects", "/projects"], ["Resume", "/resume"], ["Contact", "/contact"]];
  const go = (href) => {
    setOpen(false);
    if (href.includes("#")) {
      const [path, hash] = href.split("#");
      if (window.location.pathname !== path || !document.querySelector(`#${hash}`)) {
        navigate(href);
      } else {
        document.querySelector(`#${hash}`)?.scrollIntoView({ behavior: "smooth" });
      }
      return;
    }
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") navigate(`/${href}`);
      else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    } else navigate(href);
  };
  return <header className={`site-header ${open ? "is-open" : ""}`}>
    <div className="header-inner">
      <Logo />
      <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Close menu" : "Open menu"}><span /><span /></button>
      <nav aria-label="Primary navigation">
        {links.map(([label, href]) => <a key={label} href={href} onClick={(e) => { e.preventDefault(); go(href); }}>{label}</a>)}
      </nav>
      <a className="header-availability" href="/contact" onClick={(e) => { e.preventDefault(); go("/contact"); }}><i /> Open to opportunities</a>
    </div>
  </header>;
}

function SectionHeading({ number, eyebrow, title, children }) {
  return <div className="section-heading">
    <div className="eyebrow"><span>{number}</span>{eyebrow}</div>
    <h2>{title}</h2>
    {children}
  </div>;
}

function ProjectVisual({ project, large = false, expandable = false, onExpand }) {
  return <div className={`project-visual ${project.accent} ${large ? "large" : ""}`}>
    {project.image && (expandable ? <button className="project-image-trigger" type="button" onClick={onExpand} aria-label={`Expand ${project.title} image`}><img className="project-image" src={project.image} alt={`${project.title} preview`} /></button> : <img className="project-image" src={project.image} alt={`${project.title} preview`} />)}
    <div className="visual-top"><span>{project.number} / SELECTED WORK</span><span>CASE STUDY</span></div>
    {!project.image && <><div className="visual-grid" /><div className="visual-window"><span /><span /><span /></div></>}
    <div className="visual-caption">{project.title}<small>{project.type}</small></div>
  </div>;
}

const skillMarks = {
  Java: ["J", "java"],
  Python: ["Py", "python"],
  "C / C++": ["C+", "cpp"],
  SQL: ["DB", "sql"],
  JavaScript: ["JS", "javascript"],
  PHP: ["php", "php"],
  "HTML / CSS": ["</>", "web"],
  React: ["⚛", "react"],
  Django: ["dj", "django"],
  "Node.js": ["N", "node"],
  "Express.js": ["ex", "express"],
  "Vue.js": ["V", "vue"],
  Git: ["◆", "git"],
  Docker: ["◇", "docker"],
  "VS Code": ["<>", "vscode"],
  Linux: ["$_", "linux"],
  "Azure DevOps": ["Az", "azure"],
  Leapwork: ["L", "leapwork"]
};

function SkillMark({ skill }) {
  const mark = skillMarks[skill];
  return mark ? <span className={`skill-mark ${mark[1]}`} aria-hidden="true">{mark[0]}</span> : null;
}

function Home() {
  return <><Header /><main>
    <section className="hero page-section">
      <div className="hero-content">
        <div className="hero-copy">
          <div className="hero-kicker"><span className="status-dot" /> Based in Newbury, UK · Available for opportunities</div>
          <h1>Hi, I’m <span>Ammiel</span></h1>
          <p className="hero-role">Computing &amp; Information Technology Graduate</p>
          <p className="hero-intro">I build practical technology solutions across software development, IT systems, cybersecurity and data.</p>
          <div className="hero-actions"><a className="button button-light" href="/projects" onClick={(e) => { e.preventDefault(); navigate("/projects"); }}>View my work <Arrow /></a><a className="button button-outline" href="/resume" onClick={(e) => { e.preventDefault(); navigate("/resume"); }}>Download resume <Arrow external /></a></div>
          <div className="hero-socials" aria-label="Social links">{contactLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" aria-label={link.label}><BrandIcon label={link.label} /></a>)}</div>
        </div>
        <div className="hero-visual" aria-label="Portrait placeholder">
          <div className="hero-orbit orbit-one" />
          <div className="hero-orbit orbit-two" />
          <div className="hero-photo">My photo</div>
        </div>
      </div>
      <div className="hero-meta"><a className="scroll-arrow" href="#about" aria-label="Scroll to About section">↓</a></div>
    </section>

    <section id="about" className="page-section split-section about-section">
      <SectionHeading number="01" eyebrow="About" title="A technology graduate who likes building things." />
      <div className="section-copy"><p className="lead">I’m a Computing and Information Technology graduate from the University of Surrey with a strong interest in building practical technology solutions.</p><p>My experience spans full-stack development, cybersecurity, data analytics, software testing and IT systems. That breadth gives me a grounded understanding of how technology supports real-world organisations — from the first line of support to the final user experience.</p><p>I’m at my best when I’m learning quickly, solving a tangible problem and making something a little clearer than I found it.</p></div>
    </section>

    <section id="skills" className="page-section skills-section">
      <SectionHeading number="02" eyebrow="Skills" title="A broad technical toolkit." />
      <div className="skills-grid">{skillGroups.map(([title, ...skills]) => <div className="skill-group" key={title}><h3>{title}</h3><ul>{skills.map((skill) => <li key={skill}><SkillMark skill={skill} />{skill}</li>)}</ul></div>)}</div>
      <div className="learning"><div className="eyebrow">Additional learning</div><p>Physical Computing — University of Lancaster · Logic for Computer Science — University of Leeds · IoT — Cisco · Python / Java / HTML / CSS — SoloLearn · Mastercard &amp; EA — Forage</p></div>
    </section>
  </main><Footer /></>;
}

function ProjectPage({ project }) {
  const [isImageOpen, setIsImageOpen] = useState(false);
  useEffect(() => {
    if (!isImageOpen) return undefined;
    const closeOnEscape = (event) => { if (event.key === "Escape") setIsImageOpen(false); };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [isImageOpen]);
  return <><Header /><main className="detail-page page-section"><button className="back-button" onClick={() => navigate("/projects")}>← Back to projects</button><div className="detail-heading"><div className="eyebrow">{project.number} / CASE STUDY</div><h1>{project.title}</h1><p>{project.description}</p></div><ProjectVisual project={project} large expandable onExpand={() => setIsImageOpen(true)} /><div className="detail-grid"><div><div className="eyebrow">Overview</div>{project.details.map((detail) => <p key={detail}>{detail}</p>)}</div><div><div className="eyebrow">Key features</div><ul className="feature-list">{project.features.map((feature) => <li key={feature}>{feature}<span>↗</span></li>)}</ul><div className="detail-links"><a href={project.github} target="_blank" rel="noreferrer">GitHub <Arrow external /></a></div></div></div><div className="detail-tech"><div className="eyebrow">Built with</div><div className="tag-list">{project.technologies.map((tag) => <span key={tag}>{tag}</span>)}</div></div></main>{isImageOpen && <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={`${project.title} enlarged image`} onClick={() => setIsImageOpen(false)}><div className="lightbox-content" onClick={(event) => event.stopPropagation()}><button className="lightbox-close" type="button" onClick={() => setIsImageOpen(false)} aria-label="Close enlarged image">×</button><img src={project.image} alt={`${project.title} enlarged preview`} /></div></div>}<Footer /></>;
}

function Projects() {
  return <><Header /><main className="projects-page page-section"><div className="detail-heading"><div className="eyebrow">Selected work</div><h1>Things I’ve built.</h1><p>A selection of practical projects across development, cybersecurity and data.</p></div><div className="project-list">{projects.map((project) => <article className="project-card" key={project.slug}><ProjectVisual project={project} large /><div className="project-info"><div className="project-number">{project.number}</div><div><p className="project-type">{project.type}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 4).map((tag) => <span key={tag}>{tag}</span>)}</div><button className="inline-button" onClick={() => navigate(`/projects/${project.slug}`)}>View case study <Arrow /></button></div></div></article>)}</div></main><Footer /></>;
}

function Contact() {
  const [formState, setFormState] = useState("idle");
  const submit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.checkValidity()) { e.currentTarget.reportValidity(); return; }
    setFormState("sent");
    e.currentTarget.reset();
  };
  return <><Header /><main className="contact-page page-section"><div className="detail-heading"><div className="eyebrow">Contact</div><h1>Let’s connect.</h1><p>I’m always open to discussing technology, interesting projects and new opportunities.</p></div><div className="contact-layout"><div><div className="contact-links">{contactLinks.map((link) => <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer"><span><BrandIcon label={link.label} />{link.label}</span>{link.value}<Arrow external /></a>)}</div></div><form className="contact-form" onSubmit={submit}><label>Name<input required name="name" type="text" placeholder="Your name" /></label><label>Email<input required name="email" type="email" placeholder="you@example.com" /></label><label>Message<textarea required name="message" rows="4" placeholder="Tell me a little about your project..." /></label><button className="button button-light" type="submit">Send message <Arrow external /></button>{formState === "sent" && <p className="form-success" role="status">Thanks — your message is ready to be connected to an email service.</p>}</form></div></main><Footer /></>;
}

function Resume() {
  return <><Header /><main className="resume-page page-section"><button className="back-button" onClick={() => navigate("/")}>← Back to portfolio</button><div className="resume-heading"><div><div className="eyebrow">Curriculum vitae</div><h1>Experience,<br /><em>on paper.</em></h1></div><a className="button button-light" href="/resume.pdf" download>Download resume <Arrow external /></a></div><div className="resume-placeholder"><div className="resume-mark">AJ<span>.</span></div><h2>Your resume PDF goes here.</h2><p>Add your file as <code>frontend/public/resume.pdf</code> to display it in this viewer.</p><a className="text-link" href="/resume.pdf">Open resume PDF <Arrow external /></a></div></main><Footer /></>;
}

function Footer() {
  return <footer><div className="footer-top"><Logo /><p>Computing &amp; Information Technology<br />with a practical point of view.</p><a href="#top">Back to top <Arrow /></a></div><div className="footer-bottom"><span>© 2026 Ammiel Joseph</span><div><a href="https://github.com/ammiels">GitHub</a><a href="https://linkedin.com/in/ammiel-joseph">LinkedIn</a><a href="mailto:ammieljoseph@gmail.com">Email</a></div><span>Designed &amp; built with intent.</span></div></footer>;
}

function App() {
  const route = useRoute();
  useEffect(() => { if (route === "/") document.title = "Ammiel Joseph — Computing & IT Graduate"; else if (route === "/resume") document.title = "Resume — Ammiel Joseph"; else if (route === "/projects") document.title = "Projects — Ammiel Joseph"; else if (route === "/contact") document.title = "Contact — Ammiel Joseph"; else document.title = "Project — Ammiel Joseph"; }, [route]);
  if (route === "/resume") return <Resume />;
  if (route === "/projects") return <Projects />;
  if (route === "/contact") return <Contact />;
  if (route.startsWith("/projects/")) {
    const project = projects.find((item) => route.endsWith(item.slug));
    return project ? <ProjectPage project={project} /> : <Home />;
  }
  return <Home />;
}

createRoot(document.getElementById("root")).render(<React.StrictMode><App /></React.StrictMode>);
