import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, MessageCircle, ShieldCheck, BadgeCheck } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { useLang } from "@/lib/i18n";
import { PRODUCT_IMAGE_FALLBACK, categoryLabel, getProductImage, productDescription, productFallbackImage, productName, productSuggestedUse, products, recipes, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  head: ({ params }) => {
    const p = products.find(x => x.slug === params.slug);
    return {
      meta: [
        { title: p ? `${p.nameEn} — Let's Bake` : "Product — Let's Bake" },
        { name: "description", content: p?.descriptionEn ?? "Premium baking product from Let's Bake." },
        { property: "og:title", content: p?.nameEn ?? "Let's Bake Product" },
        { property: "og:description", content: p?.descriptionEn ?? "" },
        ...(p ? [{ property: "og:image", content: getProductImage(p) }] : []),
      ],
    };
  },
  loader: ({ params }) => {
    const p = products.find(x => x.slug === params.slug);
    if (!p) throw notFound();
    return { product: p };
  },
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl text-chocolate-deep">Product not found</h1>
        <Link to="/products" className="mt-6 inline-flex items-center gap-2 rounded-full bg-chocolate px-5 py-2.5 text-sm font-semibold text-cream">Back to catalogue</Link>
      </div>
    </SiteLayout>
  ),
  errorComponent: ({ reset }) => (
    <SiteLayout><div className="p-20 text-center"><button onClick={reset}>Retry</button></div></SiteLayout>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product: p } = Route.useLoaderData();
  const { t, lang } = useLang();
  const image = getProductImage(p);
  const related = products.filter(x => x.category === p.category && x.slug !== p.slug).slice(0, 4);
  const suggested = recipes.filter(r => r.productSlugs.includes(p.slug));

  return (
    <SiteLayout>
      <section className="mx-auto max-w-7xl px-4 pt-8 pb-16 sm:px-6 lg:px-8">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-chocolate"><ArrowLeft className="h-4 w-4 rtl:rotate-180" /> {t("Back to catalogue", "العودة للكتالوج")}</Link>

        <div className="mt-8 grid gap-10 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-25 blur-3xl" />
            <div className="relative overflow-hidden rounded-3xl border-4 border-cream shadow-luxe bg-gradient-warm">
              <img
                src={image}
                alt={productName(p, lang)}
                className="w-full h-auto aspect-square object-cover"
                onError={event => {
                  const image = event.currentTarget;
                  image.onerror = null;
                  image.src = productFallbackImage(p) || PRODUCT_IMAGE_FALLBACK;
                }}
              />
            </div>
          </div>

          <div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-block rounded-full bg-gold-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-chocolate-deep">{categoryLabel(p.category, lang)}</span>
              <span className="inline-block rounded-full bg-gradient-rich px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-cream">{p.line}</span>
            </div>
            <h1 className="mt-4 font-display text-4xl sm:text-5xl text-chocolate-deep leading-tight">{productName(p, lang)}</h1>
            <p className="mt-2 text-xl text-chocolate-deep/70" dir="rtl">{p.nameAr}</p>
            <div className="mt-3 flex items-center gap-3 text-sm">
              <span className="font-semibold text-caramel">{p.weight}</span>
              <span className="text-muted-foreground">/</span>
              <span className="inline-flex items-center gap-1 text-muted-foreground"><BadgeCheck className="h-4 w-4 text-gold" /> {t("Quality verified", "جودة موثقة")}</span>
            </div>
            <p className="mt-6 text-base text-chocolate-deep/80 leading-relaxed">{productDescription(p, lang)}</p>

            <div className="mt-6 rounded-2xl border border-border bg-cream/60 p-5">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-caramel">{t("Suggested Use", "الاستخدام المقترح")}</h3>
              <p className="mt-2 text-sm text-chocolate-deep/80">{productSuggestedUse(p, lang)}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a href={waLink(p.whatsappMessage)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft hover:shadow-luxe"><MessageCircle className="h-4 w-4" /> {t("Order via WhatsApp", "اطلب عبر واتساب")}</a>
              {p.line === "Catering" && (
                <a href={waLink(`Hello, I would like a wholesale quotation for ${p.nameEn} (${p.weight}) from Let's Bake.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full bg-gradient-rich px-6 py-3 text-sm font-semibold text-cream shadow-soft hover:shadow-luxe">{t("Wholesale Request", "طلب جملة")}</a>
              )}
            </div>

            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>{t("Catalogue line:", "خط الكتالوج:")}</span>
              <span dir="ltr" className="font-semibold">{p.line} / {p.weight}</span>
            </div>
          </div>
        </div>

        {suggested.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl sm:text-3xl text-chocolate-deep">{t("Recipes using this product", "وصفات تستخدم هذا المنتج")}</h2>
            <div className="mt-6 grid gap-6 md:grid-cols-3">
              {suggested.map(r => (
                <article key={r.slug} className="overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-luxe transition-all">
                  <div className="aspect-[4/3] overflow-hidden"><img src={r.image} alt={r.title[lang]} loading="lazy" className="h-full w-full object-cover" /></div>
                  <div className="p-5">
                    <h3 className="font-display text-lg text-chocolate-deep">{r.title[lang]}</h3>
                    <p className="mt-1 text-xs text-caramel font-semibold">{r.level[lang]} / {r.time}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}

        {related.length > 0 && (
          <div className="mt-20">
            <h2 className="font-display text-2xl sm:text-3xl text-chocolate-deep">{t("Similar products", "منتجات مشابهة")}</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {related.map(r => <ProductCard key={r.slug} p={r} />)}
            </div>
          </div>
        )}
      </section>
    </SiteLayout>
  );
}
