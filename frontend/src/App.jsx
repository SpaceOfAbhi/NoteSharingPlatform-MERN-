import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import Signup from "./pages/signup";
import Departments from "./pages/department";
import Upload from "./pages/upload";

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
      </Routes>
    </BrowserRouter>
  );
}

export default App;