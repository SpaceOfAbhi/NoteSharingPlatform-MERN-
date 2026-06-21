import { useParams, useNavigate } from "react-router-dom";
import { subjectsData } from "../data/subjects";
import Navbar from "../components/navbar";

function Subjects() {
    const { dept, sem } = useParams();
    const navigate = useNavigate();
    const subjects = subjectsData[dept]?.[sem] || [];

    return (
        <div className="page">
            <Navbar />
            <div className="content">
                {/* Header */}
                <div className="mb-8">
                    <p className="font-mono text-cyber-400 text-xs tracking-widest uppercase mb-1">
                        Step 3 of 3 &nbsp;·&nbsp; {dept} — Semester {sem}
                    </p>
                    <h1 className="section-title text-3xl">Select Subject</h1>
                    <div className="accent-line mt-3" />
                </div>

                {subjects.length === 0 ? (
                    <div className="card p-8 text-center">
                        <p className="text-slate-500 font-mono text-sm">
                            No subjects found for {dept} Semester {sem}
                        </p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {subjects.map((subject, idx) => (
                            <button
                                key={subject}
                                id={`subject-${idx}`}
                                onClick={() =>
                                    navigate(`/departments/${dept}/${sem}/${encodeURIComponent(subject)}`)
                                }
                                className="tile-btn flex-row justify-start text-left gap-4 px-5 py-4"
                            >
                                <span className="font-mono text-xs text-slate-600 w-5 shrink-0">{String(idx + 1).padStart(2, "0")}</span>
                                <span className="text-sm font-medium text-slate-300 tracking-normal font-sans">{subject}</span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Subjects;