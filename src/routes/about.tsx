import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye, ShieldCheck, FlaskConical } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import heroImg from "@/assets/hero.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Thimar Al-Rabie Food Technology" },
      { name: "description", content: "Thimar Al-Rabie Food Technology — the Jordanian food-tech company behind the Let's Bake premium baking products brand." },
      { property: "og:title", content: "About Thimar Al-Rabie Food Technology" },
      { property: "og:description", content: "A Jordan-based food technology company crafting premium baking & pastry products." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <section className="relative overflow-hidden bg-gradient-warm">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-block rounded-full bg-cream/70 border border-gold/40 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-chocolate-deep">{t("About Us", "من نحن")}</span>
            <h1 className="mt-5 font-display text-5xl lg:text-6xl text-chocolate-deep leading-tight">{t("Crafted in Jordan, trusted by professionals.", "صُنعنا في الأردن، وبنينا ثقة المحترفين.")}</h1>
            <p className="mt-5 text-lg text-chocolate-deep/80 leading-relaxed">{t(
              "Thimar Al-Rabie Food Technology is a Jordanian food-tech company creating the Let's Bake brand — a complete portfolio of premium baking products and pastry ingredients for homes, bakeries, cafés, restaurants and sweet shops.",
              "ثمار الربيع لتكنولوجيا الأغذية شركة أردنية تطلق علامة ليتس بيك — محفظة كاملة من منتجات الخبز والحلويات الفاخرة للبيوت والمخابز والمقاهي والمطاعم ومحلات الحلويات.",
            )}</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-gold opacity-30 blur-3xl" />
            <img src={heroImg} alt="" className="relative rounded-3xl shadow-luxe border-4 border-cream w-full h-auto" />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, t: t("Our Mission", "مهمتنا"), d: t("Empower every baker — from home kitchens to production lines — with consistent, premium ingredients.", "تمكين كل خبّاز — من المطابخ المنزلية إلى خطوط الإنتاج — بمكونات فاخرة وثابتة.") },
            { icon: Eye, t: t("Our Vision", "رؤيتنا"), d: t("To become the most trusted baking products brand across Jordan and the wider region.", "أن نصبح علامة منتجات الخبز الأكثر ثقة في الأردن والمنطقة.") },
            { icon: ShieldCheck, t: t("Quality Promise", "وعد الجودة"), d: t("Every batch is tested for taste, texture and performance. Food-safety certified.", "كل دفعة تُختبر للنكهة والقوام والأداء. معتمدة لسلامة الغذاء.") },
            { icon: FlaskConical, t: t("Food Technology", "تكنولوجيا الغذاء"), d: t("Recipes engineered by our food scientists to deliver consistent results every bake.", "وصفات مهندسة من علماء الغذاء لدينا لنتائج ثابتة.") },
          ].map((b, i) => (
            <div key={i} className="rounded-2xl bg-card border border-border/60 p-6 shadow-soft">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-gold text-chocolate-deep"><b.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 font-display text-lg text-chocolate-deep">{b.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cream/60 py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading eyebrow={t("Our Story", "قصتنا")} title={t("Built on quality, grown by trust.", "بُنينا على الجودة، ونمونا بالثقة.")} />
          <div className="mt-8 space-y-5 text-base text-chocolate-deep/80 leading-relaxed text-start">
            <p>{t("Thimar Al-Rabie Food Technology was founded with one belief: that great baking starts with great ingredients. From a small workshop in Amman, we set out to formulate baking products that match the standards of professional pastry chefs while remaining easy enough for any home baker to master.", "تأسست ثمار الربيع لتكنولوجيا الأغذية على قناعة واحدة: أن الخبز الرائع يبدأ بمكونات رائعة. من ورشة صغيرة في عمان، انطلقنا لصياغة منتجات تليق بمعايير الطهاة المحترفين وتظل سهلة لكل خبّاز منزلي.")}</p>
            <p>{t("Today, Let's Bake products reach hundreds of bakeries, cafés, sweet shops and households across Jordan — through a growing distribution network and direct B2B partnerships.", "اليوم، تصل منتجات ليتس بيك إلى مئات المخابز والمقاهي ومحلات الحلويات والبيوت في الأردن — عبر شبكة توزيع موسعة وشراكات مباشرة مع الأعمال.")}</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}