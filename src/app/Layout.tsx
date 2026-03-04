import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-slate-50">
      <Navbar />
      <div className="flex-1 pt-24"> {children}</div>
      <Footer />
    </div>
  );
}
