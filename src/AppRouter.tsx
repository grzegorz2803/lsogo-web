import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ParishPage } from "./pages/ParishPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/o-systemie" element={<AboutPage />} />
      <Route path="/dla-parafii" element={<ParishPage />} />
    </Routes>
  );
}
