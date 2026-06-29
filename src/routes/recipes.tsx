import { createFileRoute, Link } from "@tanstack/react-router";
import { MessageCircle, Clock, ChefHat } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import { productName, products, recipes, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/recipes")({
  head: () => ({
    meta: [
      { title: "Recipes — Let's Bake" },
      { name: "description", content: "Premium baking recipes using Let's Bake cake mixes, creams, custard, caramel and fillings." },
      { property: "og:title", content: "Recipes — Let's Bake" },
      { property: "og:description", content: "Real recipes that turn pantry products into showstoppers." },
    ],
  }),
  component: RecipesPage,
});

function RecipesPage() {
  const { t, lang } = useLang();
  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Recipes", "الوصفات")} title={t("Recipes that sell themselves", "وصفات تبيع نفسها")} sub={t("Every recipe lists the exact Let's Bake products you need — order them all in one tap.", "كل وصفة تعرض منتجات ليتس بيك المطلوبة — اطلبها كلها بنقرة واحدة.")} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {recipes.map(r => {
          const used = r.productSlugs.map(s => products.find(p => p.slug === s)!).filter(Boolean);
          return (
            <article key={r.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={r.image} alt={r.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute bottom-3 ltr:left-3 rtl:right-3 flex gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold text-chocolate-deep"><ChefHat className="h-3 w-3 text-caramel" />{r.level[lang]}</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-cream/90 px-3 py-1 text-[10px] font-semibold text-chocolate-deep"><Clock className="h-3 w-3 text-caramel" />{r.time}</span>
                </div>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-2xl text-chocolate-deep">{r.title[lang]}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{r.description[lang]}</p>
                <div className="mt-3">
                  <div className="text-[11px] font-semibold uppercase tracking-wider text-caramel">{t("Products used", "المنتجات المستخدمة")}</div>
                  <ul className="mt-2 flex flex-wrap gap-1.5">
                    {used.map(u => (
                      <li key={u.slug}><Link to="/products/$slug" params={{ slug: u.slug }} className="inline-block rounded-full bg-gold-soft px-2.5 py-1 text-[11px] font-medium text-chocolate-deep hover:bg-gold">{productName(u, lang)}</Link></li>
                    ))}
                  </ul>
                </div>
                <ol className="mt-4 space-y-1.5 text-sm text-muted-foreground list-decimal ltr:pl-5 rtl:pr-5 flex-1">
                  {r.steps[lang].map((s, i) => <li key={i}>{s}</li>)}
                </ol>
                <div className="mt-5 flex gap-2">
                  <a href={waLink(`Please send me the ingredients for ${r.title.en}: ${used.map(u => u.nameEn).join(", ")}.`)} target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2.5 text-xs font-semibold text-white"><MessageCircle className="h-3.5 w-3.5" />{t("Order Ingredients on WhatsApp", "اطلب المكونات عبر واتساب")}</a>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </SiteLayout>
  );
}
