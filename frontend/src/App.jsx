import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Departments from "./pages/department";
import Upload from "./pages/upload";
import Semesters from "./pages/semesters";
import Subjects from "./pages/subjects";
import Notes from "./pages/notes";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/departments" element={<ProtectedRoute><Departments /></ProtectedRoute>} />
        <Route path="/upload" element={<ProtectedRoute><Upload /></ProtectedRoute>} />
        <Route
          path="/departments/:dept"
          element={<ProtectedRoute><Semesters /></ProtectedRoute>}
        />
        <Route
          path="/departments/:dept/:sem"
          element={<ProtectedRoute><Subjects /></ProtectedRoute>}
        />
        <Route
          path="/departments/:dept/:sem/:subject"
          element={<ProtectedRoute><Notes /></ProtectedRoute>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;