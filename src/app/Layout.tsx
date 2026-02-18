import { Navbar } from "../components/Navbar";
type LayoutProps = {
  children: React.ReactNode;
};

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-linear-to-b from-slate-950 via-blue-950 to-slate-950 text-slate-50">
      <Navbar />
      <div className="pt-24"> {children}</div>
    </div>
  );
}
