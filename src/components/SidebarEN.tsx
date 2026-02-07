import Image from "next/image";

// Icons as SVG components
const PhoneIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const EmailIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const GithubIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LocationIcon = () => (
  <svg className="contact-icon" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
  </svg>
);

export default function SidebarEN() {
  return (
    <aside className="cv-sidebar">
      {/* Profile Photo */}
      <div className="profile-photo-wrapper">
        <Image
          src="/images/profile.jpeg"
          alt="Elvis Dushime Emani"
          width={140}
          height={140}
          className="profile-photo"
          priority
        />
      </div>

      {/* About */}
      <section>
        <h2 className="section-title-light">About</h2>
        <p className="about-text">
          Passionate Full Stack Developer with expertise in Laravel, Vue.js and Python.
          I design and develop complete web applications, from MVP to production.
          My area of expertise: trading applications and analytics dashboards,
          but I am comfortable with any type of web project. Rigorous, autonomous and curious,
          I continuously train myself in new technologies.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="section-title-light">Contact</h2>
        <div className="flex flex-col gap-2">
          <div className="contact-item">
            <WhatsAppIcon />
            <span>+32 488486658</span>
          </div>
          <div className="contact-item">
            <EmailIcon />
            <span>dushimeelvis@gmail.com</span>
          </div>
          <div className="contact-item">
            <GithubIcon />
            <span>github.com/OG-Elson</span>
          </div>
          <div className="contact-item">
            <LocationIcon />
            <span>Diani, Kenya</span>
          </div>
        </div>
      </section>

      {/* Strengths */}
      <section>
        <h2 className="section-title-light">Strengths</h2>
        <div className="atout-item">
          <div className="atout-title">Demanding & Hardworking</div>
          <p className="atout-description">
            I give my best when entrusted with a task and I do everything
            in my power to see it through to completion.
          </p>
        </div>
        <div className="atout-item">
          <div className="atout-title">Autonomy & Initiative</div>
          <p className="atout-description">
            Ability to manage projects from A to Z in full autonomy, as demonstrated with TradeHub.
          </p>
        </div>
        <div className="atout-item">
          <div className="atout-title">Trading Expertise</div>
          <p className="atout-description">
            Active trader, I understand the business needs of financial applications.
          </p>
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="section-title-light">Education</h2>
        <div className="formation-item">
          <div className="formation-title">Web Development Front-end & Back-end — MolenGeek</div>
          <div className="formation-date">March 2021 - February 2022</div>
          <p className="formation-description">
            Frontend and backend Web/Mobile development, production of dynamic web pages
            from databases. Project management and interface design.
          </p>
        </div>
      </section>

      {/* Languages */}
      <section>
        <h2 className="section-title-light">Languages</h2>
        <div className="language-item">
          <strong>French</strong> — Native
        </div>
        <div className="language-item">
          <strong>English</strong> — Full Professional
        </div>
      </section>
    </aside>
  );
}
