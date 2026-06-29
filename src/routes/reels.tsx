import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { ReelsSection } from "@/components/site/ReelsSection";
import { useLang } from "@/lib/i18n";

export const Route = createFileRoute("/reels")({
  head: () => ({
    meta: [
      { title: "Videos & Reels — Let's Bake" },
      { name: "description", content: "Watch Let’s Bake Facebook reels, brand videos and product moments." },
      { property: "og:title", content: "Videos & Reels — Let's Bake" },
      { property: "og:description", content: "Premium Let’s Bake videos and Facebook reels." },
    ],
  }),
  component: ReelsPage,
});

function ReelsPage() {
  const { t } = useLang();
  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-caramel">
              <span className="h-px w-8 bg-gold" />
              {t("Videos / Reels", "فيديوهات / ريلز")}
              <span className="h-px w-8 bg-gold" />
            </div>
            <h1 className="mt-4 font-display text-4xl leading-tight text-chocolate-deep sm:text-5xl">
              {t("Let’s Bake moments, beautifully framed", "فيديوهاتنا ")}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              {t("Explore brand reels, product shots and dessert inspiration from the Let’s Bake Facebook library.", "استكشف ريلز العلامة ولقطات المنتجات وإلهام الحلويات من مكتبة فيسبوك الخاصة بليتس بيك.")}
            </p>
          </div>
        </div>
      </section>
      <ReelsSection showViewAll={false} className="pt-16" />
    </SiteLayout>
  );
}
