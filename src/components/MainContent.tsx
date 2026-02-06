export default function MainContent() {
  return (
    <main className="cv-main">
      {/* Header */}
      <header className="cv-header">
        <h1 className="cv-name">
          Dushime <span className="cv-name-bold">Emani Elvis</span>
        </h1>
        <div className="cv-title">Développeur Web Full Stack</div>
      </header>

      {/* Expériences */}
      <section>
        <h2 className="section-title">Expériences</h2>

        <div className="experience-item">
          <div className="experience-title">Développeur Full Stack Freelance</div>
          <div className="experience-meta">2024 - Présent | Remote</div>
          <ul className="experience-list">
            <li>
              Conception et développement de <strong>TradeHub</strong>, plateforme SaaS complète pour traders :
              Journal de trading avec analyses détaillées, Assistant IA (Claude API),
              Marketplace de stratégies, Architecture Laravel 12 + Vue 3 + Inertia.js, PWA mobile-first
            </li>
            <li>
              Développement site web professionnel pour <strong>Chef Angela</strong> (Kenya) :
              Site multi-pages Next.js responsive, intégration WhatsApp, SEO optimisé —
              <em> chefangela.co.ke</em>
            </li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-title">Développeur Python — Projet Arbitrage P2P</div>
          <div className="experience-meta">Septembre 2025 | Liège, Belgique</div>
          <ul className="experience-list">
            <li>Conception et développement d&apos;un système complet d&apos;analyse d&apos;arbitrage P2P international</li>
            <li>Architecture modulaire avec 95 tests automatisés (Pytest)</li>
            <li>Traitement de données financières multi-devises avec Pandas/NumPy</li>
            <li>Interface CLI professionnelle avec Rich, gestion de projet en autonomie totale</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-title">Développeur Freelance & Formateur — MolenGeek</div>
          <div className="experience-meta">Janvier 2020 - Janvier 2021 | Bruxelles, Belgique</div>
          <ul className="experience-list">
            <li>Développement de scripts et automatisation pour clients particuliers</li>
            <li>Résolution de problèmes techniques informatiques</li>
            <li>Cours particuliers sur les bases de la programmation (JavaScript, Java, C#, Python)</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-title">Hackathon MolenGeek</div>
          <div className="experience-meta">Novembre 2021 | Anvers, Belgique</div>
          <ul className="experience-list">
            <li>Développement en équipe d&apos;une solution tech en 48h</li>
            <li>Création du site web de présentation du projet</li>
            <li>Collaboration en mode Agile avec deadline serrée, pitch devant jury technique</li>
          </ul>
        </div>
      </section>

      {/* Compétences */}
      <section>
        <h2 className="section-title">Compétences</h2>
        <div className="flex flex-wrap gap-4">
          <div className="skill-category" style={{ flex: "1 1 45%" }}>
            <div className="skill-category-title">Backend</div>
            <div className="skill-tags">
              <span className="skill-tag">Laravel 12</span>
              <span className="skill-tag">Python</span>
              <span className="skill-tag">API REST</span>
              <span className="skill-tag">PostgreSQL</span>
              <span className="skill-tag">Redis</span>
              <span className="skill-tag">MySQL</span>
            </div>
          </div>

          <div className="skill-category" style={{ flex: "1 1 45%" }}>
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

          <div className="skill-category" style={{ flex: "1 1 45%" }}>
            <div className="skill-category-title">DevOps & Outils</div>
            <div className="skill-tags">
              <span className="skill-tag">Git / GitHub</span>
              <span className="skill-tag">VPS / Hetzner</span>
              <span className="skill-tag">CI/CD</span>
              <span className="skill-tag">Bash</span>
            </div>
          </div>

          <div className="skill-category" style={{ flex: "1 1 45%" }}>
            <div className="skill-category-title">Data & IA</div>
            <div className="skill-tags">
              <span className="skill-tag">Pandas</span>
              <span className="skill-tag">NumPy</span>
              <span className="skill-tag">Claude AI</span>
              <span className="skill-tag">Pytest</span>
            </div>
          </div>
        </div>
      </section>

      {/* Méthodes */}
      <section>
        <h2 className="section-title">Méthodes</h2>
        <div>
          <span className="method-tag">Méthode Agile</span>
          <span className="method-tag">Gestion de projet autonome</span>
          <span className="method-tag">Mobile-first development</span>
        </div>
      </section>
    </main>
  );
}
