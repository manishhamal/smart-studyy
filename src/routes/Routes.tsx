import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/pages/Home";
import App from "@/App";
import Subjects from "@/pages/Subjects";
import Resources from "@/pages/Resources";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import SemesterDetails from "@/pages/semesters/SemesterDetails";

const RouterProvider = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Home />} />
          <Route path="/subjects" element={<Subjects />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="semester/:slug" element={<SemesterDetails />} />
          <Route path="" element={"Page Not Found"} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RouterProvider;
