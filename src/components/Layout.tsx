import { NavLink, Outlet } from "react-router-dom";
import { Heart, Pill, Activity, AlertTriangle, LayoutDashboard, BookOpen, Dumbbell, Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { to: "/", label: "Vue d'ensemble", icon: LayoutDashboard },
  { to: "/drugs", label: "Médicaments", icon: Pill },
  { to: "/arterial-pressure", label: "Pression artérielle", icon: Activity },
  { to: "/risk-factors", label: "Facteurs de risque", icon: AlertTriangle },
  { to: "/physical-activity", label: "Activité physique", icon: Dumbbell },
  { to: "/resources", label: "Ressources", icon: BookOpen },
];

const Layout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header */}
      <header className="sticky top-0 z-50 border-b bg-card/80 backdrop-blur-md">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/30">
              <Heart className="w-5 h-5 text-secondary" />
            </div>
            <div>
              <h1 className="text-lg font-bold font-display text-secondary">Oreliance</h1>
              <p className="text-xs text-muted-foreground">Réhabilitation Cardiaque</p>
            </div>
          </div>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <div className="flex flex-1">
        {/* Sidebar */}
        <aside
          className={cn(
            "fixed lg:sticky top-[73px] left-0 z-40 h-[calc(100vh-73px)] w-64 border-r bg-card flex-shrink-0 transition-transform duration-300 lg:translate-x-0",
            mobileOpen ? "translate-x-0" : "-translate-x-full"
          )}
        >
          <nav className="p-4 space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                    isActive
                      ? "bg-sidebar-accent text-secondary font-semibold"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  )
                }
              >
                <item.icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            ))}
          </nav>
          <div className="absolute bottom-6 left-4 right-4">
            <div className="p-4 rounded-xl bg-primary/20 border border-primary/30">
              <p className="text-xs font-medium text-secondary mb-1">Besoin d'aide ?</p>
              <p className="text-xs text-muted-foreground">Contactez votre équipe médicale pour toute question.</p>
            </div>
          </div>
        </aside>

        {/* Overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden" onClick={() => setMobileOpen(false)} />
        )}

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10 max-w-5xl">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;