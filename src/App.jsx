
import { useState } from "react";
import "./App.css";

const packages = [
  {
    name: "Launch",
    price: "₹1,999",
    description: "For individuals and small businesses starting online.",
    popular: false,
    features: [
      "1-page website",
      "Up to 5 sections",
      "Mobile-friendly design",
      "WhatsApp integration",
      "Click-to-call button",
      "Basic SEO setup",
      "Social media links",
      "Customer-provided content",
      "1 revision",
    ],
    delivery: "3–5 working days",
  },
  {
    name: "Growth",
    price: "₹4,999",
    description: "For growing businesses that need a professional online presence.",
    popular: true,
    features: [
      "Up to 5 website pages",
      "Custom website design",
      "Mobile & desktop optimization",
      "WhatsApp integration",
      "Enquiry/contact form",
      "Google Maps integration",
      "Image gallery",
      "Basic on-page SEO",
      "Google Analytics setup",
      "2 revision rounds",
      "15 days post-launch support",
    ],
    delivery: "5–8 working days",
  },
  {
    name: "Authority",
    price: "₹9,999",
    description: "For established businesses looking for a premium digital presence.",
    popular: false,
    features: [
      "Up to 8 website pages",
      "Premium custom UI/UX",
      "Advanced animations",
      "Mobile & desktop optimization",
      "Advanced enquiry forms",
      "WhatsApp integration",
      "Portfolio/gallery section",
      "Google Analytics & Search Console",
      "Advanced on-page SEO",
      "Website speed optimization",
      "Local SEO foundation",
      "3 revision rounds",
      "30 days priority support",
    ],
    delivery: "8–12 working days",
  },
];

const services = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that introduce your business, build trust and turn visitors into enquiries.",
    symbol: "↗",
  },
  {
    number: "02",
    title: "Portfolio Websites",
    description:
      "Beautiful online spaces to showcase your work, projects, photography and creative identity.",
    symbol: "◈",
  },
  {
    number: "03",
    title: "Landing Pages",
    description:
      "Focused, conversion-friendly pages for campaigns, products, launches and special events.",
    symbol: "⌁",
  },
  {
    number: "04",
    title: "Custom Websites",
    description:
      "Tailored website experiences designed around your unique requirements and business goals.",
    symbol: "✳",
  },
];

const projects = [
  {
    number: "01",
    category: "BUSINESS WEBSITE",
    title: "Business & Brand",
    description: "A clean digital presence for a modern business.",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "02",
    category: "CREATIVE PORTFOLIO",
    title: "Creative Studio",
    description: "A visual-first experience for a creative brand.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1000&q=85",
  },
  {
    number: "03",
    category: "EVENT WEBSITE",
    title: "Event Experience",
    description: "An engaging digital destination for an event.",
    image:
      "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?auto=format&fit=crop&w=1000&q=85",
  },
];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand your business, audience, goals and website requirements.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a visual direction that reflects your brand and stands apart.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We turn the approved design into a responsive, working website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "After testing and approval, we publish your website and hand it over.",
  },
];

function Brand({ footer = false }) {
  return (
    <a className={`brand ${footer ? "brand-footer" : ""}`} href="#home">
      <span className="brand-mark">W<span>.</span></span>
      <span className="brand-name">webhub<span>4u</span></span>
    </a>
  );
}

function Arrow() {
  return <span className="arrow">↗</span>;
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const closeMenu = () => setMenuOpen(false);

  function handleSubmit(event) {
    event.preventDefault();
    setFormStatus(
      "This is a preview form. Enquiry delivery will be connected in the next development phase."
    );
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <Brand />

        <button
          className="menu-toggle"
          type="button"
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>

        <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          {["Home", "Services", "Projects", "Pricing", "About", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
              >
                {item}
              </a>
            )
          )}
          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            Start a project <Arrow />
          </a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
          <div className="hero-image" />
          <div className="hero-overlay" />

          <div className="hero-content">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              WEB DESIGN & DEVELOPMENT
            </div>

            <h1>
              We build websites
              <br />
              that <em>move brands</em>
              <br />
              forward.
            </h1>

            <p className="hero-description">
              Thoughtful design. Powerful development. Digital experiences
              built to help your business grow.
            </p>

            <div className="hero-actions">
              <a className="button button-lime" href="#pricing">
                Explore packages <Arrow />
              </a>
              <a className="hero-text-link" href="#projects">
                Discover our work <span>↓</span>
              </a>
            </div>

            <div className="hero-bottom-note">
              <span>DESIGNED WITH PURPOSE</span>
              <span className="hero-note-line" />
              <span>BUILT FOR GROWTH</span>
            </div>
          </div>

          <div className="hero-orbit orbit-a" />
          <div className="hero-orbit orbit-b" />

          <div className="hero-floating-card">
            <span className="floating-icon">✳</span>
            <div>
              <strong>Made for your brand</strong>
              <small>Every detail has a purpose.</small>
            </div>
          </div>

          <div className="hero-side-label">WEBHUB4U® — INDIA</div>
        </section>

        <section className="intro-strip">
          <p>
            Your vision. <span>Our creation.</span>
          </p>
          <span className="intro-symbol">✳</span>
          <p className="intro-small">
            Digital experiences for ambitious businesses.
          </p>
        </section>

        <section className="services section-light" id="services">
          <div className="section-topline">
            <span>01 / WHAT WE DO</span>
            <span>OUR SERVICES</span>
          </div>

          <div className="section-heading services-heading">
            <h2>
              One focus.
              <br />
              <em>Better websites.</em>
            </h2>
            <p>
              We focus on creating websites that look exceptional, communicate
              clearly and make it easier for customers to choose your business.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number}>
                <div className="service-card-top">
                  <span>{service.number}</span>
                  <span className="service-symbol">{service.symbol}</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <a href="#contact" className="service-link" aria-label={`Enquire about ${service.title}`}>
                  Explore <Arrow />
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-section" id="pricing">
          <div className="pricing-backdrop" />
          <div className="pricing-inner">
            <div className="pricing-heading">
              <span className="section-kicker">02 / SIMPLE & TRANSPARENT</span>
              <h2>
                Clear packages.
                <br />
                <em>No mystery quotes.</em>
              </h2>
              <p>
                One-time project pricing · India · Introductory launch rates
              </p>
            </div>

            <div className="pricing-grid">
              {packages.map((plan) => (
                <article
                  className={`price-card ${plan.popular ? "price-popular" : ""}`}
                  key={plan.name}
                >
                  {plan.popular && (
                    <div className="popular-label">MOST POPULAR</div>
                  )}

                  <div className="price-card-heading">
                    <h3>{plan.name}</h3>
                    <div className="price">{plan.price}</div>
                    <span className="payment-label">One-time payment</span>
                    <p>{plan.description}</p>
                  </div>

                  <div className="feature-heading">WHAT'S INCLUDED</div>

                  <ul className="feature-list">
                    {plan.features.map((feature) => (
                      <li key={feature}>
                        <span className="check">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="delivery-time">
                    <span>◷</span> {plan.delivery}
                  </div>

                  <a
                    className={`price-button ${plan.popular ? "price-button-primary" : ""}`}
                    href={`#contact`}
                  >
                    Choose {plan.name} <Arrow />
                  </a>
                </article>
              ))}

              <article className="price-card custom-card">
                <div className="custom-icon">✳</div>
                <div className="custom-card-heading">
                  <span className="custom-kicker">BUILT AROUND YOU</span>
                  <h3>Custom</h3>
                  <p>
                    A tailored website experience built around your unique
                    requirements.
                  </p>
                </div>

                <div className="feature-heading">MADE TO FIT</div>
                <ul className="feature-list">
                  <li><span className="check">✓</span><span>Custom pages & features</span></li>
                  <li><span className="check">✓</span><span>Advanced integrations</span></li>
                  <li><span className="check">✓</span><span>Scalable & future-ready</span></li>
                  <li><span className="check">✓</span><span>Ideal for complex requirements</span></li>
                </ul>

                <div className="custom-price-note">
                  Pricing based on your requirements.
                </div>
                <a className="price-button custom-button" href="#contact">
                  Get a custom quote <Arrow />
                </a>
              </article>
            </div>

            <div className="pricing-assurance">
              <span>✳ ONE-TIME PAYMENT</span>
              <span>◇ TRANSPARENT PRICING</span>
              <span>↗ RESPONSIVE DESIGN</span>
              <span>◎ SUPPORT INCLUDED</span>
            </div>
          </div>
        </section>

        <section className="projects section-light" id="projects">
          <div className="section-topline">
            <span>03 / SELECTED CONCEPTS</span>
            <span>OUR WORK</span>
          </div>

          <div className="section-heading projects-heading">
            <h2>
              Made to be
              <br />
              <em>remembered.</em>
            </h2>
            <p>
              A glimpse of the digital experiences we aim to create for
              businesses, brands and creators.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-image-wrap">
                  <img src={project.image} alt={project.title} />
                  <span className="project-image-number">{project.number}</span>
                  <span className="project-image-arrow"><Arrow /></span>
                  <span className="concept-label">VISUAL CONCEPT</span>
                </div>
                <div className="project-info">
                  <div>
                    <span className="project-category">{project.category}</span>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </div>
                  <span className="project-info-arrow">↗</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="process-section" id="about">
          <div className="process-inner">
            <div className="section-topline">
              <span>04 / HOW WE WORK</span>
              <span>OUR PROCESS</span>
            </div>

            <div className="section-heading process-heading">
              <h2>
                From first idea
                <br />
                to <em>final launch.</em>
              </h2>
              <p>
                A clear process keeps your project organised, collaborative and
                moving in the right direction.
              </p>
            </div>

            <div className="process-grid">
              {process.map((step) => (
                <article className="process-card" key={step.number}>
                  <span className="process-number">{step.number}</span>
                  <div className="process-line" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-banner">
          <div className="contact-banner-glow" />
          <span className="section-kicker">HAVE A PROJECT IN MIND?</span>
          <h2>
            Your next website
            <br />
            starts <em>right here.</em>
          </h2>
          <p>Let's turn your idea into a digital experience worth remembering.</p>
          <a className="button button-lime" href="#contact">
            Let's talk <Arrow />
          </a>
        </section>

        <section className="contact-section section-light" id="contact">
          <div className="section-topline">
            <span>05 / GET IN TOUCH</span>
            <span>START A PROJECT</span>
          </div>

          <div className="contact-layout">
            <div className="contact-copy">
              <h2>
                Let's build
                <br />
                something <em>great.</em>
              </h2>
              <p>
                Tell us a little about your business and the website you have
                in mind. We'll take it from there.
              </p>
              <div className="contact-note">
                <span className="contact-note-dot" />
                OPEN FOR NEW PROJECTS
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <label>
                YOUR NAME
                <input type="text" name="name" placeholder="Your full name" required />
              </label>

              <label>
                EMAIL ADDRESS
                <input type="email" name="email" placeholder="you@example.com" required />
              </label>

              <label>
                WHAT DO YOU NEED?
                <select name="package" defaultValue="" required>
                  <option value="" disabled>Select a package</option>
                  <option>Launch — ₹1,999</option>
                  <option>Growth — ₹4,999</option>
                  <option>Authority — ₹9,999</option>
                  <option>Custom website</option>
                  <option>Not sure yet</option>
                </select>
              </label>

              <label>
                TELL US ABOUT YOUR PROJECT
                <textarea
                  name="message"
                  rows="4"
                  placeholder="A little about your business and website requirements..."
                  required
                />
              </label>

              <button className="button button-dark" type="submit">
                Send project enquiry <Arrow />
              </button>

              {formStatus && <p className="form-status">{formStatus}</p>}
              <p className="form-disclaimer">
                This is a frontend preview. Form delivery will be connected
                before the website launch.
              </p>
            </form>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-top">
          <div className="footer-brand-block">
            <Brand footer />
            <p>Your vision. Our creation.</p>
            <span>Web design & development for growing brands.</span>
          </div>

          <div className="footer-column">
            <h4>EXPLORE</h4>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="footer-column">
            <h4>PACKAGES</h4>
            <a href="#pricing">Launch</a>
            <a href="#pricing">Growth</a>
            <a href="#pricing">Authority</a>
            <a href="#pricing">Custom</a>
          </div>

          <div className="footer-column footer-contact">
            <h4>LET'S CONNECT</h4>
            <p>Have a project in mind?</p>
            <a href="#contact" className="footer-contact-link">
              Start a conversation <Arrow />
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Webhub4u. All rights reserved.</span>
          <span>DESIGNED WITH PURPOSE. BUILT FOR GROWTH.</span>
          <a href="#home">BACK TO TOP ↑</a>
        </div>
      </footer>
    </div>
  );
}
