function ConfirmDialog({ isOpen, title, message, onConfirm, onCancel }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fade-in">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                onClick={onCancel}
            />

            {/* Dialog */}
            <div className="relative card w-full max-w-sm p-6 animate-slide-up">
                {/* Accent top border */}
                <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-cyber-500/60 to-transparent" />

                <h3 className="text-lg font-semibold text-slate-100 mb-2">{title}</h3>
                <p className="text-sm text-slate-400 mb-6">{message}</p>

                <div className="flex justify-end gap-3">
                    <button onClick={onCancel} className="btn-ghost text-sm px-4 py-2">
                        Cancel
                    </button>
                    <button onClick={onConfirm} className="btn-danger text-sm px-4 py-2">
                        Confirm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ConfirmDialog;