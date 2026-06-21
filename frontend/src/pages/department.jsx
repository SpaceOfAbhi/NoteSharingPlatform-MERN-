import { useNavigate } from "react-router-dom";

function Departments() {
  const navigate = useNavigate();

  const departments = [
    "CSE",
    "MECH",
    "CIVIL",
    "EEE",
    "ECE",
    "AIDS",
    "CSCY",
    "CSAI",
  ];

  return (
    <div>
      <h1>Select Department</h1>

      {departments.map((dept) => (
        <button
          key={dept}
          onClick={() =>
            navigate(`/departments/${dept}`)
          }
        >
          {dept}
        </button>
      ))}
    </div>
  );
}

export default Departments;