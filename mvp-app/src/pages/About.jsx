import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const css = `
.about-hero { background: var(--cream); padding: 80px 56px 64px; text-align: center; border-bottom: 1px solid var(--border); }
.about-hero .section-sub { max-width: 520px; margin: 0 auto; }
.project-section { padding: 80px 56px 0; }
.project-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 32px; margin-top: 40px; }
.project-card { background: #fff; border: 1.5px solid var(--border); border-radius: 20px; padding: 32px; }
.project-card-title { font-weight: 800; font-size: 18px; margin-bottom: 16px; display: flex; align-items: center; gap: 10px; }
.project-desc { font-size: 15px; color: var(--soft); line-height: 1.75; }
.project-list { display: flex; flex-direction: column; gap: 10px; }
.project-list-item { display: flex; align-items: center; gap: 12px; font-size: 14px; padding: 10px 14px; background: var(--bg); border-radius: 10px; }
.pli-num { width: 26px; height: 26px; border-radius: 7px; flex-shrink: 0; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 800; color: #fff; }
.mission-section { margin: 64px 56px 80px; background: var(--primary); border-radius: 24px; padding: 60px; text-align: center; color: #fff; }
.mission-title { font-family: 'Instrument Serif', serif; font-style: italic; font-size: clamp(28px, 3.5vw, 46px); font-weight: 400; letter-spacing: -1px; line-height: 1.25; margin-bottom: 20px; }
.mission-sub { font-size: 15px; opacity: 0.75; margin-bottom: 32px; }
`;

const funcs = [
  ["#355872","User registration and login"],
  ["#7AAACE","Startup idea submission"],
  ["#355872","Input preprocessing & validation"],
  ["#B3D5EA","AI-based MVP feature list"],
  ["#355872","Technology stack recommendation"],
  ["#7AAACE","Database schema generation"],
  ["#355872","Development roadmap creation"],
  ["#7AAACE","Storage of generated MVP plans"],
  ["#355872","Export MVP plan as PDF"],
];

export default function About() {
  return (
    <>
      <style>{css}</style>
      <Navbar />
      <div className="page">
        <div className="about-hero">
          <div className="section-chip">About</div>
          <h1 className="section-title fade-up">Meet the Team Behind<br/>IdeaToMVP</h1>
          <p className="section-sub fade-up delay-1">We're four MSCIT students who built an AI-powered tool to help startup founders go from idea to developer-ready MVP plan — instantly.</p>
        </div>
        <section className="project-section">
          <div className="section-chip">The Project</div>
          <h2 className="section-title">From Idea to MVP —<br/>AI Software Architect</h2>
          <div className="project-grid">
            <div className="project-card">
              <div className="project-card-title">📋 Project Overview</div>
              <p className="project-desc">
                IdeaToMVP is an AI-powered platform that helps startup founders and entrepreneurs transform a rough idea into a complete Minimum Viable Product plan.
                <br/><br/>
                Powered by <strong>Google Gemini AI</strong>, it automatically generates a prioritized feature list, the best technology stack, a database schema, and a week-by-week development roadmap — all in under 30 seconds.
                <br/><br/>
                Built as part of our MSCIT program final project.
              </p>
            </div>
            <div className="project-card">
              <div className="project-card-title">⚙️ 9 Core Functionalities</div>
              <div className="project-list">
                {funcs.map(([color, label], i) => (
                  <div key={i} className="project-list-item">
                    <div className="pli-num" style={{background:color}}>{String(i+1).padStart(2,"0")}</div>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <div className="mission-section fade-up">
          <div className="mission-title">"The fastest way from startup idea<br/>to developer-ready spec."</div>
          <div className="mission-sub">Built with React.js · Flask · Gemini AI · PostgreSQL</div>
          <Link to="/demo" style={{background:"#fff",color:"var(--primary)",border:"none",padding:"14px 30px",borderRadius:"100px",fontFamily:"'Plus Jakarta Sans',sans-serif",fontWeight:700,fontSize:15,cursor:"pointer",textDecoration:"none",display:"inline-block"}}>
            Try It Free →
          </Link>
        </div>
        <Footer />
      </div>
    </>
  );
}
