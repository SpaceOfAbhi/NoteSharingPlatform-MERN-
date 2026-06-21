import { useState } from "react";
import api from "../services/api";

function Upload() {
  const [department, setDepartment] = useState("");
  const [semester, setSemester] = useState("");
  const [subject, setSubject] = useState("");
  const [tag, setTag] = useState("");
  const [file, setFile] = useState(null);

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

    try {
      await api.post("/api/notes/upload", formData);

      alert("Upload Successful");
    } catch (err) {
      console.error(err);
      alert("Upload Failed");
    }
  };

  return (
    <div>
      <h1>Upload Notes</h1>

      <input
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Semester"
        value={semester}
        onChange={(e) => setSemester(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Subject"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
      />

      <br /><br />

      <input
        placeholder="Tag"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <br /><br />

      <button onClick={handleUpload}>
        Upload
      </button>
    </div>
  );
}

export default Upload;