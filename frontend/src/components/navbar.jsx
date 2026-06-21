import { useNavigate, useLocation } from "react-router-dom";
import ConfirmDialog from "./confirmDialog";
import { useState } from "react";

function Navbar() {
    const navigate = useNavigate();
    const location = useLocation();

    const [showLogoutDialog, setShowLogoutDialog] = useState(false);

    const logout = () => {
        localStorage.clear();
        navigate("/");
    };

    const handleBack = () => {
        const path = location.pathname;
        const parts = path.split("/").filter(Boolean);

        if (parts.length === 4) {
            navigate(`/departments/${parts[1]}/${parts[2]}`);
        } else if (parts.length === 3) {
            navigate(`/departments/${parts[1]}`);
        } else if (parts.length === 2) {
            navigate("/departments");
        } else if (path === "/upload") {
            navigate("/departments");
        }
    };

    const showBackButton = location.pathname !== "/departments";

    return (
        <>
            <nav className="sticky top-0 z-50 border-b border-slate-800/80 bg-void-900/80 backdrop-blur-md">
                <div className="max-w-5xl mx-auto px-4 h-14 flex items-center gap-3">
                    {/* Logo */}
                    <span
                        className="font-mono text-sm font-medium text-cyber-400 tracking-widest mr-auto cursor-pointer"
                        onClick={() => navigate("/departments")}
                    >
                        NOTES<span className="text-slate-500">/</span>PORTAL
                    </span>

                    {/* Nav buttons */}
                    <div className="flex items-center gap-2">
                        {showBackButton && (
                            <button onClick={handleBack} className="btn-ghost text-xs px-3 py-1.5">
                                ← Back
                            </button>
                        )}

                        <button onClick={() => navigate("/departments")} className="btn-ghost text-xs px-3 py-1.5">
                            Home
                        </button>

                        <button onClick={() => navigate("/upload")} className="btn-primary text-xs px-3 py-1.5">
                            Upload
                        </button>

                        <button
                            onClick={() => setShowLogoutDialog(true)}
                            className="btn-danger text-xs px-3 py-1.5"
                        >
                            Logout
                        </button>
                    </div>
                </div>
            </nav>

            <ConfirmDialog
                isOpen={showLogoutDialog}
                title="Logout"
                message="Are you sure you want to logout?"
                onConfirm={() => {
                    logout();
                    setShowLogoutDialog(false);
                }}
                onCancel={() => setShowLogoutDialog(false)}
            />
        </>
    );
}

export default Navbar;