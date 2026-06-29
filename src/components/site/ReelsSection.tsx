import { Link } from "@tanstack/react-router";
import { ArrowRight, Film } from "lucide-react";
import { useLang } from "@/lib/i18n";

const reelModules = import.meta.glob<string>("../../facebook reels/*.mp4", {
  eager: true,
  import: "default",
  query: "?url",
});

export const reels = Object.values(reelModules).map((src, index) => ({
  src,
  title: `Let’s Bake Reel ${index + 1}`,
  caption: [
    "Product moments from the Let’s Bake kitchen and catalogue.",
    "A closer look at baking mixes, desserts and serving ideas.",
    "Behind the brand: premium baking made for homes and professionals.",
  ][index % 3],
}));

export function ReelsSection({ limit, showViewAll = true, className = "" }: { limit?: number; showViewAll?: boolean; className?: string }) {
  const { t } = useLang();
  const visibleReels = typeof limit === "number" ? reels.slice(0, limit) : reels;

  if (visibleReels.length === 0) return null;

  return (
    <section className={`relative overflow-hidden bg-cream/50 py-20 ${className}`}>
      <div className="absolute inset-0 opacity-[0.05]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, var(--chocolate-deep) 1px, transparent 0)", backgroundSize: "28px 28px" }} />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
              <span className="h-px w-8 bg-gold" />
              {t("Brand Videos", "فيديوهات العلامة")}
            </div>
            <h2 className="mt-4 font-display text-3xl leading-tight text-chocolate-deep sm:text-4xl lg:text-5xl">
              {t("Watch Let’s Bake in Action", "شاهد ليتس بيك أثناء العمل")}
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("Facebook reels and product moments framed with the same premium purple and gold identity as the catalogue.", "ريلز فيسبوك ولقطات المنتجات بإطار فاخر من هوية الكتالوج البنفسجية والذهبية.")}
            </p>
          </div>
          {showViewAll && (
            <Link to="/reels" className="inline-flex items-center gap-2 rounded-full border border-chocolate/20 bg-card px-5 py-2.5 text-sm font-semibold text-chocolate-deep shadow-soft transition-all hover:bg-gold-soft hover:shadow-luxe">
              {t("View all reels", "عرض كل الريلز")}
              <ArrowRight className="h-4 w-4 rtl:rotate-180" />
            </Link>
          )}
        </div>

        <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-3">
          {visibleReels.map((reel, index) => (
            <article key={reel.src} className="group rounded-[1.65rem] bg-gradient-rich p-[2px] shadow-luxe transition-all duration-300 hover:-translate-y-1">
              <div className="overflow-hidden rounded-[1.55rem] bg-card">
                <div className="relative bg-chocolate-deep">
                  <div className="absolute left-5 top-5 z-10 inline-flex items-center gap-1.5 rounded-full bg-gold px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-chocolate-deep shadow-gold">
                    <Film className="h-3 w-3" />
                    {t("Facebook Reel", "ريل فيسبوك")}
                  </div>
                  <video
                    src={reel.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="aspect-[9/16] max-h-[620px] w-full bg-chocolate-deep object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="h-1 w-16 rounded-full bg-gold" />
                  <h3 className="mt-4 font-display text-xl text-chocolate-deep">
                    {t(reel.title, `ريل ليتس بيك ${index + 1}`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {t(reel.caption, "لقطة قصيرة من عالم ليتس بيك ومنتجات الخبز والحلويات.")}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
