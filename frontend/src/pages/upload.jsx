import { useState } from "react";
import api from "../services/api";
import Navbar from "../components/navbar";
import { subjectsData } from "../data/subjects";

function Upload() {
    const [department, setDepartment] = useState("");
    const [semester, setSemester] = useState("");
    const [subject, setSubject] = useState("");
    const [tag, setTag] = useState("");
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleUpload = async () => {
        if (!file) {
            alert("Select a file");
            return;
        }

        const formData = new FormData();
        formData.append("department", department);
        formData.append("semester", semester);
        formData.append("subject", subject);
        formData.append("tag", tag);
        formData.append("file", file);

        setLoading(true);
        try {
            await api.post("/api/notes/upload", formData);
            alert("Upload Successful");
            setFile(null);
            setTag("");
        } catch (err) {
            console.error(err);
            alert("Upload Failed");
        } finally {
            setLoading(false);
        }
    };

    const selectClass = "bg-void-700 border border-slate-700 text-slate-200 rounded-lg px-4 py-2.5 w-full outline-none transition-all duration-200 focus:border-cyber-500 focus:ring-1 focus:ring-cyber-500/40 cursor-pointer";

    return (
        <div className="page">
            <Navbar />
            <div className="content max-w-xl">
                {/* Header */}
                <div className="mb-8">
                    <p className="font-mono text-cyber-400 text-xs tracking-widest uppercase mb-1">
                        Share Knowledge
                    </p>
                    <h1 className="section-title text-3xl">Upload Notes</h1>
                    <div className="accent-line mt-3" />
                </div>

                {/* Form card */}
                <div className="card p-7 relative">
                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-cyber-500/50 to-transparent" />

                    <div className="space-y-5">
                        {/* Department */}
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Department
                            </label>
                            <select
                                id="upload-department"
                                value={department}
                                onChange={(e) => { setDepartment(e.target.value); setSemester(""); setSubject(""); }}
                                className={selectClass}
                            >
                                <option value="">Select Department</option>
                                <option value="CSE">CSE</option>
                                <option value="MECH">MECH</option>
                                <option value="ECE">ECE</option>
                            </select>
                        </div>

                        {/* Semester */}
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Semester
                            </label>
                            <select
                                id="upload-semester"
                                value={semester}
                                onChange={(e) => { setSemester(e.target.value); setSubject(""); }}
                                className={selectClass}
                                disabled={!department}
                            >
                                <option value="">Select Semester</option>
                                {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                                    <option key={sem} value={sem}>Semester {sem}</option>
                                ))}
                            </select>
                        </div>

                        {/* Subject */}
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Subject
                            </label>
                            <select
                                id="upload-subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                className={selectClass}
                                disabled={!semester}
                            >
                                <option value="">Select Subject</option>
                                {(subjectsData[department]?.[semester] || []).map((sub) => (
                                    <option key={sub} value={sub}>{sub}</option>
                                ))}
                            </select>
                        </div>

                        {/* Tag */}
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                Tag / Title
                            </label>
                            <input
                                id="upload-tag"
                                placeholder="e.g. Unit 3 Notes, Previous Year Questions"
                                value={tag}
                                onChange={(e) => setTag(e.target.value)}
                            />
                        </div>

                        {/* File picker */}
                        <div>
                            <label className="block text-xs text-slate-400 mb-1.5 font-medium tracking-wide uppercase">
                                File
                            </label>
                            <label
                                id="upload-file-label"
                                htmlFor="upload-file"
                                className={`flex items-center gap-3 cursor-pointer card px-4 py-3 hover:border-slate-600 transition-colors ${file ? "border-cyber-500/50" : ""}`}
                            >
                                <svg className={`w-5 h-5 shrink-0 ${file ? "text-cyber-400" : "text-slate-500"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                                </svg>
                                <span className={`text-sm truncate ${file ? "text-slate-200" : "text-slate-500"}`}>
                                    {file ? file.name : "Click to choose a file"}
                                </span>
                            </label>
                            <input
                                id="upload-file"
                                type="file"
                                onChange={(e) => setFile(e.target.files[0])}
                                className="sr-only"
                            />
                        </div>
                    </div>

                    <button
                        id="upload-submit"
                        onClick={handleUpload}
                        disabled={loading}
                        className="btn-primary w-full mt-7 py-3 text-sm font-semibold tracking-wide"
                    >
                        {loading ? "Uploading..." : "Upload Note"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Upload;