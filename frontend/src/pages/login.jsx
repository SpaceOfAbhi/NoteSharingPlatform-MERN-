import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import api from "../services/api";

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = async () => {
        setLoading(true);
        try {
            const res = await api.post("/api/auth/login", { email, password });
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("userId", res.data.user.id);
            navigate("/departments");
        } catch (err) {
            alert("Login failed");
        } finally {
            setLoading(false);
        }
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter") handleLogin();
    };

    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="w-full max-w-sm animate-slide-up">
                {/* Logo / Brand */}
                <div className="text-center mb-10">
                    <p className="font-mono text-cyber-400 text-xs tracking-[0.3em] uppercase mb-3">
                        Notes Sharing Platform
                    </p>
                    <h1 className="text-3xl font-bold text-slate-100">
                        Welcome back
                    </h1>
                    <p className="text-slate-500 text-sm mt-2">Sign in to your account</p>
                </div>

                {/* Card */}
                <div className="card p-7">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent" />

                    <div className="space-y-4">
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Email
                            </label>
                            <input
                                id="login-email"
                                type="email"
                                placeholder="you@example.com"
                                onChange={(e) => setEmail(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>

                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Password
                            </label>
                            <input
                                id="login-password"
                                type="password"
                                placeholder="••••••••"
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
                            />
                        </div>
                    </div>

                    <button
                        id="login-submit"
                        onClick={handleLogin}
                        disabled={loading}
                        className="btn-primary w-full mt-6 py-3 text-sm font-semibold tracking-wide"
                    >
                        {loading ? "Signing in..." : "Sign In"}
                    </button>
                </div>

                <p className="text-center text-sm text-slate-500 mt-5">
                    New here?{" "}
                    <Link to="/signup" className="text-cyber-400 hover:text-cyber-300 transition-colors">
                        Create an account
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;