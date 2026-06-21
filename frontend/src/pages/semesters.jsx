import { useNavigate, useParams } from "react-router-dom";

function Semesters() {
  const { dept } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <h1>{dept}</h1>

      {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
        <button
          key={sem}
          onClick={() =>
            navigate(`/departments/${dept}/${sem}`)
          }
        >
          Semester {sem}
        </button>
      ))}
    </div>
  );
}

export default Semesters;