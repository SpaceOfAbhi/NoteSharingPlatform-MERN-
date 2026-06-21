import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSignup = async () => {
        setLoading(true);
        try {
            await api.post("/api/auth/signup", { name, email, password });
            alert("Signup Successful");
            navigate("/");
        } catch (err) {
            console.log(err);
            alert("Signup Failed");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-sm animate-slide-up">
                {/* Brand */}
                <div className="text-center mb-10">
                    <p className="font-mono text-cyber-400 text-xs tracking-[0.3em] uppercase mb-3">
                        Notes Sharing Platform
                    </p>
                    <h1 className="text-3xl font-bold text-slate-100">
                        Create account
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">Join the platform today</p>
                </div>

                {/* Card */}
                <div className="card p-7 relative">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent" />

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Full Name
                            </label>
                            <input
                                id="signup-name"
                                placeholder="Your name"
                                onChange={(e) => setName(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Email
                            </label>
                            <input
                                id="signup-email"
                                type="email"
                                placeholder="you@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Password
                            </label>
                            <input
                                id="signup-password"
                                type="password"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                    </div>

                    <button
                        id="signup-submit"
                        onClick={handleSignup}
                        disabled={loading}
                        className="btn-primary w-full mt-6 py-3 text-sm font-semibold tracking-wide"
                    >
                        {loading ? "Creating account..." : "Create Account"}
                    </button>
                </div>

                <p className="text-center text-sm text-slate-500 mt-5">
                    Already have an account?{" "}
                    <Link to="/" className="text-cyber-400 hover:text-cyber-300 transition-colors">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Signup;