import { useState } from 'react';


export default function Auth() {
  const [tab, setTab] = useState("login");
  const [login, setLogin] = useState({ email: "", password: "" });
  const [signup, setSignup] = useState({ firstName: "", lastName: "", email: "", phone: "", password: "", confirm: "" });
  const [loginMsg, setLoginMsg] = useState(null);
  const [signupMsg, setSignupMsg] = useState(null);
  const [loginErr, setLoginErr] = useState("");
  const [signupErr, setSignupErr] = useState("");
 
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginErr("");
    if (!login.email || !login.password) { setLoginErr("Please fill in all fields."); return; }
    if (!login.email.includes("@")) { setLoginErr("Enter a valid email address."); return; }
    setLoginMsg(`Welcome back! Logged in as ${login.email}`);
  };
 
  const handleSignup = (e) => {
    e.preventDefault();
    setSignupErr("");
    const { firstName, lastName, email, phone, password, confirm } = signup;
    if (!firstName || !lastName || !email || !password || !confirm) { setSignupErr("Please fill in all required fields."); return; }
    if (!email.includes("@")) { setSignupErr("Enter a valid email address."); return; }
    if (password.length < 6) { setSignupErr("Password must be at least 6 characters."); return; }
    if (password !== confirm) { setSignupErr("Passwords do not match."); return; }
    setSignupMsg(`Account created! Welcome, ${firstName} 🎉`);
  };
 
  return (
    <>
      
      <div className="auth-page">
        <div className="auth-card">
 
          {/* Logo */}
          <div className="auth-logo">Shop<span>Zone</span></div>
          <p className="auth-tagline">
            {tab === "login" ? "Sign in to your account" : "Create your free account"}
          </p>
 
          {/* Tabs */}
          <div className="auth-tabs">
            <button className={`auth-tab${tab === "login" ? " active" : ""}`} onClick={() => { setTab("login"); setLoginMsg(null); setLoginErr(""); }}>
              Login
            </button>
            <button className={`auth-tab${tab === "signup" ? " active" : ""}`} onClick={() => { setTab("signup"); setSignupMsg(null); setSignupErr(""); }}>
              Sign Up
            </button>
          </div>
 
          {/* ── LOGIN FORM ── */}
          {tab === "login" && (
            <form onSubmit={handleLogin} noValidate>
              {loginMsg && <div className="auth-success">✅ {loginMsg}</div>}
              {loginErr && <div className="auth-error">⚠️ {loginErr}</div>}
 
              <label className="auth-label">Email Address</label>
              <input
                className="auth-input"
                type="email"
                placeholder="you@email.com"
                value={login.email}
                onChange={e => setLogin({ ...login, email: e.target.value })}
              />
 
              <label className="auth-label">Password</label>
              <input
                className="auth-input"
                type="password"
                placeholder="••••••••"
                value={login.password}
                onChange={e => setLogin({ ...login, password: e.target.value })}
              />
 
              <button type="button" className="auth-forgot">Forgot password?</button>
 
              <button type="submit" className="auth-submit-btn">Sign In →</button>
 
              <div className="auth-or">
                <div className="auth-or-line" />
                <span className="auth-or-text">or continue with</span>
                <div className="auth-or-line" />
              </div>
 
              <button type="button" className="auth-google-btn">
                🌐 Continue with Google
              </button>
 
              <p className="auth-switch-text">
                Don't have an account?{" "}
                <button className="auth-switch-link" onClick={() => setTab("signup")}>Sign up free</button>
              </p>
            </form>
          )}
 
          {/* ── SIGNUP FORM ── */}
          {tab === "signup" && (
            <form onSubmit={handleSignup} noValidate>
              {signupMsg && <div className="auth-success">✅ {signupMsg}</div>}
              {signupErr && <div className="auth-error">⚠️ {signupErr}</div>}
 
              <div className="auth-row">
                <div>
                  <label className="auth-label">First Name</label>
                  <input
                    className="auth-input"
                    type="text"
                    placeholder="Ali"
                    value={signup.firstName}
                    onChange={e => setSignup({ ...signup, firstName: e.target.value })}
                  />
                </div>
                <div>
                  <label className="auth-label">Last Name</label>
                  <input
                    className="auth-input"
                    type="text"
                    placeholder="Hassan"
                    value={signup.lastName}
                    onChange={e => setSignup({ ...signup, lastName: e.target.value })}
                  />
                </div>
              </div>
 
              <label className="auth-label">Email Address</label>
              <input
                className="auth-input"
                type="email"
                placeholder="you@email.com"
                value={signup.email}
                onChange={e => setSignup({ ...signup, email: e.target.value })}
              />
 
              <label className="auth-label">Phone (Optional)</label>
              <input
                className="auth-input"
                type="tel"
                placeholder="+92 300 0000000"
                value={signup.phone}
                onChange={e => setSignup({ ...signup, phone: e.target.value })}
              />
 
              <label className="auth-label">Password</label>
              <input
                className="auth-input"
                type="password"
                placeholder="Min. 6 characters"
                value={signup.password}
                onChange={e => setSignup({ ...signup, password: e.target.value })}
              />
 
              <label className="auth-label">Confirm Password</label>
              <input
                className="auth-input"
                type="password"
                placeholder="Re-enter password"
                value={signup.confirm}
                onChange={e => setSignup({ ...signup, confirm: e.target.value })}
              />
 
              <button type="submit" className="auth-submit-btn">Create Account →</button>
 
              <p className="auth-terms">
                By signing up you agree to our{" "}
                <span>Terms of Service</span> and <span>Privacy Policy</span>
              </p>
 
              <p className="auth-switch-text" style={{ marginTop: 16 }}>
                Already have an account?{" "}
                <button className="auth-switch-link" onClick={() => setTab("login")}>Sign in</button>
              </p>
            </form>
          )}
 
        </div>
      </div>
    </>
  );
}