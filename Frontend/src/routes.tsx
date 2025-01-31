import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import NotFound from "./pages/NotFound";
import Dashboard from "./pages/Dashboard";
import { Suspense } from "react";

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/about" element={<About />} /> */}

      <Route path="/dashboard" element={<Suspense fallback={'loading'}> <Dashboard /> </Suspense>} />
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}
