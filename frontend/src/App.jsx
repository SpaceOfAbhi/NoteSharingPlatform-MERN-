import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Departments from "./pages/department";
import Upload from "./pages/upload";
import Semesters from "./pages/semesters";
import Subjects from "./pages/subjects";
import Notes from "./pages/notes";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/upload" element={<Upload />} />
        <Route
          path="/departments/:dept"
          element={<Semesters />}
        />
        <Route
          path="/departments/:dept/:sem"
          element={<Subjects />}
        />
        <Route
          path="/departments/:dept/:sem/:subject"
          element={<Notes />}
        />
        <Route
          path="/upload"
          element={<Upload />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;