import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/navbar";
import NoteTile from "../components/noteTile";
import ConfirmDialog from "../components/confirmDialog";

function Notes() {
    const { subject } = useParams();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const currentUserId = localStorage.getItem("userId");
    const [selectedNote, setSelectedNote] = useState(null);

    useEffect(() => {
        loadNotes();
    }, []);

    const deleteNote = async (id) => {
        try {
            await api.delete(`/api/notes/${id}`);
            setNotes(notes.filter((note) => note._id !== id));
            alert("Note Deleted");
        } catch (err) {
            console.log(err);
            alert("Delete Failed");
        }
    };

    const loadNotes = async () => {
        try {
            const res = await api.get(`/api/notes/subject/${subject}`);
            setNotes(res.data);
        } catch (err) {
            console.log(err);
        }
        setLoading(false);
    };

    if (loading) {
        return (
            <div className="page">
                <Navbar />
                <div className="loading-text">
                    <span className="animate-pulse">Loading notes...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="page">
            <Navbar />

            <ConfirmDialog
                isOpen={selectedNote !== null}
                title="Delete Note"
                message="Are you sure you want to delete this note?"
                onConfirm={() => {
                    deleteNote(selectedNote);
                    setSelectedNote(null);
                }}
                onCancel={() => setSelectedNote(null)}
            />

            <div className="content">
                {/* Header */}
                <div className="mb-8">
                    <p className="font-mono text-cyber-400 text-xs tracking-widest uppercase mb-1">
                        Notes
                    </p>
                    <h1 className="section-title text-3xl break-words">{decodeURIComponent(subject)}</h1>
                    <div className="accent-line mt-3" />
                </div>

                {notes.length === 0 ? (
                    <div className="card p-12 text-center">
                        <div className="text-4xl mb-3 opacity-20">📄</div>
                        <p className="text-slate-400 font-medium mb-1">No notes found</p>
                        <p className="text-slate-600 text-sm">Be the first to upload a note for this subject.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {notes.map((note) => (
                            <NoteTile
                                key={note._id}
                                note={note}
                                currentUserId={currentUserId}
                                onView={(note) =>
                                    window.open(
                                        `${import.meta.env.VITE_API_URL}/api/notes/public/file/${note._id}`,
                                        "_blank"
                                    )
                                }
                                onDelete={(id) => setSelectedNote(id)}
                            />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Notes;