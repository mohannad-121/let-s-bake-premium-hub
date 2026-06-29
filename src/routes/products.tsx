import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import { categories, products, productDescription, type CategoryKey, type ProductLine } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Let's Bake" },
      { name: "description", content: "Browse cake mixes, creams, custard, jelly, caramel cream, fillings and bakery supplies from Let's Bake." },
      { property: "og:title", content: "Product Catalogue — Let's Bake" },
      { property: "og:description", content: "Premium baking and pastry products for homes and businesses." },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const { t, lang } = useLang();
  const [active, setActive] = useState<CategoryKey | "all">("all");
  const [line, setLine] = useState<ProductLine | "all">("all");
  const [weight, setWeight] = useState("all");
  const [featuredOnly, setFeaturedOnly] = useState(false);
  const [q, setQ] = useState("");

  const weights = useMemo(() => Array.from(new Set(products.map(p => p.weight))).sort(), []);

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return products.filter(p => {
      const matchesQuery =
        query === "" ||
        p.nameEn.toLowerCase().includes(query) ||
        p.nameAr.includes(q.trim()) ||
        productDescription(p, "en").toLowerCase().includes(query) ||
        p.tags.some(tag => tag.toLowerCase().includes(query));

      const matchesCategory =
        active === "all" ||
        p.category === active ||
        (active === "retail-products" && p.line === "Retail") ||
        ((active === "catering-products" || active === "wholesale-products") && p.line === "Catering");

      return (
        matchesCategory &&
        (line === "all" || p.line === line) &&
        (weight === "all" || p.weight === weight) &&
        (!featuredOnly || p.featured) &&
        matchesQuery
      );
    });
  }, [active, featuredOnly, line, q, weight]);

  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Product Catalogue", "كتالوج المنتجات")} title={t("Browse the real Let’s Bake range", "تصفح مجموعة ليتس بيك الحقيقية")} sub={t("Filter by category, retail or catering line, weight and featured products.", "صف حسب الفئة وخط التجزئة أو التموين والوزن والمنتجات المميزة.")} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative max-w-md w-full">
            <Search className="absolute ltr:left-3.5 rtl:right-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={q} onChange={e => setQ(e.target.value)} placeholder={t("Search products...", "ابحث عن المنتجات...")} className="w-full rounded-full border border-border bg-card ltr:pl-10 rtl:pr-10 px-4 py-3 text-sm shadow-soft focus:outline-none focus:ring-2 focus:ring-gold" />
          </div>
          <div className="flex flex-wrap gap-2">
            <select value={line} onChange={e => setLine(e.target.value as ProductLine | "all")} className="rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-chocolate-deep shadow-soft focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="all">{t("All lines", "كل الخطوط")}</option>
              <option value="Retail">{t("Retail", "تجزئة")}</option>
              <option value="Catering">{t("Catering", "تموين")}</option>
            </select>
            <select value={weight} onChange={e => setWeight(e.target.value)} className="rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-chocolate-deep shadow-soft focus:outline-none focus:ring-2 focus:ring-gold">
              <option value="all">{t("All weights", "كل الأوزان")}</option>
              {weights.map(w => <option key={w} value={w}>{w}</option>)}
            </select>
            <button onClick={() => setFeaturedOnly(v => !v)} className={cn("rounded-full border px-4 py-3 text-sm font-semibold transition-colors shadow-soft", featuredOnly ? "bg-gold text-chocolate-deep border-gold" : "bg-card border-border text-chocolate-deep hover:bg-gold-soft")}>
              {t("Featured only", "المميزة فقط")}
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <FilterChip active={active === "all"} onClick={() => setActive("all")}>{t("All", "الكل")}</FilterChip>
          {categories.map(c => (
            <FilterChip key={c.key} active={active === c.key} onClick={() => setActive(c.key)}>{c[lang]}</FilterChip>
          ))}
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map(p => <ProductCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-8 text-center text-sm text-muted-foreground">
          {t(`${filtered.length} products shown`, `${filtered.length} منتج معروض`)}
        </div>
        {filtered.length === 0 && (
          <div className="py-20 text-center text-muted-foreground">{t("No products match your filters.", "لا توجد منتجات مطابقة.")}</div>
        )}
      </section>
    </SiteLayout>
  );
}

function FilterChip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button onClick={onClick} className={cn("rounded-full border px-4 py-2 text-xs font-semibold transition-colors", active ? "bg-chocolate text-cream border-chocolate" : "bg-card border-border text-chocolate-deep hover:bg-gold-soft")}>{children}</button>
  );
}

// Re-export Link for potential future use
export { Link };
