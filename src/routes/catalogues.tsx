import { createFileRoute } from "@tanstack/react-router";
import { Download, RefreshCw, FileText } from "lucide-react";
import { SiteLayout } from "@/components/site/SiteLayout";
import { SectionHeading } from "./index";
import { useLang } from "@/lib/i18n";
import { catalogues, waLink } from "@/lib/site-data";

export const Route = createFileRoute("/catalogues")({
  head: () => ({
    meta: [
      { title: "Catalogues & Company Profile — Let's Bake" },
      { name: "description", content: "Download retail and wholesale catalogues, full product list, and the Thimar Al-Rabie company profile." },
      { property: "og:title", content: "Catalogues — Let's Bake" },
      { property: "og:description", content: "Premium baking product catalogues for download." },
    ],
  }),
  component: CataloguesPage,
});

function CataloguesPage() {
  const { t, lang } = useLang();
  return (
    <SiteLayout>
      <section className="bg-gradient-warm py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow={t("Catalogues", "الكتالوجات")} title={t("Download our latest catalogues", "حمّل أحدث كتالوجاتنا")} sub={t("Retail, wholesale, and company profile — everything you need to evaluate Let's Bake.", "تجزئة، جملة، وملف الشركة — كل ما تحتاجه لتقييم ليتس بيك.")} />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {catalogues.map(c => (
          <div key={c.slug} className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border/60 shadow-soft hover:shadow-luxe transition-all hover:-translate-y-1">
            <div className="relative aspect-[3/4] overflow-hidden bg-gradient-warm">
              <img src={c.cover} alt={c.title[lang]} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-chocolate-deep/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-cream">
                <FileText className="h-5 w-5 text-gold" />
                <h3 className="mt-2 font-display text-xl leading-tight">{c.title[lang]}</h3>
              </div>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="text-sm text-muted-foreground flex-1">{c.desc[lang]}</p>
              <div className="mt-4 flex flex-col gap-2">
                {/* TODO: replace with real PDF link */}
                <a href="#" className="inline-flex items-center justify-center gap-2 rounded-full bg-chocolate px-4 py-2.5 text-xs font-semibold text-cream hover:bg-chocolate-deep"><Download className="h-3.5 w-3.5" />{t("Download PDF", "حمّل PDF")}</a>
                <a href={waLink(`Please send the updated ${c.title.en}.`)} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-4 py-2.5 text-xs font-semibold text-chocolate-deep hover:bg-gold-soft"><RefreshCw className="h-3.5 w-3.5" />{t("Request Updated", "اطلب المحدّث")}</a>
              </div>
            </div>
          </div>
        ))}
      </section>
    </SiteLayout>
  );
}