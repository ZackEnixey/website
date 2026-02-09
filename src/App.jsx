import './App.css';

const App = () => {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo">
          <span className="logo-mark">CHP</span>
          <div>
            <p className="logo-title">Cyberdigma Hospitality Platform</p>
            <p className="logo-subtitle">Built by hospitality people</p>
          </div>
        </div>
        <nav className="nav">
          <a href="#overview">Overview</a>
          <a href="#pillars">Value</a>
          <a href="#tiers">Pricing</a>
          <a href="#implementation">Implementation</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section id="overview" className="hero">
          <div className="hero-content">
            <p className="eyebrow">Fits into your flow</p>
            <h1>One platform for meeting and event operations.</h1>
            <p className="lead">
              CHP is an API-first Event Management System for venues that already use a
              PMS. It brings clarity to availability, pricing, proposals, and daily
              workflows without replacing the tools your team relies on.
            </p>
            <div className="hero-actions">
              <button className="button primary">Talk to the CHP team</button>
              <button className="button ghost">Request a walkthrough</button>
            </div>
            <div className="hero-metrics">
              <div>
                <h3>2025 goals</h3>
                <p>Quarterly growth, 10 new widgets by April, and doubled instant bookings.</p>
              </div>
              <div>
                <h3>Backed by Meetingselect</h3>
                <p>Rooted in Seats2Meet operations and built for live hospitality teams.</p>
              </div>
              <div>
                <h3>Human-first tech</h3>
                <p>Supportive, respectful, and grounded in how venues really work.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="proof">
          <div>
            <p className="section-label">WHY CHP</p>
            <h2>Meeting bookings are still handled manually.</h2>
            <p>
              Spreadsheets, inboxes, and disconnected calendars slow response times and
              make pricing decisions hard to control. CHP works with your existing
              systems to turn meeting demand into consistent, predictable operations.
            </p>
          </div>
          <div className="proof-panel">
            <p className="section-tag">WORKS WITH YOUR TEAM</p>
            <p className="section-tag">NO REPLACEMENT OF YOUR PMS</p>
            <p className="section-tag">CLARITY FOR OPERATIONS AND SALES</p>
          </div>
        </section>

        <section id="pillars" className="pillars">
          <p className="section-label">FOUR PILLARS</p>
          <h2>Value built around how venues operate.</h2>
          <div className="pillar-grid">
            <article>
              <h3>Simplified venue management</h3>
              <p>Coordinate departments, assign tasks, and shape proposals in one place.</p>
            </article>
            <article>
              <h3>Flexible invoice management</h3>
              <p>Combine invoices, track payments, and choose manual or automated flows.</p>
            </article>
            <article>
              <h3>Dynamic pricing &amp; yielding</h3>
              <p>Apply discounts, surcharges, vouchers, and VAT updates with confidence.</p>
            </article>
            <article>
              <h3>Full operational control</h3>
              <p>Unlimited users, clear permissions, and integrated customer touchpoints.</p>
            </article>
          </div>
        </section>

        <section id="tiers" className="tiers">
          <div className="tiers-header">
            <p className="section-label">PRODUCT TIERS</p>
            <h2>Choose the level that fits your venue.</h2>
            <p>
              Start with a booking widget or grow into a full management suite without
              changing platforms.
            </p>
          </div>
          <div className="tier-grid">
            <article className="tier-card">
              <h3>Meeting Booking Widget</h3>
              <p className="tier-price">€69 / month</p>
              <ul>
                <li>White-labeled widget</li>
                <li>Shiji integration</li>
                <li>Basic channel management</li>
              </ul>
            </article>
            <article className="tier-card highlighted">
              <h3>CHP Lite</h3>
              <p className="tier-price">€295 / month (+€40 per room after 5)</p>
              <ul>
                <li>White-labeled proposals</li>
                <li>CRM and operational reporting</li>
                <li>Invoice control &amp; payment tracking</li>
              </ul>
            </article>
            <article className="tier-card">
              <h3>CHP Pro</h3>
              <p className="tier-price">€995 / month</p>
              <ul>
                <li>Advanced yielding &amp; forecasting</li>
                <li>Unlimited users and permissions</li>
                <li>6 hours of live training</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="compare">
          <div className="compare-text">
            <p className="section-label">COMPETITIVE CONTEXT</p>
            <h2>A focused alternative to larger suites.</h2>
            <p>
              CHP matches the operational depth of larger platforms while keeping
              costs predictable and implementation clear.
            </p>
          </div>
          <div className="compare-list">
            <div>
              <h4>Pxier</h4>
              <p>Automation-first with per-room pricing.</p>
            </div>
            <div>
              <h4>Aqqo</h4>
              <p>Broad booking modes with variable subscription tiers.</p>
            </div>
            <div>
              <h4>MeetingPackage</h4>
              <p>Hotel-focused automation with service workflows.</p>
            </div>
            <div>
              <h4>Thynk.Cloud</h4>
              <p>Groups &amp; events booking engine, pricing on request.</p>
            </div>
          </div>
        </section>

        <section id="implementation" className="implementation">
          <div className="implementation-header">
            <p className="section-label">IMPLEMENTATION</p>
            <h2>A guided rollout designed for speed.</h2>
          </div>
          <div className="timeline">
            <div>
              <h3>Phase 0</h3>
              <p>Quick proposal, initial concept, and high-level plan.</p>
            </div>
            <div>
              <h3>Month 1</h3>
              <p>Launch a focused one-page marketing site with dynamic pricing USPs.</p>
            </div>
            <div>
              <h3>Following months</h3>
              <p>SEO, blog integration, and brand extensions.</p>
            </div>
          </div>
          <div className="requirements">
            <div>
              <h3>Go-live essentials</h3>
              <ul>
                <li>Booking terms and privacy statements (NL/EN).</li>
                <li>Logo, color palette, and font guidelines.</li>
                <li>Custom login URL and reminder schedule.</li>
              </ul>
            </div>
            <div>
              <h3>Venue data</h3>
              <ul>
                <li>Location, host, and company billing details.</li>
                <li>Room dimensions, pricing, and availability rules.</li>
                <li>Preferred automated email address.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="personas">
          <p className="section-label">BUYER PERSONAS</p>
          <h2>Designed for every decision role.</h2>
          <div className="persona-grid">
            <article>
              <h3>Initiator</h3>
              <p>Wants scalable operations and reduced team frustration.</p>
            </article>
            <article>
              <h3>User</h3>
              <p>Needs relief from manual data entry and group request overload.</p>
            </article>
            <article>
              <h3>Decision-maker</h3>
              <p>Focuses on ROI, conversion rates, and long-term value.</p>
            </article>
            <article>
              <h3>Gatekeeper</h3>
              <p>Looks for proposals that solve specific operational challenges.</p>
            </article>
          </div>
        </section>

        <section className="cta">
          <div>
            <h2>Ready to see how CHP fits into your flow?</h2>
            <p>
              We help venues move from manual meeting operations to structured,
              predictable workflows with minimal disruption.
            </p>
          </div>
          <button className="button primary">Schedule a consultation</button>
        </section>
      </main>

      <footer id="contact" className="contact">
        <div className="contact-info">
          <h2>Contact CHP</h2>
          <p>
            Have questions about modernizing MICE bookings? We can help with platform
            details, pricing, and integration support.
          </p>
          <ul>
            <li>+31 (0)20 555 0140</li>
            <li>hello@cyberdigma.com</li>
            <li>Utrecht, The Netherlands</li>
          </ul>
        </div>
        <form className="contact-form">
          <label>
            First name
            <input type="text" placeholder="First name" />
          </label>
          <label>
            Last name
            <input type="text" placeholder="Last name" />
          </label>
          <label>
            Phone number
            <input type="tel" placeholder="Phone number" />
          </label>
          <label>
            Work email
            <input type="email" placeholder="Work email" />
          </label>
          <label>
            Message
            <textarea rows="4" placeholder="Tell us about your venue"></textarea>
          </label>
          <button type="submit" className="button primary">Send message</button>
        </form>
      </footer>
    </div>
  );
};

export default App;
