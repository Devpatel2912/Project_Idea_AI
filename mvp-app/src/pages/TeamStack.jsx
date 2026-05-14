import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const css = `
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
.ts-page { background: var(--cream); min-height: 100vh; position: relative; overflow: hidden; }
.ts-page::before, .ts-page::after { content: ''; position: absolute; border-radius: 50%; filter: blur(100px); opacity: 0.35; pointer-events: none; z-index: 0; }
.ts-page::before { width: 500px; height: 500px; background: radial-gradient(circle, rgba(179,213,234,0.35), transparent 70%); top: -100px; right: -80px; }
.ts-page::after { width: 600px; height: 600px; background: radial-gradient(circle, rgba(53,88,114,0.15), transparent 70%); bottom: -150px; left: -120px; }
.ts-hero { text-align: center; padding: 100px 24px 60px; position: relative; z-index: 1; }
.ts-hero-chip { display: inline-flex; align-items: center; gap: 8px; font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 700; letter-spacing: 2.5px; text-transform: uppercase; color: var(--primary); background: rgba(53,88,114,0.08); border: 1px solid rgba(53,88,114,0.15); padding: 8px 20px; border-radius: 100px; margin-bottom: 24px; }
.ts-hero-chip::before { content: ''; width: 8px; height: 8px; border-radius: 50%; background: var(--primary); animation: chipPulse 2s ease infinite; }
@keyframes chipPulse { 0%, 100% { opacity: 1; transform: scale(1); } 50% { opacity: 0.5; transform: scale(1.4); } }
.ts-hero h1 { font-family: 'Inter', sans-serif; font-size: clamp(32px, 4.5vw, 54px); font-weight: 900; letter-spacing: -2px; line-height: 1.1; color: var(--primary); margin-bottom: 18px; }
.ts-hero h1 span { color: var(--secondary); }
.ts-hero p { font-family: 'Inter', sans-serif; font-size: 17px; color: var(--soft); line-height: 1.7; max-width: 600px; margin: 0 auto; }
.ts-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; max-width: 1200px; margin: 0 auto; padding: 0 32px 100px; position: relative; z-index: 1; }
.ts-card { background: rgba(255, 255, 255, 0.7); backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.7); border-radius: 24px; padding: 36px 28px 32px; text-align: center; position: relative; overflow: hidden; transition: transform 0.35s cubic-bezier(0.23,1,0.32,1), box-shadow 0.35s cubic-bezier(0.23,1,0.32,1), border-color 0.35s ease; cursor: default; box-shadow: 0 4px 24px rgba(0,0,0,0.04); }
.ts-card:hover { transform: translateY(-10px); box-shadow: 0 20px 60px rgba(53,88,114,0.12), 0 8px 24px rgba(0,0,0,0.06); border-color: rgba(53,88,114,0.2); }
.ts-icon { width: 72px; height: 72px; border-radius: 50%; margin: 0 auto 22px; display: flex; align-items: center; justify-content: center; font-size: 30px; position: relative; transition: transform 0.35s cubic-bezier(0.23,1,0.32,1); }
.ts-card:hover .ts-icon { transform: scale(1.08); }
.ts-icon::after { content: ''; position: absolute; inset: -5px; border-radius: 50%; border: 2px dashed rgba(255,255,255,0.25); animation: iconSpin 20s linear infinite; }
@keyframes iconSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
.ts-icon--orange { background: var(--primary); box-shadow: 0 8px 28px rgba(53,88,114,0.35); }
.ts-icon--pink { background: var(--secondary); box-shadow: 0 8px 28px rgba(122,170,206,0.35); }
.ts-icon--cyan { background: var(--secondary); box-shadow: 0 8px 28px rgba(122,170,206,0.35); }
.ts-icon--purple { background: var(--primary); box-shadow: 0 8px 28px rgba(53,88,114,0.35); }
.ts-card-title { font-family: 'Inter', sans-serif; font-weight: 800; font-size: 19px; color: var(--primary); margin-bottom: 6px; }
.ts-card-subtitle { font-family: 'Inter', sans-serif; font-size: 12.5px; color: var(--soft); margin-bottom: 16px; line-height: 1.5; }
.ts-badge { display: inline-block; font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; padding: 5px 14px; border-radius: 100px; margin-bottom: 20px; }
.ts-badge--orange { background: var(--primary); color: #fff; }
.ts-badge--pink { background: rgba(122,170,206,0.15); color: var(--secondary); }
.ts-badge--cyan { background: rgba(179,213,234,0.2); color: var(--primary); }
.ts-badge--purple { background: rgba(53,88,114,0.1); color: var(--primary); }
.ts-items { display: flex; flex-direction: column; gap: 0; }
.ts-item { display: flex; align-items: center; gap: 12px; font-family: 'Inter', sans-serif; font-size: 13.5px; color: var(--primary); padding: 11px 14px; border-radius: 12px; transition: background 0.2s ease, transform 0.2s ease; text-align: left; }
.ts-item:hover { background: rgba(53,88,114,0.04); transform: translateX(4px); }
.ts-item-dot { width: 7px; height: 7px; border-radius: 50%; flex-shrink: 0; opacity: 0.8; }
.ts-item-dot--orange { background: var(--primary); }
.ts-item-dot--pink { background: var(--secondary); }
.ts-item-dot--cyan { background: var(--secondary); }
.ts-item-dot--purple { background: var(--primary); }
.ts-item + .ts-item { border-top: 1px solid rgba(0,0,0,0.04); }
.ts-cta { max-width: 1200px; margin: 0 auto 80px; padding: 0 32px; position: relative; z-index: 1; }
.ts-cta-inner { background: var(--primary); border-radius: 28px; padding: 56px 48px; text-align: center; position: relative; overflow: hidden; }
.ts-cta-title { font-family: 'Inter', sans-serif; font-size: clamp(24px, 3vw, 38px); font-weight: 800; color: #fff; letter-spacing: -1px; line-height: 1.2; margin-bottom: 14px; position: relative; z-index: 1; }
.ts-cta-sub { font-family: 'Inter', sans-serif; font-size: 15px; color: rgba(255,255,255,0.55); margin-bottom: 28px; position: relative; z-index: 1; }
.ts-cta-techs { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; position: relative; z-index: 1; }
.ts-cta-tech { font-family: 'Inter', sans-serif; font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.8); background: rgba(255,255,255,0.08); border: 1px solid rgba(255,255,255,0.1); padding: 8px 18px; border-radius: 100px; transition: background 0.2s, transform 0.2s; }
.ts-cta-tech:hover { background: rgba(255,255,255,0.15); transform: translateY(-2px); }
@media (max-width: 1024px) { .ts-grid { grid-template-columns: repeat(2, 1fr); gap: 20px; padding: 0 24px 80px; } .ts-hero { padding: 80px 20px 48px; } }
@media (max-width: 640px) { .ts-grid { grid-template-columns: 1fr; gap: 18px; padding: 0 16px 60px; } .ts-hero { padding: 72px 16px 36px; } .ts-card { padding: 28px 22px 24px; } .ts-cta { padding: 0 16px; margin-bottom: 60px; } .ts-cta-inner { padding: 40px 24px; border-radius: 22px; } }
`;

const cards = [
  { icon: "👨‍💻", iconClass: "ts-icon--orange", title: "Dev Patel", subtitle: "Project Lead & Full Stack AI Developer", badgeLabel: "Lead", badgeClass: "ts-badge--orange", dotClass: "ts-item-dot--orange", items: ["React.js & Flutter Development", "Flask / Django Backend APIs", "AI Integration & Prompt Engineering", "PostgreSQL & MongoDB", "Deployment & Testing"] },
  { icon: "🎨", iconClass: "ts-icon--pink", title: "Frontend Stack", subtitle: "Client-side technologies powering the UI", badgeLabel: "UI/UX", badgeClass: "ts-badge--pink", dotClass: "ts-item-dot--pink", items: ["React.js", "Tailwind CSS", "Responsive UI Design", "Component Architecture", "User Interaction Flows"] },
  { icon: "⚡", iconClass: "ts-icon--cyan", title: "Backend Stack", subtitle: "Server infrastructure & API layer", badgeLabel: "Server & APIs", badgeClass: "ts-badge--cyan", dotClass: "ts-item-dot--cyan", items: ["Flask REST APIs", "Authentication System", "Repository Processing", "GitHub Integration", "Scalable Backend Architecture"] },
  { icon: "🧠", iconClass: "ts-icon--purple", title: "AI & Database Stack", subtitle: "Intelligence engine & data persistence", badgeLabel: "AI Integration", badgeClass: "ts-badge--purple", dotClass: "ts-item-dot--purple", items: ["Gemini/OpenAI APIs", "Prompt Engineering", "AI Code Review", "PostgreSQL Database", "Documentation & Testing"] },
];

const ctaTechs = ["React.js", "Flask", "Gemini AI", "PostgreSQL", "GitHub API", "Tailwind CSS", "OpenAI"];

export default function TeamStack() {
  return (
    <>
      <style>{css}</style>
      <Navbar />
      <div className="page ts-page">
        <header className="ts-hero">
          <div className="ts-hero-chip">Team &amp; Stack</div>
          <h1 className="fade-up">Built by Builders,<br /><span>Powered by AI</span></h1>
          <p className="fade-up delay-1">Meet the team and the technology stack behind the Autonomous AI Code Review &amp; Repository Intelligence Platform.</p>
        </header>
        <section className="ts-grid">
          {cards.map((card, i) => (
            <div key={card.title} className="ts-card fade-up" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={`ts-icon ${card.iconClass}`}>{card.icon}</div>
              <div className="ts-card-title">{card.title}</div>
              <div className="ts-card-subtitle">{card.subtitle}</div>
              <span className={`ts-badge ${card.badgeClass}`}>{card.badgeLabel}</span>
              <div className="ts-items">
                {card.items.map((item) => (
                  <div key={item} className="ts-item"><span className={`ts-item-dot ${card.dotClass}`} />{item}</div>
                ))}
              </div>
            </div>
          ))}
        </section>
        <div className="ts-cta">
          <div className="ts-cta-inner">
            <div className="ts-cta-title">End-to-End AI-Powered<br />Code Intelligence</div>
            <div className="ts-cta-sub">Built with modern frameworks &amp; cutting-edge AI</div>
            <div className="ts-cta-techs">{ctaTechs.map((t) => <span key={t} className="ts-cta-tech">{t}</span>)}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}
