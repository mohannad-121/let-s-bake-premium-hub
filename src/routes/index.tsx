import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, ShieldCheck, Sparkles, Truck, Award, ChefHat, Download, MapPin } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ProductCard } from "@/components/site/ProductCard";
import { useLang } from "@/lib/i18n";
import { categories, products, recipes, waLink } from "@/lib/site-data";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Let's Bake — Premium Baking Products in Jordan" },
      { name: "description", content: "Premium cake mixes, creams, custard, caramel and bakery supplies by Thimar Al-Rabie Food Technology. Wholesale for bakeries & sweet shops across Jordan." },
      { property: "og:title", content: "Let's Bake — Premium Baking Products in Jordan" },
      { property: "og:description", content: "Everything for baking & pastry — for homes, bakeries, cafés and sweet shops." },
      { property: "og:image", content: "/og-home.jpg" },
    ],
  }),
  component: Index,
});

function Index() {
  const { t, lang } = useLang();
  const featured = products.filter(p => p.featured);

  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-warm" />
        <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--chocolate) 1px, transparent 0)", backgroundSize: "24px 24px" }} />
        <div className="relative mx-auto grid max-w-7xl gap-10 px-4 pt-12 pb-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pt-20 lg:pb-28 items-center">
          <div className="animate-fade-in">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-cream/60 backdrop-blur px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-chocolate-deep">
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              {t("Premium Baking & Pastry", "خبز وحلويات فاخرة")}
            </span>
            <h1 className="mt-6 font-display text-5xl leading-[1.05] text-chocolate-deep sm:text-6xl lg:text-7xl">
              {t("Everything for ", "كل ما تحتاجه لـ ")}
              <span className="text-gradient-gold">{t("Baking & Pastry", "الخبز والحلويات")}</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-chocolate-deep/75 sm:text-lg">
              {t(
                "Premium baking products and pastry ingredients for homes, bakeries, cafés and sweet shops across Jordan.",
                "منتجات خبز ومكونات حلويات فاخرة للبيوت والمخابز والمقاهي ومحلات الحلويات في الأردن.",
              )}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" className="group inline-flex items-center gap-2 rounded-full bg-gradient-rich px-7 py-3.5 text-sm font-semibold text-cream shadow-luxe hover:scale-[1.02] transition-transform">
                {t("Explore Products", "استكشف المنتجات")}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180 rtl:group-hover:-translate-x-1" />
              </Link>
              <Link to="/wholesale" className="inline-flex items-center gap-2 rounded-full border-2 border-chocolate/20 bg-cream/60 backdrop-blur px-7 py-3.5 text-sm font-semibold text-chocolate-deep hover:bg-cream hover:border-chocolate transition-colors">
                {t("Request Wholesale Pricing", "اطلب أسعار الجملة")}
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-chocolate-deep/70">
              <div className="flex items-center gap-2"><Award className="h-4 w-4 text-gold" /> {t("Jordan-made", "صنع في الأردن")}</div>
              <div className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-gold" /> {t("Food-safety certified", "معتمد لسلامة الغذاء")}</div>
              <div className="flex items-center gap-2"><Truck className="h-4 w-4 text-gold" /> {t("Nationwide delivery", "توصيل لكل الأردن")}</div>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-gold opacity-30 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2rem] shadow-luxe border-4 border-cream">
              <img src={heroImg} alt="Premium baking ingredients" width={1600} height={1104} className="w-full h-auto object-cover" />
            </div>
            <div className="absolute -bottom-6 ltr:-left-6 rtl:-right-6 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-luxe border border-border">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-rich"><ChefHat className="h-5 w-5 text-cream" /></div>
              <div>
                <div className="font-display text-lg text-chocolate-deep">+200</div>
                <div className="text-[11px] text-muted-foreground">{t("Bakeries trust us", "مخبزاً يثق بنا")}</div>
              </div>
            </div>
            <div className="absolute -top-4 ltr:-right-4 rtl:-left-4 hidden sm:flex items-center gap-3 rounded-2xl bg-card px-5 py-4 shadow-luxe border border-border">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-gradient-gold"><Sparkles className="h-5 w-5 text-chocolate-deep" /></div>
              <div>
                <div className="font-display text-lg text-chocolate-deep">9</div>
                <div className="text-[11px] text-muted-foreground">{t("Product categories", "فئة منتجات")}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <SectionHeading eyebrow={t("Product Categories", "فئات المنتجات")} title={t("A complete pantry for every baker", "مخزن متكامل لكل خبّاز")} sub={t("From cake mixes to caramel, fillings to finishing touches — built for both kitchens and production lines.", "من خلطات الكيك إلى الكراميل والحشوات ولمسات التزيين — مصممة للمطابخ وخطوط الإنتاج.")} />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {categories.slice(0, 8).map((c, i) => (
            <Link
              key={c.key}
              to="/products"
              className="group relative overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-luxe transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div className="aspect-[5/4] overflow-hidden bg-gradient-warm">
                <img src={c.image} alt={c[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg text-chocolate-deep">{c[lang]}</h3>
                <p className="mt-1 text-xs text-muted-foreground line-clamp-2">{c.desc[lang]}</p>
                <div className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-caramel">
                  {t("Browse", "تصفح")} <ArrowRight className="h-3 w-3 rtl:rotate-180 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="bg-cream/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Why Choose Let's Bake", "لماذا ليتس بيك")} title={t("Crafted for taste. Built for trust.", "مصنوعة بإتقان للنكهة. مبنية على الثقة.")} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Award, title: t("Premium Quality", "جودة فاخرة"), text: t("Carefully formulated with food-technology expertise.", "صيغت بعناية بخبرة تكنولوجيا الأغذية.") },
              { icon: ShieldCheck, title: t("Consistent Results", "نتائج ثابتة"), text: t("Reliable batch-to-batch performance.", "أداء موثوق من دفعة لأخرى.") },
              { icon: Truck, title: t("Reliable Supply", "توريد منتظم"), text: t("Monthly delivery plans for businesses.", "خطط توصيل شهرية للأعمال.") },
              { icon: ChefHat, title: t("Chef-Ready", "جاهز للمحترفين"), text: t("Built for both home and commercial use.", "مناسب للاستخدام المنزلي والتجاري.") },
            ].map((f, i) => (
              <div key={i} className="group rounded-2xl bg-card border border-border/60 p-6 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-chocolate-deep group-hover:scale-110 transition-transform">
                  <f.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-lg text-chocolate-deep">{f.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow={t("Featured Products", "منتجات مميزة")} title={t("Our most-loved essentials", "الأكثر طلباً")} className="max-w-2xl" />
          <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-semibold text-chocolate hover:text-caramel">
            {t("View all", "عرض الكل")} <ArrowRight className="h-4 w-4 rtl:rotate-180" />
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map(p => <ProductCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* RECIPES */}
      <section className="bg-gradient-warm py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Recipe Inspiration", "إلهام الوصفات")} title={t("Turn ingredients into showstoppers", "حوّل المكونات إلى تحف")} sub={t("Real recipes built around Let's Bake products — every recipe links straight to the ingredients on WhatsApp.", "وصفات حقيقية مصممة حول منتجات ليتس بيك — كل وصفة ترتبط مباشرة بالمكونات عبر واتساب.")} />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {recipes.slice(0, 3).map(r => (
              <article key={r.slug} className="group overflow-hidden rounded-2xl bg-card shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1">
                <div className="aspect-[4/3] overflow-hidden"><img src={r.image} alt={r.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
                <div className="p-5">
                  <div className="flex gap-2 text-[11px] font-semibold uppercase tracking-wider text-caramel">
                    <span>{r.level[lang]}</span><span>•</span><span>{r.time}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl text-chocolate-deep">{r.title[lang]}</h3>
                  <div className="mt-4 flex gap-2">
                    <Link to="/recipes" className="flex-1 inline-flex items-center justify-center rounded-full bg-chocolate px-3 py-2 text-xs font-semibold text-cream hover:bg-chocolate-deep">{t("View Recipe", "الوصفة")}</Link>
                    <a href={waLink(`I want the ingredients for ${r.title.en} from Let's Bake.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 rounded-full bg-[#25D366] px-3 py-2 text-xs font-semibold text-white"><MessageCircle className="h-3.5 w-3.5" />{t("Order", "اطلب")}</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* B2B BANNER */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-rich p-10 sm:p-16 text-cream shadow-luxe">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />
          <div className="absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-caramel/30 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.4fr_1fr] items-center">
            <div>
              <span className="inline-block rounded-full bg-gold/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">{t("For Businesses", "للأعمال")}</span>
              <h2 className="mt-5 font-display text-3xl sm:text-5xl leading-tight">{t("Wholesale solutions for bakeries & sweet shops", "حلول الجملة للمخابز ومحلات الحلويات")}</h2>
              <p className="mt-5 max-w-2xl text-cream/80">{t("Consistent quality, multiple product lines, easy monthly ordering and a dedicated sales team. Built for serious operators.", "جودة ثابتة، منتجات متنوعة، طلب شهري سهل، وفريق مبيعات مخصص. مصمم للمحترفين.")}</p>
            </div>
            <div className="flex flex-col gap-3">
              <Link to="/wholesale" className="inline-flex items-center justify-center gap-2 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-chocolate-deep hover:bg-gold-soft transition-colors">{t("Request Pricing", "اطلب التسعير")} <ArrowRight className="h-4 w-4 rtl:rotate-180" /></Link>
              <a href={waLink("Hi! I'd like wholesale pricing for my business.")} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-white"><MessageCircle className="h-4 w-4" /> {t("WhatsApp Sales Team", "واتساب فريق المبيعات")}</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHERE / CATALOGUE / CONTACT cards */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8 grid gap-6 md:grid-cols-3">
        <CtaCard icon={MapPin} title={t("Where to Buy", "أين تشتري")} text={t("Find Let's Bake at distributors and stores across Jordan.", "اعثر على منتجاتنا لدى الموزعين والمحلات.")} to="/where-to-buy" cta={t("Find a store", "اعثر على محل")} />
        <CtaCard icon={Download} title={t("Download Catalogues", "حمّل الكتالوجات")} text={t("Retail, wholesale and company profile PDFs.", "كتالوجات التجزئة والجملة وملف الشركة.")} to="/catalogues" cta={t("View catalogues", "عرض الكتالوجات")} />
        <CtaCard icon={MessageCircle} title={t("Contact & Orders", "التواصل والطلبات")} text={t("Reach our team or order directly on WhatsApp.", "تواصل مع فريقنا أو اطلب مباشرة عبر واتساب.")} to="/contact" cta={t("Get in touch", "تواصل معنا")} />
      </section>
    </SiteLayout>
  );
}

export function SectionHeading({ eyebrow, title, sub, className = "" }: { eyebrow: string; title: string; sub?: string; className?: string }) {
  return (
    <div className={`text-center mx-auto max-w-3xl ${className}`}>
      <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
        <span className="h-px w-8 bg-gold" /> {eyebrow} <span className="h-px w-8 bg-gold" />
      </div>
      <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl text-chocolate-deep leading-tight">{title}</h2>
      {sub && <p className="mt-4 text-base text-muted-foreground leading-relaxed">{sub}</p>}
    </div>
  );
}

function CtaCard({ icon: Icon, title, text, to, cta }: { icon: React.ComponentType<{ className?: string }>; title: string; text: string; to: string; cta: string }) {
  return (
    <Link to={to as never} className="group rounded-2xl border border-border/60 bg-card p-6 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1">
      <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-chocolate-deep"><Icon className="h-6 w-6" /></div>
      <h3 className="mt-5 font-display text-xl text-chocolate-deep">{title}</h3>
      <p className="mt-2 text-sm text-muted-foreground">{text}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-caramel">{cta} <ArrowRight className="h-4 w-4 rtl:rotate-180 transition-transform group-hover:translate-x-1" /></div>
    </Link>
  );
}
