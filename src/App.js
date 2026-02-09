import './App.css';

const App = () => {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">CHP</div>
        <nav className="nav">
          <a href="#home">Home</a>
          <a href="#offer">Offer</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Built for Operations. Designed for Meetings</p>
            <h1>An Event Management System for venues that already use a PMS.</h1>
            <p className="lead">
              CHP (Cyberdigma Hospitality Platform) helps venues manage meetings and
              events in a more structured, predictable way - from availability and
              pricing to bookings and day-to-day operations.
            </p>
            <div className="hero-actions">
              <button className="button primary">Talk to us</button>
              <button className="button ghost">Request a demo</button>
            </div>
          </div>
        </section>

        <section className="split-section light" id="offer">
          <div className="split-content">
            <p className="section-label">THE PROBLEM</p>
            <h2>Meeting operations are still highly manual.</h2>
            <p>
              Emails, spreadsheets, disconnected tools, and slow internal processes
              make it difficult for venues to stay in control, respond consistently,
              and price meetings with confidence - especially when demand fluctuates.
            </p>
            <p className="section-tag">JUST CLEARER CONTROL OVER MEETING OPERATIONS</p>
          </div>
          <div className="split-panel"></div>
        </section>

        <section className="split-section" id="projects">
          <div className="split-content">
            <p className="section-label">THE SOLUTION</p>
            <div className="pill-row">
              <span>NO DISRUPTION</span>
              <span>NO REPLACEMENT OF YOUR PMS</span>
            </div>
            <h2>Event management, built specifically for meeting venues</h2>
            <p>
              It works alongside your existing systems and gives your team one place
              to manage availability, pricing logic, bookings, and operational workflows.
            </p>
            <p>
              CHP is an Event Management System created for venues where meetings and
              events are part of daily operations.
            </p>
          </div>
          <div className="split-panel"></div>
        </section>

        <section className="benefits">
          <p className="section-label">KEY BENEFITS</p>
          <h2>Built to fit your operation</h2>
          <div className="benefit-grid">
            <div>
              <h3>API-first, flexible</h3>
              <p>
                Designed to work with the systems you already use - without forcing
                you into a new way of working.
              </p>
            </div>
            <div>
              <h3>Operational clarity</h3>
              <p>
                Reduce back-and-forth, speed up response times, and keep meeting-related
                workflows structured and transparent.
              </p>
            </div>
            <div>
              <h3>Pricing &amp; yielding for meetings</h3>
              <p>
                Automatically adjust meeting prices based on occupancy, demand, or
                availability, supporting smarter revenue decisions.
              </p>
            </div>
          </div>
        </section>

        <section className="info-cards">
          <div className="card">
            <p className="section-label">HOW IT WORKS</p>
            <ul>
              <li>A Meeting Booking Widget on your website</li>
              <li>A central platform for availability, pricing logic, and operations</li>
              <li>Works alongside your PMS and other hospitality systems</li>
              <li>Designed as an add-on, not a replacement</li>
            </ul>
            <a className="text-link" href="#contact">
              READ MORE ⟶
            </a>
          </div>
          <div className="card">
            <p className="section-label">WHO IS IT FOR</p>
            <ul>
              <li>Hotels and hospitality venues</li>
              <li>Meeting and event centers</li>
              <li>Coworking spaces</li>
              <li>Teams responsible for operations, sales, and revenue</li>
            </ul>
            <p>If meetings are part of how your venue operates, CHP fits into your flow.</p>
            <a className="text-link" href="#contact">
              READ MORE ⟶
            </a>
          </div>
        </section>

        <section className="trust">
          <p className="section-label">TRUST &amp; BACKGROUND</p>
          <p>
            CHP was shaped in live hospitality environments and continues to evolve
            based on how venues actually work - focusing on operational reality rather
            than generic software promises.
          </p>
          <p>Built from real venue operations and backed by Meetingselect.</p>
        </section>

        <section className="feature-grid">
          <div className="feature">
            <h3>Full Operations</h3>
            <p>Complete control with role-based access.</p>
          </div>
          <div className="feature">
            <h3>Invoice Control</h3>
            <p>Tailor billing to your specific needs.</p>
          </div>
          <div className="feature">
            <h3>Dynamic Pricing</h3>
            <p>Maximize revenue with smart, real-time rate adjustments.</p>
          </div>
          <div className="feature">
            <h3>Unified Venues</h3>
            <p>Centralize all aspects of your event space operations.</p>
          </div>
          <div className="feature">
            <h3>Instant Bookings</h3>
            <p>Double your direct bookings with streamlined processes.</p>
          </div>
          <div className="feature">
            <h3>API-First Platform</h3>
            <p>Seamlessly integrate with existing systems for modern MICE bookings.</p>
          </div>
        </section>

        <section className="partners">
          <p className="section-label">PARTNERS</p>
        </section>

        <section className="newsletter">
          <div>
            <h2>Sign up for the CHP newsletter!</h2>
            <p>
              Stay inspired. Subscribe to our newsletter for fresh updates, special
              offers, and a touch of colour in your inbox.
            </p>
          </div>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="contact-info">
          <h2>Contact</h2>
          <p>
            Have questions about modernizing your MICE bookings with CHP? Our team is
            ready to assist with platform details, pricing, or integration support.
            Reach out today!
          </p>
          <ul>
            <li>+12345678901</li>
            <li>contact@chp.com</li>
            <li>Tech Park 5 Utrecht</li>
          </ul>
        </div>
        <form className="contact-form">
          <label>
            First name
            <input type="text" placeholder="First name" />
          </label>
          <label>
            Last Name
            <input type="text" placeholder="Last name" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="Phone number" />
          </label>
          <label>
            Your e-mail
            <input type="email" placeholder="Your e-mail" />
          </label>
          <label>
            Message content
            <textarea rows="4" placeholder="Message"></textarea>
          </label>
          <button type="submit" className="button primary">Send</button>
        </form>
      </footer>
    </div>
  );
};

export default App;
