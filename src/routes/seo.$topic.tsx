import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { useLang } from "@/lib/i18n";
import { products, seoTopics, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/seo/$topic")({
  head: ({ params }) => {
    const t = seoTopics[params.topic];
    return {
      meta: [
        { title: t ? `${t.en.title} — Let's Bake` : "Let's Bake" },
        { name: "description", content: t?.en.intro ?? "" },
        { name: "keywords", content: t?.en.keywords.join(", ") ?? "" },
        { property: "og:title", content: t?.en.title ?? "" },
        { property: "og:description", content: t?.en.intro ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const topic = seoTopics[params.topic];
    if (!topic) throw notFound();
    return { topic, slug: params.topic };
  },
  notFoundComponent: () => (
    <SiteLayout><div className="p-24 text-center"><h1 className="font-display text-4xl">Topic not found</h1></div></SiteLayout>
  ),
  errorComponent: ({ reset }) => <SiteLayout><div className="p-20"><button onClick={reset}>Retry</button></div></SiteLayout>,
  component: SeoTopicPage,
});

function SeoTopicPage() {
  const { topic } = Route.useLoaderData();
  const { lang, t } = useLang();
  const content = topic[lang];
  const matches = products.filter(p => topic.categories.includes(p.category));

  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block rounded-full bg-cream/70 border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-chocolate-deep">{t("SEO Landing", "صفحة SEO")}</span>
          <h1 className="mt-5 font-display text-4xl sm:text-6xl text-chocolate-deep leading-tight">{content.title}</h1>
          <p className="mt-5 text-lg text-chocolate-deep/80">{content.intro}</p>
          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {content.keywords.map(k => <span key={k} className="rounded-full bg-cream/80 border border-border px-3 py-1 text-[11px] font-medium text-chocolate-deep">{k}</span>)}
          </div>
          <a href={waLink(`I'm interested in ${topic.en.title}.`)} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-white shadow-soft"><MessageCircle className="h-4 w-4" /> {t("Order via WhatsApp", "اطلب عبر واتساب")}</a>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="font-display text-2xl sm:text-3xl text-chocolate-deep">{t("Featured products", "منتجات مميزة")}</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {matches.map(p => <ProductCard key={p.slug} p={p} />)}
        </div>
        <div className="mt-10">
          <Link to="/products" className="inline-flex items-center gap-2 text-sm font-semibold text-chocolate hover:text-caramel">{t("Browse all products", "تصفح كل المنتجات")} <ArrowRight className="h-4 w-4 rtl:rotate-180" /></Link>
        </div>
      </section>

      <section className="bg-cream/60 py-16">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h3 className="font-display text-2xl text-chocolate-deep">{t("Related SEO pages", "صفحات SEO ذات صلة")}</h3>
          <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {Object.entries(seoTopics).map(([slug, top]) => (
              <Link key={slug} to="/seo/$topic" params={{ topic: slug }} className="rounded-xl border border-border bg-card p-4 hover:shadow-soft transition-all">
                <div className="font-display text-base text-chocolate-deep">{top[lang].title}</div>
                <div className="mt-1 text-xs text-muted-foreground line-clamp-2">{top[lang].intro}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}