import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Package, ChefHat, FileText, Store, Briefcase, Mail, Plus, Edit, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { products, recipes, catalogues, distributors } from "@/lib/site-data";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Admin — Let's Bake" },
      { name: "description", content: "Internal admin panel for managing Let's Bake content." },
      { name: "robots", content: "noindex,nofollow" },
    ],
  }),
  component: AdminPage,
});

type Tab = "products" | "recipes" | "catalogues" | "distributors" | "wholesale" | "messages";

function AdminPage() {
  const [tab, setTab] = useState<Tab>("products");

  const tabs: { key: Tab; label: string; icon: any }[] = [
    { key: "products", label: "Products", icon: Package },
    { key: "recipes", label: "Recipes", icon: ChefHat },
    { key: "catalogues", label: "Catalogues", icon: FileText },
    { key: "distributors", label: "Distributors", icon: Store },
    { key: "wholesale", label: "Wholesale Requests", icon: Briefcase },
    { key: "messages", label: "Contact Messages", icon: Mail },
  ];

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] text-caramel">Admin</span>
            <h1 className="mt-2 font-display text-4xl text-chocolate-deep">Content Management</h1>
            <p className="mt-1 text-sm text-muted-foreground">Frontend scaffold — connect to backend when ready.</p>
          </div>
          <Link to="/" className="text-sm text-muted-foreground hover:text-chocolate">← Back to site</Link>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[260px_1fr]">
          <aside className="rounded-2xl border border-border bg-card p-3 shadow-soft h-fit">
            {tabs.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)} className={`w-full flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors ${tab === t.key ? "bg-gradient-rich text-cream" : "text-chocolate-deep hover:bg-gold-soft"}`}>
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </aside>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
            {tab === "products" && <ListTable title="Products" addLabel="Add Product" rows={products.map(p => ({ id: p.slug, primary: p.name.en, secondary: `${p.category} • ${p.weight}`, badge: p.barcode }))} />}
            {tab === "recipes" && <ListTable title="Recipes" addLabel="Add Recipe" rows={recipes.map(r => ({ id: r.slug, primary: r.title.en, secondary: `${r.level.en} • ${r.time}`, badge: `${r.productSlugs.length} products` }))} />}
            {tab === "catalogues" && <ListTable title="Catalogues" addLabel="Add Catalogue" rows={catalogues.map(c => ({ id: c.slug, primary: c.title.en, secondary: c.desc.en, badge: "PDF" }))} />}
            {tab === "distributors" && <ListTable title="Distributors" addLabel="Add Distributor" rows={distributors.map((d, i) => ({ id: String(i), primary: d.name.en, secondary: `${d.city} • ${d.area}`, badge: d.phone }))} />}
            {tab === "wholesale" && <EmptyState icon={Briefcase} title="Wholesale requests" text="Connect to the backend to view submitted wholesale request forms." />}
            {tab === "messages" && <EmptyState icon={Mail} title="Contact messages" text="Connect to the backend to view contact form submissions." />}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

function ListTable({ title, addLabel, rows }: { title: string; addLabel: string; rows: { id: string; primary: string; secondary: string; badge: string }[] }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <h2 className="font-display text-2xl text-chocolate-deep">{title}</h2>
        <button className="inline-flex items-center gap-1.5 rounded-full bg-gradient-rich px-4 py-2 text-xs font-semibold text-cream"><Plus className="h-3.5 w-3.5" />{addLabel}</button>
      </div>
      <div className="mt-5 divide-y divide-border">
        {rows.map(r => (
          <div key={r.id} className="grid grid-cols-[minmax(0,1fr)_auto] gap-3 py-3 items-center">
            <div className="min-w-0">
              <div className="truncate font-medium text-chocolate-deep">{r.primary}</div>
              <div className="truncate text-xs text-muted-foreground">{r.secondary}</div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <span className="hidden sm:inline rounded-full bg-gold-soft px-2.5 py-0.5 text-[10px] font-mono text-chocolate-deep">{r.badge}</span>
              <button className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-gold-soft" aria-label="Edit"><Edit className="h-3.5 w-3.5" /></button>
              <button className="grid h-8 w-8 place-items-center rounded-lg border border-border hover:bg-destructive/10" aria-label="Delete"><Trash2 className="h-3.5 w-3.5" /></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function EmptyState({ icon: Icon, title, text }: { icon: any; title: string; text: string }) {
  return (
    <div className="py-16 text-center">
      <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-gold-soft"><Icon className="h-6 w-6 text-chocolate" /></div>
      <h3 className="mt-4 font-display text-xl text-chocolate-deep">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground max-w-md mx-auto">{text}</p>
    </div>
  );
}