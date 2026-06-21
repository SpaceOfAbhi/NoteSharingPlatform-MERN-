import { useNavigate } from "react-router-dom";
import Navbar from "../components/navbar";

const DEPT_COLORS = {
    CSE:  "from-cyber-500/10 to-transparent border-cyber-500/30",
    MECH: "from-amber-500/10 to-transparent border-amber-500/30",
    CIVIL:"from-emerald-500/10 to-transparent border-emerald-500/30",
    EEE:  "from-yellow-500/10 to-transparent border-yellow-500/30",
    ECE:  "from-purple-500/10 to-transparent border-purple-500/30",
    AIDS: "from-pink-500/10 to-transparent border-pink-500/30",
    CSCY: "from-sky-500/10 to-transparent border-sky-500/30",
    CSAI: "from-violet-500/10 to-transparent border-violet-500/30",
};

function Departments() {
    const navigate = useNavigate();

    const departments = ["CSE", "MECH", "CIVIL", "EEE", "ECE", "AIDS", "CSCY", "CSAI"];

    return (
        <div className="page">
            <Navbar />
            <div className="content">
                {/* Header */}
                <div className="mb-8">
                    <p className="font-mono text-cyber-400 text-xs tracking-widest uppercase mb-1">
                        Step 1 of 3
                    </p>
                    <h1 className="section-title text-3xl">Select Department</h1>
                    <div className="accent-line mt-3" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {departments.map((dept) => (
                        <button
                            key={dept}
                            id={`dept-${dept}`}
                            onClick={() => navigate(`/departments/${dept}`)}
                            className={`tile-btn bg-gradient-to-br ${DEPT_COLORS[dept] || "from-slate-700/20 to-transparent border-slate-700"}`}
                        >
                            <span className="text-base font-mono font-semibold tracking-wider">{dept}</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Departments;