import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { AboutPage } from "./pages/AboutPage";
import { ParishPage } from "./pages/ParishPage";
import { ContactPage } from "./pages/ContactPage";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/o-systemie" element={<AboutPage />} />
      <Route path="/dla-parafii" element={<ParishPage />} />
      <Route path="/kontakt" element={<ContactPage />} />
    </Routes>
  );
}
