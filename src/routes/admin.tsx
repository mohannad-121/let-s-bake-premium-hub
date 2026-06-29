import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Package, ChefHat, FileText, Store, Briefcase, Mail, Plus, Edit, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { categoryLabel, productName, products, recipes, catalogues, distributors } from "@/lib/site-data";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin - Let's Bake" },
      { name: "description", content: "Internal admin panel for managing Let's Bake content." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

type Tab = "products" | "recipes" | "catalogues" | "distributors" | "wholesale" | "messages";
type AdminIcon = React.ComponentType<{ className?: string }>;

function AdminPage() {
  const { lang, t } = useLang();
  const [tab, setTab] = useState<Tab>("products");

  const lineLabel = (line: "Retail" | "Catering") => (line === "Retail" ? t("Retail", "تجزئة") : t("Catering", "تموين"));
  const tabs: { key: Tab; label: string; icon: AdminIcon }[] = [
    { key: "products", label: t("Products", "المنتجات"), icon: Package },
    { key: "recipes", label: t("Recipes", "الوصفات"), icon: ChefHat },
    { key: "catalogues", label: t("Catalogues", "الكتالوجات"), icon: FileText },
    { key: "distributors", label: t("Distributors", "الموزعون"), icon: Store },
    { key: "wholesale", label: t("Wholesale Requests", "طلبات الجملة"), icon: Briefcase },
    { key: "messages", label: t("Contact Messages", "رسائل التواصل"), icon: Mail },
  ];

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">{t("Admin", "الإدارة")}</span>
            <h1 className="mt-2 font-display text-4xl text-chocolate-deep">{t("Content Management", "إدارة المحتوى")}</h1>
            <p className="mt-1 text-sm text-muted-foreground">{t("Frontend scaffold - connect to backend when ready.", "واجهة إدارة أولية - اربطها بالخادم عندما تكون جاهزة.")}</p>
          </div>
          <Link to="/" className="text-sm text-muted-foreground hover:text-chocolate">{t("Back to site", "العودة للموقع")}</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="h-fit rounded-2xl border border-border bg-card p-3 shadow-soft">
            {tabs.map(item => (
              <button key={item.key} onClick={() => setTab(item.key)} className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${tab === item.key ? "bg-gradient-rich text-cream" : "text-chocolate-deep hover:bg-gold-soft"}`}>
                <item.icon className="h-4 w-4" /> {item.label}
              </button>
            ))}
          </aside>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            {tab === "products" && (
              <ListTable
                title={t("Products", "المنتجات")}
                addLabel={t("Add Product", "إضافة منتج")}
                rows={products.map(p => ({
                  id: p.slug,
                  primary: productName(p, lang),
                  secondary: `${lineLabel(p.line)} / ${categoryLabel(p.category, lang)} / ${p.weight}`,
                  badge: p.featured ? t("Featured", "مميز") : lineLabel(p.line),
                }))}
              />
            )}
            {tab === "recipes" && (
              <ListTable
                title={t("Recipes", "الوصفات")}
                addLabel={t("Add Recipe", "إضافة وصفة")}
                rows={recipes.map(r => ({
                  id: r.slug,
                  primary: r.title[lang],
                  secondary: `${r.level[lang]} / ${r.time}`,
                  badge: t(`${r.productSlugs.length} products`, `${r.productSlugs.length} منتجات`),
                }))}
              />
            )}
            {tab === "catalogues" && (
              <ListTable
                title={t("Catalogues", "الكتالوجات")}
                addLabel={t("Add Catalogue", "إضافة كتالوج")}
                rows={catalogues.map(c => ({ id: c.slug, primary: c.title[lang], secondary: c.desc[lang], badge: "PDF" }))}
              />
            )}
            {tab === "distributors" && (
              <ListTable
                title={t("Distributors", "الموزعون")}
                addLabel={t("Add Distributor", "إضافة موزع")}
                rows={distributors.map((d, i) => ({ id: String(i), primary: d.name[lang], secondary: `${d.city} / ${d.area}`, badge: d.phone }))}
              />
            )}
            {tab === "wholesale" && <EmptyState icon={Briefcase} title={t("Wholesale requests", "طلبات الجملة")} text={t("Connect to the backend to view submitted wholesale request forms.", "اربط لوحة الإدارة بالخادم لعرض طلبات الجملة المرسلة.")} />}
            {tab === "messages" && <EmptyState icon={Mail} title={t("Contact messages", "رسائل التواصل")} text={t("Connect to the backend to view contact form submissions.", "اربط لوحة الإدارة بالخادم لعرض رسائل نموذج التواصل.")} />}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ListTable({ title, addLabel, rows }: { title: string; addLabel: string; rows: { id: string; primary: string; secondary: string; badge: string }[] }) {
  const { t } = useLang();

  return (
    <div>
      <div className="flex items-center justify-between gap-4">
        <h2 className="font-display text-2xl text-chocolate-deep">{title}</h2>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-rich px-4 py-2 text-xs font-semibold text-cream"><Plus className="h-3.5 w-3.5" />{addLabel}</button>
      </div>
      <div className="mt-5 divide-y divide-border">
        {rows.map(row => (
          <div key={row.id} className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 py-3">
            <div className="min-w-0">
              <div className="truncate font-medium text-chocolate-deep">{row.primary}</div>
              <div className="truncate text-xs text-muted-foreground">{row.secondary}</div>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <span className="hidden rounded-full bg-gold-soft px-2.5 py-0.5 text-[10px] font-semibold text-chocolate-deep sm:inline">{row.badge}</span>
              <button className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-gold-soft" aria-label={t("Edit", "تعديل")}><Edit className="h-3.5 w-3.5" /></button>
              <button className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-destructive/10" aria-label={t("Delete", "حذف")}><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmptyState({ icon: Icon, title, text }: { icon: AdminIcon; title: string; text: string }) {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-soft"><Icon className="h-6 w-6 text-chocolate" /></div>
      <h3 className="mt-4 font-display text-xl text-chocolate-deep">{title}</h3>
      <p className="mx-auto mt-1 max-w-md text-sm text-muted-foreground">{text}</p>
    </div>
  );
}
