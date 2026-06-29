import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLang } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function Navbar() {
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { to: "/", label: t("Home", "الرئيسية") },
    { to: "/products", label: t("Products", "المنتجات") },
    { to: "/recipes", label: t("Recipes", "الوصفات") },
    { to: "/reels", label: t("Reels", "ريلز") },
    { to: "/wholesale", label: t("Wholesale", "الجملة") },
    { to: "/where-to-buy", label: t("Where to Buy", "أين تشتري") },
    { to: "/catalogues", label: t("Catalogues", "الكتالوجات") },
    { to: "/about", label: t("About", "من نحن") },
    { to: "/contact", label: t("Contact", "اتصل بنا") },
    { to: "/admin", label: t("Admin", "الإدارة") },
  ];

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300",
        scrolled ? "bg-ivory/90 backdrop-blur-md shadow-soft" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-2.5 group">
          <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rich shadow-gold transition-transform group-hover:scale-105">
            <span className="font-display text-base text-cream">L</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg text-chocolate-deep">Let's Bake</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Thimar Al-Rabie</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {nav.map(n => (
            <Link
              key={n.to}
              to={n.to}
              className="px-3 py-2 text-sm font-medium text-chocolate-deep/80 hover:text-chocolate transition-colors relative after:absolute after:bottom-1 after:left-3 after:right-3 after:h-0.5 after:bg-gradient-gold after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform"
              activeProps={{ className: "text-chocolate after:scale-x-100" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setLang(lang === "en" ? "ar" : "en")}
            className="hidden sm:flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-semibold text-chocolate-deep hover:bg-gold-soft transition-colors"
            aria-label="Toggle language"
          >
            <Globe className="h-3.5 w-3.5" /> {lang === "en" ? "AR" : "EN"}
          </button>
          <Link
            to="/wholesale"
            className="hidden md:inline-flex items-center rounded-full bg-gradient-rich px-4 py-2 text-xs font-semibold text-cream shadow-soft hover:shadow-luxe transition-shadow"
          >
            {t("Request Wholesale", "طلب جملة")}
          </Link>
          <button
            className="lg:hidden grid h-10 w-10 place-items-center rounded-full bg-card border border-border"
            onClick={() => setOpen(v => !v)}
            aria-label="Menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-ivory/95 backdrop-blur-md animate-fade-in">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3">
            {nav.map(n => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2.5 text-sm font-medium text-chocolate-deep hover:bg-gold-soft" activeProps={{ className: "bg-gold-soft text-chocolate" }} activeOptions={{ exact: n.to === "/" }}>
                {n.label}
              </Link>
            ))}
            <button onClick={() => setLang(lang === "en" ? "ar" : "en")} className="mt-2 inline-flex items-center justify-center gap-2 rounded-full border border-border px-3 py-2 text-sm font-semibold">
              <Globe className="h-4 w-4" /> {lang === "en" ? "العربية" : "English"}
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
