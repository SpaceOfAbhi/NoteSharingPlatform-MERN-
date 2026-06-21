import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

function Notes() {
    const { subject } = useParams();

    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        loadNotes();
    }, []);

    const loadNotes = async () => {
        try {
            const res = await api.get(
                `/api/notes/subject/${subject}`
            );

            setNotes(res.data);
        } catch (err) {
            console.log(err);
        }

        setLoading(false);
    };

    if (loading) return <h2>Loading...</h2>;

    return (
        <div>
            <h1>{subject}</h1>

            {notes.length === 0 ? (
                <p>No Notes Found</p>
            ) : (
                notes.map((note) => (
                    <div key={note._id}>
                        <h3>{note.tag}</h3>

                        <p>
                            Uploaded By:
                            {note.uploadedBy?.name}
                        </p>

                        <button
                            onClick={() =>
                                window.open(
                                    `${process.env.REACT_APP_API_URL}/api/notes/public/file/${note._id}`,
                                    "_blank"
                                )
                            }
                        >
                            View
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Notes;