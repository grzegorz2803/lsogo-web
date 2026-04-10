import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { useAuth } from "../hooks/useAuth";
type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();
  return (
    <>
      <div className="flex flex-col min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-slate-50">
        {!isAuthenticated && <Navbar />}
        <div className={`flex-1 ${!isAuthenticated ? "pt-24" : ""}`}>
          {" "}
          {children}
        </div>
        {!isAuthenticated && <Footer />}
      </div>
    </>
  );
}
