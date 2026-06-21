function NoteTile({ note, currentUserId, onView, onDelete }) {
    const canDelete =
        note.uploadedBy?._id === currentUserId ||
        note.uploadedBy === currentUserId;

    return (
        <div className="card p-5 flex flex-col gap-4 animate-slide-up hover:border-slate-600/80 transition-colors duration-200">
            {/* Header row */}
            <div className="flex items-start justify-between gap-3">
                <div>
                    <span className="inline-flex items-center gap-1.5 bg-cyber-500/10 text-cyber-400 border border-cyber-500/30 text-xs font-mono px-2.5 py-1 rounded-full tracking-wide">
                        # {note.tag}
                    </span>
                </div>
                {canDelete && (
                    <button
                        onClick={() => onDelete(note._id)}
                        className="btn-danger text-xs px-3 py-1"
                    >
                        Delete
                    </button>
                )}
            </div>

            {/* Uploader */}
            <div className="flex items-center gap-2 text-xs text-slate-500">
                <span className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-slate-400 font-semibold uppercase text-[10px]">
                    {(note.uploadedBy?.name || "?")[0]}
                </span>
                <span>
                    Uploaded by{" "}
                    <span className="text-slate-300 font-medium">
                        {note.uploadedBy?.name || note.uploadedBy || "Unknown"}
                    </span>
                </span>
            </div>

            {/* View button */}
            <button
                onClick={() => onView(note)}
                className="btn-primary text-sm w-full mt-auto"
            >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                View Note
            </button>
        </div>
    );
}

export default NoteTile;