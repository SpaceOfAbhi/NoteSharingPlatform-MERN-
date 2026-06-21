import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/navbar";

function Semesters() {
    const { dept } = useParams();
    const navigate = useNavigate();

    return (
        <div className="page">
            <Navbar />
            <div className="content">
                {/* Header */}
                <div className="mb-8">
                    <p className="font-mono text-cyber-400 text-xs tracking-widest uppercase mb-1">
                        Step 2 of 3 &nbsp;·&nbsp; {dept}
                    </p>
                    <h1 className="section-title text-3xl">Select Semester</h1>
                    <div className="accent-line mt-3" />
                </div>

                {/* Grid */}
                <div className="grid grid-cols-4 sm:grid-cols-8 gap-3">
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                        <button
                            key={sem}
                            id={`sem-${sem}`}
                            onClick={() => navigate(`/departments/${dept}/${sem}`)}
                            className="tile-btn aspect-square"
                        >
                            <span className="text-2xl font-mono font-bold text-slate-300">{sem}</span>
                            <span className="text-[10px] text-slate-500 tracking-wider uppercase">Sem</span>
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Semesters;