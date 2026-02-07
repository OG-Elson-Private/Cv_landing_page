export default function MainContentEN() {
  return (
    <main className="cv-main">
      {/* Header */}
      <header className="cv-header">
        <h1 className="cv-name">
          Dushime <span className="cv-name-bold">Emani Elvis</span>
        </h1>
        <div className="cv-title">Full Stack Web Developer</div>
      </header>

      {/* Experience */}
      <section>
        <h2 className="section-title">Experience</h2>

        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="experience-title">Full Stack Freelance Developer</div>
              <div className="experience-meta">2024 - Present | Remote</div>
              <ul className="experience-list">
                <li>
                  Design and development of <strong>TradeHub</strong>, a complete SaaS platform for traders:
                  Trading journal with detailed analytics, AI Assistant (Claude API),
                  Strategy marketplace, Laravel 12 + Vue 3 + Inertia.js architecture, mobile-first PWA
                </li>
                <li>
                  Professional website development for <strong>Chef Angela</strong> (Kenya):
                  Multi-page responsive Next.js site, WhatsApp integration, SEO optimized —
                  <em> chefangela.co.ke</em>
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="experience-title">Python Developer — P2P Arbitrage Project</div>
              <div className="experience-meta">September 2025 | Liege, Belgium</div>
              <ul className="experience-list">
                <li>Design and development of a complete international P2P arbitrage analysis system</li>
                <li>Modular architecture with 95 automated tests (Pytest)</li>
                <li>Multi-currency financial data processing with Pandas/NumPy</li>
                <li>Professional CLI interface with Rich, fully autonomous project management</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="experience-title">Freelance Developer & Trainer — MolenGeek</div>
              <div className="experience-meta">January 2020 - January 2021 | Brussels, Belgium</div>
              <ul className="experience-list">
                <li>Script development and automation for individual clients</li>
                <li>Technical IT troubleshooting</li>
                <li>Private tutoring on programming basics (JavaScript, Java, C#, Python)</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot" />
            <div className="timeline-content">
              <div className="experience-title">MolenGeek Hackathon</div>
              <div className="experience-meta">November 2021 | Antwerp, Belgium</div>
              <ul className="experience-list">
                <li>Team development of a tech solution in 48 hours</li>
                <li>Creation of the project presentation website</li>
                <li>Agile collaboration under tight deadline, pitch before technical jury</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="section-title">Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <div className="skill-category-title">Backend</div>
            <div className="skill-tags">
              <span className="skill-tag">Laravel 12</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">REST API</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-title">Frontend</div>
            <div className="skill-tags">
              <span className="skill-tag">Vue.js 3</span>
              <span className="skill-tag">Inertia.js</span>
              <span className="skill-tag">Tailwind CSS</span>
              <span className="skill-tag">JavaScript</span>
              <span className="skill-tag">HTML & CSS</span>
              <span className="skill-tag">PWA</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-title">DevOps & Tools</div>
            <div className="skill-tags">
              <span className="skill-tag">Git / GitHub</span>
              <span className="skill-tag">VPS / Hetzner</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Bash</span>
            </div>
          </div>

          <div className="skill-category">
            <div className="skill-category-title">Data & AI</div>
            <div className="skill-tags">
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Claude AI</span>
              <span className="skill-tag">Pytest</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methods */}
      <section>
        <h2 className="section-title">Methods</h2>
        <div className="skill-tags">
          <span className="method-tag">Agile Methodology</span>
          <span className="method-tag">Autonomous Project Management</span>
          <span className="method-tag">Mobile-first Development</span>
        </div>
      </section>
    </main>
  );
}
