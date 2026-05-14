import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const css = `
.feat-hero { background: var(--cream); padding: 80px 56px 64px; text-align: center; border-bottom: 1px solid var(--border); }
.feat-hero .section-sub { max-width: 520px; margin: 0 auto 36px; }
.feat-section { padding: 80px 56px; }
.feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
.feat-card { background: #fff; border: 1.5px solid var(--border); border-radius: 20px; padding: 28px; transition: transform .2s, box-shadow .2s, border-color .2s; cursor: default; display: flex; flex-direction: column; gap: 14px; }
.feat-card:hover { transform: translateY(-5px); box-shadow: 0 16px 40px rgba(53,88,114,0.08); border-color: var(--secondary); }
.feat-icon-wrap { width: 52px; height: 52px; border-radius: 16px; display: flex; align-items: center; justify-content: center; font-size: 24px; }
.ic1 { background: rgba(53,88,114,0.1); }
.ic2 { background: rgba(122,170,206,0.15); }
.ic3 { background: rgba(53,88,114,0.1); }
.ic4 { background: rgba(179,213,234,0.3); }
.ic5 { background: rgba(122,170,206,0.15); }
.ic6 { background: rgba(53,88,114,0.1); }
.ic7 { background: rgba(179,213,234,0.3); }
.ic8 { background: rgba(122,170,206,0.15); }
.ic9 { background: rgba(53,88,114,0.1); }
.feat-num { font-size: 10px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: var(--soft); }
.feat-name { font-weight: 800; font-size: 17px; line-height: 1.3; }
.feat-info { font-size: 13px; color: var(--soft); line-height: 1.65; }
.feat-tags { display: flex; flex-wrap: wrap; gap: 6px; }
.ftag { font-size: 11px; font-weight: 600; padding: 3px 10px; border-radius: 100px; background: var(--bg); border: 1px solid var(--border); color: var(--soft); }
.tech-section { padding: 0 56px 80px; }
.tech-title { font-weight: 800; font-size: 26px; letter-spacing: -0.5px; margin-bottom: 32px; }
.tech-tiers { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
.tech-tier { background: #fff; border: 1.5px solid var(--border); border-radius: 20px; padding: 28px; }
.tier-label { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; margin-bottom: 16px; padding-bottom: 12px; border-bottom: 1px solid var(--border); }
.tier-label.tl-coral  { color: var(--primary); }
.tier-label.tl-teal   { color: var(--secondary); }
.tier-label.tl-indigo { color: var(--primary); }
.tech-item { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid var(--border); font-size: 14px; font-weight: 500; }
.tech-item:last-child { border-bottom: none; }
.tech-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
.feat-cta { margin: 0 56px 80px; background: var(--bg); border: 1.5px solid var(--border); border-radius: 24px; padding: 48px; text-align: center; }
.feat-cta-title { font-weight: 800; font-size: 28px; letter-spacing: -1px; margin-bottom: 10px; }
.feat-cta-sub { font-size: 15px; color: var(--soft); margin-bottom: 28px; }
`;

const features = [
  { ic:"ic1", icon:"👤", num:"01", name:"User Registration & Login", info:"Secure account creation and authentication so users can save and revisit their MVP plans anytime.", tags:["JWT Auth","Session management","Email verification"] },
  { ic:"ic2", icon:"💡", num:"02", name:"Startup Idea Submission", info:"A clean, guided form where founders describe their startup concept, target users, and industry category.", tags:["Multi-field form","Validation","Category selection"] },
  { ic:"ic3", icon:"🔍", num:"03", name:"Input Preprocessing & Validation", info:"Flask backend sanitizes and validates the idea input before passing it to the AI.", tags:["Server-side validation","Input cleaning","Error handling"] },
  { ic:"ic4", icon:"⚡", num:"04", name:"AI-Based MVP Feature List", info:"Gemini AI analyzes the idea and generates the exact core features your MVP needs.", tags:["Gemini API","Prompt engineering","Structured output"] },
  { ic:"ic5", icon:"🔧", num:"05", name:"Technology Stack Recommendation", info:"Smart suggestions for frontend, backend, and database technologies matched to your idea.", tags:["React","Flask","PostgreSQL"] },
  { ic:"ic6", icon:"🗄️", num:"06", name:"Database Schema Generation", info:"Auto-generated tables, columns, and relationships so your data model is solid.", tags:["PostgreSQL schema","ER design","Normalization"] },
  { ic:"ic7", icon:"🗺️", num:"07", name:"Development Roadmap Creation", info:"A week-by-week sprint plan that prioritizes what to build first.", tags:["Sprint planning","Milestones","Priority order"] },
  { ic:"ic8", icon:"💾", num:"08", name:"Storage of Generated Plans", info:"Every MVP plan you generate is automatically saved and accessible via your dashboard.", tags:["PostgreSQL storage","User history","Plan management"] },
  { ic:"ic9", icon:"📄", num:"09", name:"Export MVP Plan as PDF", info:"Download a polished PDF of your entire MVP blueprint to share with anyone.", tags:["PDF generation","Formatted report","One-click export"] },
];

const tiers = [
  { label:"Presentation Tier", lc:"tl-coral", items:[{dot:"#355872",name:"React.js",note:"Frontend UI"},{dot:"#7AAACE",name:"HTML / CSS / JSX",note:"Markup & styles"}] },
  { label:"Business Tier", lc:"tl-teal", items:[{dot:"#355872",name:"Python + Flask",note:"Backend server"},{dot:"#7AAACE",name:"Node.js",note:"Runtime"},{dot:"#B3D5EA",name:"Gemini API",note:"AI generation"}] },
  { label:"Data Access Tier", lc:"tl-indigo", items:[{dot:"#355872",name:"PostgreSQL",note:"Primary database"},{dot:"#7AAACE",name:"SQLAlchemy ORM",note:"Query layer"}] },
];

export default function Features() {
  return (
    <>
      <style>{css}</style>
      <Navbar />
      <div className="page">
        <div className="feat-hero">
          <div className="section-chip">Capabilities</div>
          <h1 className="section-title fade-up">All 9 Functionalities,<br/>Explained</h1>
          <p className="section-sub fade-up delay-1">Every feature of IdeaToMVP is built to take you from a rough idea to a complete, developer-ready plan.</p>
          <div className="fade-up delay-2"><Link to="/demo" className="btn-coral">Try them all free →</Link></div>
        </div>
        <section className="feat-section">
          <div className="feat-grid">
            {features.map((f,i) => (
              <div key={i} className="feat-card fade-up" style={{animationDelay:`${(i%3)*0.1}s`}}>
                <div className={`feat-icon-wrap ${f.ic}`}>{f.icon}</div>
                <div><div className="feat-num">Feature {f.num}</div><div className="feat-name">{f.name}</div></div>
                <div className="feat-info">{f.info}</div>
                <div className="feat-tags">{f.tags.map(t => <span key={t} className="ftag">{t}</span>)}</div>
              </div>
            ))}
          </div>
        </section>
        <section className="tech-section">
          <h2 className="tech-title">🏗️ Technology Architecture</h2>
          <div className="tech-tiers">
            {tiers.map(t => (
              <div key={t.label} className="tech-tier">
                <div className={`tier-label ${t.lc}`}>{t.label}</div>
                {t.items.map(it => (
                  <div key={it.name} className="tech-item">
                    <div className="tech-dot" style={{background:it.dot}} />
                    <div><div style={{fontWeight:700}}>{it.name}</div><div style={{fontSize:12,color:"var(--soft)"}}>{it.note}</div></div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
        <div className="feat-cta fade-up">
          <div className="feat-cta-title">See all features in action</div>
          <div className="feat-cta-sub">Submit your idea and get every feature working for your startup — completely free.</div>
          <Link to="/demo" className="btn-coral">Generate My MVP Blueprint →</Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
