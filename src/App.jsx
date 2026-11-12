
import { useState } from 'react'
import './App.css'

const services = [
  {
    number: '01',
    title: 'Business Websites',
    description: 'Professional websites that introduce your business and build trust with your customers.',
    tag: 'For growing businesses',
  },
  {
    number: '02',
    title: 'Portfolio Websites',
    description: 'Showcase your work, experience and creativity with a beautiful online presence.',
    tag: 'For creators & professionals',
  },
  {
    number: '03',
    title: 'E-commerce Websites',
    description: 'Turn your products into an online shopping experience designed to convert.',
    tag: 'For online stores',
  },
  {
    number: '04',
    title: 'Landing Pages',
    description: 'Focused, high-impact pages designed around one clear message and action.',
    tag: 'For campaigns & launches',
  },
]

const projects = [
  {
    number: '01',
    category: 'BUSINESS WEBSITE',
    name: 'The Modern Studio',
    description: 'A clean digital identity for a creative business.',
    style: 'studio',
  },
  {
    number: '02',
    category: 'E-COMMERCE',
    name: 'Forma Living',
    description: 'A refined shopping experience for a lifestyle brand.',
    style: 'forma',
  },
  {
    number: '03',
    category: 'PORTFOLIO',
    name: 'Frame & Focus',
    description: 'A visual-first portfolio for creative professionals.',
    style: 'frame',
  },
]

const process = [
  ['01', 'Discover', 'We understand your business, goals and audience.'],
  ['02', 'Design', 'We shape your ideas into a thoughtful website design.'],
  ['03', 'Develop', 'We build a responsive website with care and precision.'],
  ['04', 'Launch', 'We test everything and help bring your website online.'],
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formMessage, setFormMessage] = useState('')

  const closeMenu = () => setMenuOpen(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setFormMessage(
      'Thank you! The enquiry form is ready for backend integration before launch.'
    )
    event.currentTarget.reset()
  }

  return (
    <div className="site-wrapper">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-symbol">w<span>.</span></span>
          <span className="brand-name">webhub<span>4u</span></span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          <span></span>
          <span></span>
        </button>

        <nav className={`navigation ${menuOpen ? 'navigation-open' : ''}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#work" onClick={closeMenu}>Our work</a>
          <a href="#process" onClick={closeMenu}>Process</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Let's talk <span>↗</span>
          </a>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="home">
          <div className="hero-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              YOUR DIGITAL JOURNEY STARTS HERE
            </div>

            <h1>
              Your vision.
              <br />
              Our <span className="highlight-word">creation.</span>
            </h1>

            <p className="hero-description">
              We design and develop meaningful websites that help businesses
              stand out, connect with people and grow with confidence.
            </p>

            <div className="hero-actions">
              <a className="button button-primary" href="#contact">
                Start a project <span>↗</span>
              </a>
              <a className="text-link" href="#work">
                Explore our work <span>↓</span>
              </a>
            </div>

            <div className="hero-note">
              <span className="note-line"></span>
              Thoughtful design. Meaningful experiences.
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-orbit orbit-one"></div>
            <div className="visual-orbit orbit-two"></div>
            <div className="visual-center">
              <span className="visual-w">w.</span>
              <span className="visual-caption">BUILT FOR WHAT'S NEXT</span>
            </div>
            <div className="floating-label label-top">
              <span className="label-dot"></span>
              DESIGN WITH PURPOSE
            </div>
            <div className="floating-label label-bottom">
              <span>✳</span> MADE TO MAKE AN IMPACT
            </div>
            <div className="visual-index">01 / 04</div>
          </div>

          <div className="hero-bottom">
            <span>INDEPENDENT WEB DESIGN STUDIO</span>
            <span>SCROLL TO EXPLORE ↓</span>
          </div>
        </section>

        <section className="intro-strip">
          <p>
            GOOD WEBSITES DON'T JUST LOOK GOOD.
            <span> THEY MOVE YOUR BUSINESS FORWARD.</span>
          </p>
          <span className="strip-star">✳</span>
        </section>

        <section className="about-section section-padding" id="about">
          <div className="section-heading">
            <span className="section-label">01 — WHO WE ARE</span>
            <span className="section-side-note">A LITTLE ABOUT US</span>
          </div>

          <div className="about-layout">
            <h2>
              We turn ideas into
              <span> digital experiences.</span>
            </h2>
            <div className="about-copy">
              <p>
                Webhub4u is a web design and development agency focused on
                creating modern, useful and memorable websites for businesses
                and individuals.
              </p>
              <p>
                From the first idea to the final launch, we bring design and
                technology together to make your online presence count.
              </p>
              <a href="#services" className="underlined-link">
                Discover what we do <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        <section className="services-section section-padding" id="services">
          <div className="section-heading">
            <span className="section-label">02 — WHAT WE DO</span>
            <span className="section-side-note">OUR SERVICES</span>
          </div>

          <div className="services-heading">
            <h2>Websites made with <span>purpose.</span></h2>
            <p>
              The right website can change how the world sees your business.
              Let's make that first impression count.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <span className="service-arrow">↗</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-tag">{service.tag}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="work-section section-padding" id="work">
          <div className="section-heading">
            <span className="section-label">03 — SELECTED CONCEPTS</span>
            <span className="section-side-note">A GLIMPSE OF OUR STYLE</span>
          </div>

          <div className="work-heading">
            <h2>Ideas deserve <span>great design.</span></h2>
            <p>
              A preview of the visual direction we bring to digital projects.
              These are concept projects, not client work.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className={`project-art project-art-${project.style}`}>
                  <div className="project-browser">
                    <div className="browser-top">
                      <span></span><span></span><span></span>
                      <small>www.example.com</small>
                    </div>
                    {project.style === 'studio' && (
                      <div className="art-studio">
                        <span>STUDIO / CREATIVE</span>
                        <strong>Ideas<br />into form.</strong>
                        <i>EXPLORE ↗</i>
                      </div>
                    )}
                    {project.style === 'forma' && (
                      <div className="art-forma">
                        <span>FORMA LIVING</span>
                        <strong>Live<br />beautifully.</strong>
                        <div className="forma-shape"></div>
                      </div>
                    )}
                    {project.style === 'frame' && (
                      <div className="art-frame">
                        <span>FRAME & FOCUS</span>
                        <strong>Stories<br />in every frame.</strong>
                        <div className="frame-shape"></div>
                      </div>
                    )}
                  </div>
                  <span className="concept-stamp">CONCEPT<br />PROJECT</span>
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-number">{project.number}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section section-padding" id="process">
          <div className="section-heading">
            <span className="section-label">04 — HOW WE WORK</span>
            <span className="section-side-note">OUR APPROACH</span>
          </div>

          <div className="process-heading">
            <h2>Simple process.<br /><span>Thoughtful results.</span></h2>
            <p>
              Every great website starts with a conversation. Here's how we
              take your idea from concept to launch.
            </p>
          </div>

          <div className="process-grid">
            {process.map(([number, title, description]) => (
              <article className="process-card" key={number}>
                <span className="process-number">{number}</span>
                <div className="process-line"></div>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-section">
          <div className="cta-decoration">✳</div>
          <span className="section-label">HAVE AN IDEA IN MIND?</span>
          <h2>
            Let's make something
            <span> remarkable.</span>
          </h2>
          <p>
            Your next big idea deserves a great website. Let's bring it to life.
          </p>
          <a className="button button-dark" href="#contact">
            Let's build together <span>↗</span>
          </a>
        </section>

        <section className="contact-section section-padding" id="contact">
          <div className="section-heading">
            <span className="section-label">05 — GET IN TOUCH</span>
            <span className="section-side-note">START A CONVERSATION</span>
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <h2>Have a project? <span>Let's talk.</span></h2>
              <p>
                Tell us a little about your idea. We'll take it from there.
              </p>
              <div className="contact-highlight">
                <span className="status-dot"></span>
                OPEN FOR NEW PROJECTS
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                YOUR NAME
                <input type="text" name="name" placeholder="Enter your name" required />
              </label>
              <label>
                EMAIL ADDRESS
                <input type="email" name="email" placeholder="Enter your email" required />
              </label>
              <label>
                WHAT DO YOU NEED?
                <select name="project" defaultValue="" required>
                  <option value="" disabled>Select a website type</option>
                  <option>Business website</option>
                  <option>Portfolio website</option>
                  <option>E-commerce website</option>
                  <option>Landing page</option>
                  <option>Not sure yet</option>
                </select>
              </label>
              <label>
                TELL US ABOUT YOUR PROJECT
                <textarea name="message" rows="4" placeholder="A little about your idea..." required />
              </label>
              <button className="button button-primary form-submit" type="submit">
                Send enquiry <span>↗</span>
              </button>
              {formMessage && <p className="form-message">{formMessage}</p>}
              <p className="form-note">
                This is currently a front-end preview. Enquiries will be
                connected to a backend before launch.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <a className="brand footer-brand" href="#home">
            <span className="brand-symbol">w<span>.</span></span>
            <span className="brand-name">webhub<span>4u</span></span>
          </a>
          <p>Your vision. Our creation.</p>
          <a href="#home" className="back-top">BACK TO TOP ↑</a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Webhub4u. All rights reserved.</span>
          <span>DESIGNED WITH PURPOSE. BUILT FOR GROWTH.</span>
        </div>
      </footer>
    </div>
  )
}

export default App
