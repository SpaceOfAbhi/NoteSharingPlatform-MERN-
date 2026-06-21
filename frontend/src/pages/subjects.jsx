import { useParams } from "react-router-dom";
import { subjectsData } from "../data/subjects";
import { useNavigate } from "react-router-dom";


function Subjects() {
    const { dept, sem } = useParams();

    const subjects =
        subjectsData[dept]?.[sem] || [];
    const navigate = useNavigate();

    return (
        <div>
            <h1>
                {dept} Semester {sem}
            </h1>

            {subjects.map((subject) => (
                <button
                    key={subject}
                    onClick={() =>
                        navigate(
                            `/departments/${dept}/${sem}/${encodeURIComponent(subject)}`
                        )
                    }
                >
                    {subject}
                </button>
            ))}
        </div>
    );
}

export default Subjects;